import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VIAORA — Tu viaje, bajo control', description: 'Información de movilidad, trenes, vuelos e incidencias en España.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
