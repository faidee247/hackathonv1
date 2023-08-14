// import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/shared/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanity',
  description: 'Sanity Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
