import "@/app/globals.css";

export const metadata = {
  title: "Beaulii Admin Panel",
  description: "Beaulii e-commerce admin panel",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
