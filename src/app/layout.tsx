import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { siteConfig } from "@/config/config"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `s% | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="max-w-screen-2xl px-4 md:px-8 lg:px-20 mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
