import { Quicksand } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

import './globals.css'
import ActiveStatus from './components/ActiveStatus'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercury Messenger',
  description: 'A Facebook Messenger clone by Mercury',
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={quicksand.className}
      >
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
