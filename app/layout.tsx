import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vansh Saini — Full Stack Developer',
  description:
    'Full Stack Developer focused on building modern, scalable, and performance-driven web applications using React, Node.js, and MongoDB.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'MongoDB', 'MERN Stack', 'Vansh Saini'],
  authors: [{ name: 'Vansh Saini' }],
  openGraph: {
    title: 'Vansh Saini — Full Stack Developer',
    description: 'Building modern, scalable web applications with React, Node.js, and MongoDB.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
