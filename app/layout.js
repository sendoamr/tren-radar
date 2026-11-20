import './styles.css';
import {GoogleAnalytics} from '@next/third-parties/google';
export const metadata={title:'TrenRadar | Trenes en España',description:'Busca trenes por número, origen y destino. Renfe, iryo y OUIGO.'};
export default function RootLayout({children}){const ga=process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;return <html lang="es"><body>{children}</body>{ga?<GoogleAnalytics gaId={ga}/>:null}</html>}
