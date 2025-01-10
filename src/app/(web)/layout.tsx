import type { Metadata } from "next";

import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/Components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";


// Corrected Poppins configuration


export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body >
        <NextAuthProvider>
        <ThemeProvider>
          <Toaster />
        <main className="font-normal">
          <Header/>
          
          {children} 
          <Footer/>
        </main> 
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
