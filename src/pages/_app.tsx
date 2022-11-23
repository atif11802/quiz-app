import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider storageKey={"theme"} enableSystem={true} attribute="class">
     <Header/>
    <Component {...pageProps} />
  </ThemeProvider> 


}

