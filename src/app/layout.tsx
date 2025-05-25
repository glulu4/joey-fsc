
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Manrope, Flamenco, Kalnia, Playfair_Display, Noto_Serif, Inria_Serif, Nunito, Alegreya, Lora } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Providers from "@/components/theme-provider";



const fontSans = Nunito({ subsets: ["latin"], variable: "--font-sans" });

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700",],
});

export const metadata: Metadata = {
  title: {
    absolute: config.name.metadata.title.absolute,
    default: config.name.metadata.title.default,
    template: config.name.metadata.title.template,
  },
  description: config.name.metadata.description,

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
