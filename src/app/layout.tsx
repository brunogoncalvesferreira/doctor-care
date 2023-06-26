import { ReactNode } from 'react'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans',
  weight: '400',
})

export const metadata = {
  title: 'Doctor care',
  description: 'Projeto construido em Nextjs, Tailwindcss, TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
