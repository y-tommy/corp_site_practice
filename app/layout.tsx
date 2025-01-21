import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export const metadata: Metadata = {
  title: "⚪︎⚪︎株式会社",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="flex flex-col min-h-screen"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
