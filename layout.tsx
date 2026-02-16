import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "San Miguel - Miel Artesanal de Guatemala",
  description:
    "Miel 100% pura y artesanal de Finca San Miguel, Quetzaltenango. Sin procesos industriales, directa de la colmena a tu mesa.",
  keywords: [
    "miel artesanal",
    "miel pura",
    "Guatemala",
    "Quetzaltenango",
    "San Miguel",
    "miel natural",
  ],
  openGraph: {
    title: "San Miguel - Miel Artesanal de Guatemala",
    description:
      "Miel 100% pura y artesanal de Finca San Miguel, Quetzaltenango.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#D4A574",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
