import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WorthIt - Smart Shopping Assistant | Make Better Buying Decisions",
  description:
    "AI-powered Chrome extension that helps you make smarter purchasing decisions with cost-per-use calculations, time-to-afford metrics, and impulse control features. Built for Indian shoppers.",
  keywords:
    "smart shopping, cost analysis, chrome extension, amazon india, myntra, purchase decisions, impulse control",
  authors: [{ name: "WorthIt Team" }],
  openGraph: {
    title: "WorthIt - Smart Shopping Assistant",
    description: "Make smarter buying decisions with AI-powered cost analysis",
    url: "https://worthit-extension.com",
    siteName: "WorthIt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorthIt Smart Shopping Assistant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorthIt - Smart Shopping Assistant",
    description: "Make smarter buying decisions with AI-powered cost analysis",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
