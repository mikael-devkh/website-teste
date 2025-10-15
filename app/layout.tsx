import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "WT Serviços de Tecnologia | Field Service e Desmobilizações de Loja",
  description:
    "Suporte técnico especializado em Field Service, Service Desk, infraestrutura de TI e desmobilizações completas de lojas com foco em impressoras Zebra.",
  keywords: "field service, desmobilização de loja, impressoras zebra, suporte técnico, service desk, infraestrutura",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
