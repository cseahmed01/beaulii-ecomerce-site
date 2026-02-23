"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext(null);

export function AdminAuth({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAuth();
  }, []);

  const checkAdminAuth = async () => {
    try {
      const response = await fetch("/api/admin/auth/check", {
        method: "GET",
        credentials: "include",
      });
      
      if (response.ok) {
        const data = await response.json();
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    setAdmin(data.admin);
    return data;
  };

  const logout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setAdmin(null);
    }
  };

  return (
    <AdminAuthContext.Provider value={{ admin, loading, isAuthenticated: !!admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuth");
  }
  return context;
}
