import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lior Bela - Director @ Microsoft Intune',
  description: 'Personal landing page of Lior Bela, Director of Microsoft Intune, speaker, and community leader.',
  authors: [{ name: 'Lior Bela' }],
  keywords: ['Microsoft Intune', 'Endpoint Management', 'Technology Leadership', 'Community'],
  openGraph: {
    title: 'Lior Bela',
    description: 'Director @ Microsoft Intune | Speaker | Community Leader',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-microsoft-dark text-gray-900 dark:text-gray-100 transition-colors">
        {children}
      </body>
    </html>
  )
}