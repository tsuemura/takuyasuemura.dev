import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Takuya Suemura - Software Engineer / Test Automation Specialist",
  description: "テスト自動化、品質保証、DevOps、スクラムを専門とするソフトウェアエンジニア。「テスト自動化実践ガイド」著者。",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}