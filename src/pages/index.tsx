import Head from 'next/head'
import { useTheme } from '@/hooks/use-theme'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/pages/Home.module.css'
import Layout from '@/components/layout-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useTheme({
    dark: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#000000',
    }
  })
  
  return (
    <Layout>
        hallooo
    </Layout>
  )
}
