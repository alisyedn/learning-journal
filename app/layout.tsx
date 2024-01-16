import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Meta Rag's Learning Journal`,
  description: `Meta Rag's Learning Journal for random notes!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader/>
        {children}
      </body>
    </html>
  )
}
