import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Providers from "@/Providers";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} overflow-hidden`}>
        <Providers>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <main className="w-full pt-16">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
