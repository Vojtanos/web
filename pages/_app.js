import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
      <div className="container mx-auto h-screen">
        <div className="flex flex-col">
          <Navbar />
          <Component {...pageProps} /> 
          <Footer />
        </div>
      </div>
    )
}
