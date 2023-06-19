import './globals.css'

export const metadata = {
  title: 'Language Learner',
  description: 'An app designed to truly expose you to all that a language may throw at you; Intended to aid in learning',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
