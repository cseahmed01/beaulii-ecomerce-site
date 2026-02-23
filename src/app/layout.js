import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AdminAuth } from "@/components/AdminAuth";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beaulii - Natural Skincare & Beauty Products",
  description: "Discover Beaulii's natural skincare and beauty products. Dermatologically tested, SLS & Paraben free products for radiant skin.",
  icons: {
    icon: "/images/logo/favicon/Favicon-logo-01.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <AdminAuth>
          <CartProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </CartProvider>
        </AdminAuth>
      </body>
    </html>
  );
}