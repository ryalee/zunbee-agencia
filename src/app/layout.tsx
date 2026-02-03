import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZunBee | Desenvolvimento de software, Apps e Sistemas Web",
  description: "Agência de desenvolvimento de software, sistemas web e aplicativos móveis. Transformamos problemas em inovação e ideias em realidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
