import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ecomtabil",
    template: "%s | Ecomtabil",
  },
  description: "Contabilidade especializada em ecommerce, marketplaces e ERPs.",
  icons: {
    icon: [
      { url: "/ecomtabil-website/icon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/ecomtabil-website/images/favicon-white.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
