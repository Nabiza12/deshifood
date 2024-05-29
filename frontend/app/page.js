import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import HomeHero from '@/components/pages/Home/HomeHero/HomeHero'
import CityCardList from '@/components/pages/Home/CityCardList/CityCardList'
import DownloadApp from '@/components/pages/Home/DownloadApp/DownloadApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <CityCardList />
      <DownloadApp />
    </main>
  )
}
