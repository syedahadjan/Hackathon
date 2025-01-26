import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "MICRO FINANCE APP",
  description: "SAYLANI MICRO FINANCE APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/" type="image/x-icon" />
<link rel="apple-touch-icon" href="/" />
<link rel="icon" type="image/png" sizes="32x32" href="/" />
<link rel="icon" type="image/png" sizes="16x16" href="/" />
      </head>
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}

