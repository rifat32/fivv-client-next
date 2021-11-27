import Footer from '../components/Footer'
import '../styles/globals.css'
import "../styles/testimonials.css"
import Link from 'next/link'


function MyApp({ Component, pageProps }) {

  return <>

    <Link href="/">
    <a  className="btn btn-success">Home</a></Link>


    <Link href="/testimonials">
    <a className="btn btn-success">Testiminial</a></Link>
 
  <Component {...pageProps} />
  
  </>
}

export default MyApp
