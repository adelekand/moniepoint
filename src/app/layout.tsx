import { twMerge } from "tailwind-merge";
import "./globals.css";
import { grtskexa, grtskpeta, plantin } from "@/utils/fonts";

export const metadata = {
  title: "NorthOne",
  description: "We built the NorthOne Account to make starting a small business more accessible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const className = twMerge(
    grtskexa.variable,
    grtskpeta.variable,
    plantin.variable
  );
  return (
    <html lang="en">
      <body className={className}>{children}</body>
    </html>
  );
}
