import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

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
        <MainFooter/>
      </body>
    </html>
  )
}
