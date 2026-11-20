import './styles.css';
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata={title:'TrenRadar | Estado de trenes en España',description:'Consulta el estado disponible de trenes de larga y media distancia en España.'};
export default function RootLayout({children}){const gaId=process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;return <html lang="es"><body>{children}</body>{gaId?<GoogleAnalytics gaId={gaId}/>:null}</html>}
