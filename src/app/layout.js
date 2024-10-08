import localFont from "next/font/local";
import { customMetaDataGenerator } from "@/lib/customMetaDataGenerator";
import "./globals.css";
import Head from "next/head";

const avenir = localFont({
  src: "./fonts/Avenir Next LT Pro.otf",
  variable: "--font-avenir",
});

export const metadata = customMetaDataGenerator({
  title: "Professional",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/fullImage.png" />
      </Head>
      <body className={`${avenir.variable} antialiased bg-white`}>
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-[375px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
