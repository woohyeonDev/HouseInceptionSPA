import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import AuthContext from '@/context/AuthContext'
import Navbar from './Navbar'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en" className={inter.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main className="px-6">{children}</main>
        </AuthContext>
      </body>
    </html>  
  )
}
