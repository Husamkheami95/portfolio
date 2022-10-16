import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import '../styles/globals.css'
import { appWithTranslation } from "next-i18next";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);

  return(
    <ThemeProvider attribute='class'>
  <Component {...pageProps} />  
    </ThemeProvider>
  )

  
}



export default  appWithTranslation(MyApp);
