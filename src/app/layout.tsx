import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFU Surge Take-home Challenge",
  description: "Take-home Challenge by Austin",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
