import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeMobile Employees",
  description:
    "Technical test for admission to the position of junior developer at BeMobile",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
