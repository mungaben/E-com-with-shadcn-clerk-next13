import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ClerkProvider } from '@clerk/nextjs'
import ModalProviders from '@/Providers/ModalProviders'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProviders/>
        {children}
        
        
        </body>
    </html>
    </ClerkProvider>
  )
}
