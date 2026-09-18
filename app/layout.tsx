import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { SITE_URL, TITLE_SUFFIX } from "@/lib/seo";
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

/* Only the origin and the title template live here. Every route sets its own title
   and description (or deliberately none), so nothing is inherited from this layout. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Es Magico",
    template: `%s${TITLE_SUFFIX}`,
  },
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
