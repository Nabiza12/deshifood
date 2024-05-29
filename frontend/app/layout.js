
import './globals.scss'
import { Providers } from '@/store/Providers'


export const metadata = {
  title: 'DESHI FOOD',
  description: 'Elevate your dining experience with visually stunning Deshi food.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
