import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Context Switcher — Minimize Context Switching Costs',
  description: 'Track when developers switch between projects and tasks. Get ML-powered batching recommendations to reduce context switching overhead for your engineering team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e11bd533-7d70-44c9-bea6-10142a5b546c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
