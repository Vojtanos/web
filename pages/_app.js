import 'tailwindcss/tailwind.css'
import './styles.css'
//import '@fortawesome/fontawesome-free/js/brands.js';
//import '@fortawesome/fontawesome-free/js/solid.js';
//import '@fortawesome/fontawesome-free/js/fontawesome.js';
import Head from "next/head";
import Header from '../components/Header.js';
import styles from './_app.module.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <div className={`${styles.background} md:pb-10 pt-20`}>
      <Head>
        <title>Vojtěch Kunc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <div className="container mx-auto h-auto bg-white max-w-screen-lg pb-10 border">
        <div className="pt-3 px-5">
          <Component {...pageProps} /> 
        </div>
      </div>
    </div>
      
    )
}
