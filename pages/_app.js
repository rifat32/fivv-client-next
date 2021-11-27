import Footer from '../components/Footer'
import '../styles/globals.css'
import "../styles/testimonials.css"

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
