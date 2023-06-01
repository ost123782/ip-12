import './globals.css'
import { Raleway } from 'next/font/google'

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
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
