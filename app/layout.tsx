import type { Metadata } from "next";
import Header from "./ui/Header/Header";
import "./reset.scss";
import "./globals.scss";

export const metadata: Metadata = {
  title: "GastroTour",
  description: "GastroTour",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <Header />
      <body>{children}</body>
    </html>
  );
}
