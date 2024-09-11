import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: "./fonts/Avenir Next LT Pro.otf",
  variable: "--font-avenir",
});

export const metadata = {
  title: "Professional",
  description: "Hey Checkout Rachit's Card on elRed",
  openGraph: {
    title: "Professional",
    description: "Hey Checkout Rachit's Card on elRed",
    images: [
      {
        url: "/fullImage.png",
        width: 800,
        height: 600,
        alt: "Professional Card Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional",
    description: "Hey Checkout Rachit's Card on elRed",
    images: ["/fullImage.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased bg-white`}>
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-[375px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
