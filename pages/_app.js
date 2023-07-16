import '@/styles/globals.css'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
