import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Taskify - Organize Your Work, Boost Your Productivity',
  description: 'Modern task management tool with simple interface and powerful features. Collaborate with your team, track progress in real-time, and access from anywhere.',
  keywords: 'task management, productivity, collaboration, project management, team work',
  authors: [{ name: 'Taskify Team' }],
  creator: 'Taskify',
  publisher: 'Taskify',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taskify.com',
    title: 'Taskify - Organize Your Work, Boost Your Productivity',
    description: 'Modern task management tool with simple interface and powerful features.',
    siteName: 'Taskify',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taskify - Task Management Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taskify - Organize Your Work, Boost Your Productivity',
    description: 'Modern task management tool with simple interface and powerful features.',
    images: ['/images/og-image.jpg'],
    creator: '@taskify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}