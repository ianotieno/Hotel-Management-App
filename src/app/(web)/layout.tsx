import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ThemeProvider from "@/Components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/Components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";


// Corrected Poppins configuration
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Fixed property name
  style: ["normal", "italic"], // Fixed property name
  variable: "--font-poppins",
  subsets: ["latin"], // Valid subset
});

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
      <body className={poppins.className}>
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
