import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Es Magico - The Operator for AI-native Transformation",
    template: "%s",
  },
  description:
    "Es Magico is the Operator for AI-native Transformation. We deploy AI into production inside regulated enterprises and stand behind what it produces to auditors, regulators and boards.",
};

/* Applied before first paint so a stored theme never flashes. Light is the default;
   only an explicit "dark" choice switches, exactly as the original site behaved. */
const themeBoot = `try{if(localStorage.getItem('esm-theme')!=='dark')document.documentElement.setAttribute('data-theme','light')}catch(e){document.documentElement.setAttribute('data-theme','light')}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${schibsted.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
