import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IgnasPlace Social',
  description: 'Simple Social Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
