import Script from "next/script";

/* Google Analytics 4. The default property is the one the live esmagico.com already
   reports to, so the history stays continuous across the port. Two switches, neither of
   them a code change: NEXT_PUBLIC_GA_ID points the site at a different property, and an
   empty NEXT_PUBLIC_GA_ID switches analytics off. It is also inert outside a production
   deployment, so local and preview traffic is never counted.

   Section 4 of the privacy policy states that the site uses no third-party tracking
   cookies. GA4 sets its own, so that sentence needs amending by whoever owns the policy
   before this goes live; see docs/seo-open-items.md. */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-VG2X6BHZJQ";

export function Analytics() {
  if (process.env.NODE_ENV !== "production" || !GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
