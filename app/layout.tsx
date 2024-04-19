import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anisha Mohan | About",
  description: "Personal Website of Anisha Mohan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
