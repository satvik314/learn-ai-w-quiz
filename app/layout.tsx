import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI ARCADE — Learn AI w/ Quiz",
  description: "Retro arcade-style quiz game for learning popular AI topics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
