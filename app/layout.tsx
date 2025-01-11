import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "url shortening",
  description: "shorten your API with no hesitataion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
