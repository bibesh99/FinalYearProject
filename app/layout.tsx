import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '../components/Providers'
import Navbar from '../components/navbar/Navbar'
import { ThemeProvider } from './Theme-Provider'
import VerticalNavbar from '@/components/verticalNavbar/VerticalNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailor Ease',
  description: 'Online Tailoring Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        {/* <Providers> */}
        <div className='w-full h-full'>
            <div className='main-navbar'>
            <Navbar/>
            </div>
            <div className='main-body container flex w-full h-full'>
                <VerticalNavbar/>
              <div className='md:flex w-full bg-primaryBlue '>{children}</div>
            </div>
        </div>
          
        {/* </Providers> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
