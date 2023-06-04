'use client'

import './globals.css'
import { Raleway } from 'next/font/google'
import BurgerMenu from '@/layouts/burger_menu'
import Header from '@/layouts/header'
import BurgerContext from '@/context/burger_context'

const raleway = Raleway({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'ІП-12',
  description: 'Ласкаво просимо до ІП-12',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})


{
  return (
    <html lang="en">
      <body className={raleway.className}>
          <BurgerContext>
            <Header />
            <BurgerMenu/>
            {children}
          </BurgerContext>
      </body>
    </html>
  )
}
