import type { Metadata } from "next";
import Header from "./ui/Header/Header";
import "./reset.scss";
import "./globals.scss";
import { Manrope, PT_Sans_Caption } from "next/font/google";

export const metadata: Metadata = {
  title: "GastroTour",
  description: "GastroTour",
};

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

const sans_caption = PT_Sans_Caption({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.className} ${sans_caption.className}`}
    >
      <Header />
      <body>{children}</body>
    </html>
  );
}
