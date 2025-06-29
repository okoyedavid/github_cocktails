import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohito Cocktails",
  description: "For all the cocktails you could want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
