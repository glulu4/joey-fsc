
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {Literata, Nunito_Sans } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";



const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const fontSerif = Literata({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: [ "400", ],
});

// export const metadata: Metadata = {
//   title: {
//     absolute: config.name.metadata.title.absolute,
//     default: config.name.metadata.title.default,
//     template: config.name.metadata.title.template,
//   },
//   description: config.name.metadata.description,

// };


export const metadata: Metadata = {
  // title: config.name.metadata.title,
  title: {
    absolute: "Facial Surgery Center",
    // template: "%s | Facial Surgery Center",
    default: "Facial Surgery Center | Best Oral and Maxillofacial Surgeons",
  },
  description: "Serving Trumbull Connecticut for over 30 years, The Facial Surgery Center has been providing superior oral maxillofacial care for patients.",
  openGraph: {
    title: config.name.metadata.title,
    description: config.name.metadata.description,
    // url: config.name.metadata.url,
    siteName: "Facial Surgery Center",
    // images: [
    //   {
    //     url: `${config.name.metadata.url}/og-image.png`,
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: config.name.metadata.title,
  //   description: config.name.metadata.description,
  //   images: [`${config.name.metadata.url}/og-image.png`],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="norton-safeweb-site-verification" content="H88Z4SQO0HAGQNPYD3N4B31617QGL4SK07IURF44WDBGYHLP1H1KX7XE3QS2T8-ANUJOLXCMPV2XN248POFXRQWCVHPE2UV8GX-BGISUOB2LWUPBE8JXOJCDHCYPELP2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentistClinic",
              "name": "Facial Surgery Center",
              "alternateName": "Facial Surgery Center - Oral and Maxillofacial Surgeons",
              "description": "Serving Trumbull Connecticut for over 30 years, The Facial Surgery Center has been providing superior oral maxillofacial care for patients.",
              "url": "https://www.facialsurgeryct.com",
              "telephone": "(203) 261-7800",
              "medicalSpecialty": [
                "Oral and Maxillofacial Surgery",
                "Oral Surgery",
                "Facial Surgery",
                "Dental Implants",
                "Wisdom Teeth Removal"
              ],
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "115 Technology Dr B-101",
                "addressLocality": "Trumbull",
                "addressRegion": "CT", 
                "postalCode": "06611",
                "addressCountry": "US"
              },

              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": ["Wednesday", "Friday"],
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "24",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Oral Surgery Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Dental Implants",
                      "description": "Single tooth and full mouth dental implant procedures"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Wisdom Teeth Extraction",
                      "description": "Safe removal of wisdom teeth with sedation options"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure", 
                      "name": "Facial Trauma Surgery",
                      "description": "Emergency and reconstructive facial surgery services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Corrective Jaw Surgery", 
                      "description": "Orthognathic surgery for jaw alignment and function"
                    }
                  }
                ]
              },
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "USD",
              "foundingDate": "1993",
              "slogan": "Superior oral maxillofacial care for over 30 years"
            })
          }}
        />
        <meta name="wot-verification" content="d8ec0942c528dedee856" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          fontSans.variable,
          fontSerif.variable,

        )}
      >
        <Providers
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
