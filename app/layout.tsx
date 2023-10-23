import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Switch from '@/components/switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filemon Márk | Portfólió',
  description: 'Portfólió',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-black dark:text-gray-100 text-black text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#d5d5d5] dark:bg-gray-900 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#cacaca] dark:bg-gray-900 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />
        {children}
        <Switch />
        <Footer />
      </body>
    </html>
  )
}
