import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Header />
      <div className="container mx-auto h-auto shadow-lg">
        <div className="flex flex-col">
          <Component {...pageProps} /> 
        </div>
      </div>
      <Footer />
    </div>
      
    )
}
