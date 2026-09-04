import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Javier Olguín | Medicina Integral en Houston",
  description:
    "Consulta de medicina integral, prevención, salud metabólica y control de peso con el Dr. Javier Olguín en Houston, Texas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a201c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/clinic-hero.webp" as="image" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
