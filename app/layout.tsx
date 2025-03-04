import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Al-Sayyah real-estate',
  description: 'Al-Sayyah real-estate website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
         <Navbar />
        {children}
        </body>
    </html>
  )
}
