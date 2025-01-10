import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";

//importing header from components
import Header from "@/components/Header";
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
 
// If loading a variable font, you don't need to specify the font weight
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
     <head>
        <link rel="icon" href="../public/assets/favicon.ico" type="image/x-icon" />
        <title>Manav | Portfolio</title>
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
};
