'use client'
import { Inter } from 'next/font/google'
import AuthContext from '@/context/AuthContext'
import Navbar from './views/Navbar'
import './globals.css'
import { RecoilRoot } from 'recoil'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('rootLayout');
  return (    
    <html lang="en" className={inter.className}>
      <body className="w-full overflow-auto ">
        <AuthContext> 
          <RecoilRoot>
            {children}  
          </RecoilRoot>                        
        </AuthContext>       
      </body>
    </html>  
  )
}




