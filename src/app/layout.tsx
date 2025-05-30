
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {Inter, Manrope, Flamenco, Kalnia, Noto_Serif_Balinese, Playfair_Display, Noto_Serif, Inria_Serif, Nunito, Alegreya, Lora, Bitter, Libre_Caslon_Display, Noto_Sans_Georgian, PT_Serif, Solway, Prata, Literata, Nunito_Sans } from "next/font/google";
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
  title: config.name.metadata.title,
  description: config.name.metadata.description,
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
