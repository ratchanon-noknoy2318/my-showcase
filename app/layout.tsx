import { Playfair_Display, Noto_Serif_Thai } from 'next/font/google'
import './global.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const notoSerifThai = Noto_Serif_Thai({
  weight: ['400', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${notoSerifThai.variable}`}>{children}</body>
    </html>
  )
}