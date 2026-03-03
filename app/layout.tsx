import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sociedade de Assistência aos Pobres - Cuidado, Amor e Dignidade na Melhor Idade',
  description:
    'Instituicao de Longa Permanência para Idosos dedicada a oferecer acolhimento, respeito e qualidade de vida. Conheça nossa estrutura, equipe e como você pode ajudar.',
  keywords: [
    'ILPI',
    'asilo',
    'casa de repouso',
    'idosos',
    'cuidado',
    'acolhimento',
    'doação',
    'voluntariado',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D6A4F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_lora.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
