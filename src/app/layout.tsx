import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perplexity",
  description:
    "Perplexity is a free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "__variable_598ab8 __variable_dd3642 __variable_8a67e8 __variable_1826c3 __variable_f8d077 bg-transparent md:bg-offset dark:md:bg-offsetDark"
        }
      >
        {children}
      </body>
    </html>
  );
}
