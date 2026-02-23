import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

async function getConnection() {
  return await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "beaulii",
  });
}

export async function POST(request) {
  let connection;
  
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    connection = await getConnection();

    // Find admin user
    const [users] = await connection.execute(
      "SELECT * FROM User WHERE email = ?",
      [email]
    );

    let admin = users[0];

    // If admin doesn't exist, create demo admin
    if (!admin) {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const [result] = await connection.execute(
        "INSERT INTO User (email, password, firstName, lastName, role, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())",
        [email, hashedPassword, "Admin", "User", "SUPER_ADMIN", true]
      );
      
      admin = {
        id: result.insertId,
        email,
        firstName: "Admin",
        lastName: "User",
        role: "SUPER_ADMIN",
        isActive: true,
      };
      
      const response = NextResponse.json(
        {
          message: "Admin account created successfully!",
          admin: {
            id: admin.id,
            email: admin.email,
            firstName: admin.firstName,
            lastName: admin.lastName,
            role: admin.role,
          },
        },
        { status: 200 }
      );

      // Set session cookie
      const sessionData = Buffer.from(JSON.stringify({
        id: admin.id,
        email: admin.email,
        role: admin.role,
      })).toString("base64");

      response.cookies.set("admin_token", sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      return response;
    }

    // Check if user is an admin
    if (admin.role !== "ADMIN" && admin.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        { message: "Access denied. Admin privileges required." },
        { status: 403 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check if account is active
    if (!admin.isActive) {
      return NextResponse.json(
        { message: "Your account has been deactivated" },
        { status: 403 }
      );
    }

    // Create response with user data
    const response = NextResponse.json(
      {
        message: "Login successful",
        admin: {
          id: admin.id,
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role,
        },
      },
      { status: 200 }
    );

    // Set session cookie
    const sessionData = Buffer.from(JSON.stringify({
      id: admin.id,
      email: admin.email,
      role: admin.role,
    })).toString("base64");

    response.cookies.set("admin_token", sessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { message: "Internal server error: " + error.message },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
