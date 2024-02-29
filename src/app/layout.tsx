import { Metadata } from "next"
import localFont from 'next/font/local'
import Banner from "@modules/layout/templates/banner"

import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const satoshi = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Satoshi-variable.ttf',
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Satoshi-variable.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Satoshi-variable.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Satoshi-variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <Banner />
        <main className={`relative ${satoshi.variable}`}>{props.children}</main>
      </body>
    </html>
  )
}
