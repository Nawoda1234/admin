import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness Tracker Admin",
  description: "Admin dashboard for the fitness tracker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // FIX: Add suppressHydrationWarning to the <html> tag
    <html lang="en" className="h-full bg-gray-50" suppressHydrationWarning={true}>
      <body className={`${inter.className} h-full`}>
        {children}
      </body>
    </html>
  );
}