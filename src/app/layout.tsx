import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixers Finance · Portal hipotecario",
  description:
    "Portal privado de Fixers Finance para seguir tu operación hipotecaria paso a paso: documentación, mensajes con tu asesor, ofertas y próximos pasos hasta la firma.",
  applicationName: "Fixers Finance",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fixers",
  },
  other: {
    // Compatibilidad con iPhones más antiguos (modo pantalla completa).
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
