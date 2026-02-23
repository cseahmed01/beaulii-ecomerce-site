import { PrismaClient } from "@prisma/client";
import { PrismaMySQL } from "@prisma/adapter-mysql";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Seeding admin user...");

  // Create MySQL connection pool
  const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "beaulii",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // Create adapter
  const adapter = new PrismaMySQL(pool);

  // Create Prisma Client with adapter
  const prisma = new PrismaClient({ adapter });

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@beaulii.com" },
    update: {},
    create: {
      email: "admin@beaulii.com",
      password: hashedPassword,
      firstName: "Admin",
      lastName: "User",
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });

  console.log("Admin user created:", admin.email);
  console.log("Password: admin123");

  await pool.end();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
