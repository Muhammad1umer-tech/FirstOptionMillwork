import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "First Option Millwork",
  description: "Custom millwork solutions",
  icons: {
    icon: "/favicon.ico",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-[#0f0a08] text-white overflow-x-hidden">
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}