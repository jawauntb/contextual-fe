import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MobileMenu from '../components/mobileMenu';


function MyApp({ Component, pageProps }: AppProps) {
  return <div className="mb-6 flex min-h-screen flex-col py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-yellow-100">
    <MobileMenu />
    <Component {...pageProps} />
  </div>
}

export default MyApp
