"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if we're on an admin route
  const isAdminRoute = pathname?.startsWith("/admin");
  
  // For admin routes, don't show Navbar and Footer
  if (isAdminRoute) {
    return (
      <>
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#5a2a0f',
              color: '#fff',
              borderRadius: '8px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
          }}
        />
      </>
    );
  }
  
  // For regular routes, show Navbar and Footer
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#5a2a0f',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
}
