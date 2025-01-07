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
