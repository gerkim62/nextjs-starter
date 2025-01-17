"use client";
import React from "react";
import ThemeProvider from "@/Providers/ThemeProvider";
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
