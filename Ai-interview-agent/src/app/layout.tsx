import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Interview Agent',
  description: 'Intelligent AI-powered interview platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
