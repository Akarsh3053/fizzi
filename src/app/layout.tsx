import localFont from 'next/font/local'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css"
import Header from '@/components/Header';

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
