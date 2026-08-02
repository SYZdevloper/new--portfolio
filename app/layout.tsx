import type { Metadata, Viewport } from "next";
import "./globals.css";
import TawkToChat from "@/components/TawkToChat";

const siteUrl = "https://hyperlinktechsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Web Design & Development Agency | Hyperlink Tech Solutions",
  description:
    "Hyperlink Tech Solutions designs and develops custom business websites, landing pages, SaaS interfaces, dashboards and web applications for growing companies.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: "Hyperlink Tech Solutions",
    title: "Web Design & Development Agency | Hyperlink Tech Solutions",
    description:
      "Custom websites, SaaS interfaces, dashboards and web applications for growing businesses.",
    url: "/",
    images: [
      {
        url: "/images/hyperlink-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hyperlink Tech Solutions web design and development agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Agency | Hyperlink Tech Solutions",
    description:
      "Custom websites, SaaS interfaces, dashboards and web applications for growing businesses.",
    images: ["/images/hyperlink-social-cover.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6fb",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hyperlink Tech Solutions",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
      email: "hello@hyperlinktechsolutions.com",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Hyperlink Tech Solutions",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <TawkToChat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
