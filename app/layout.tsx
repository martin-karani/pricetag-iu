import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "PriceTag - Compare Prices for Electronics and More",
  description:
    "Discover the best deals on phones, gadgets, and electronics with PriceTag. Compare prices from top retailers, read reviews, and make informed purchasing decisions. Save money on your favorite tech products today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
