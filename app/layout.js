'use client'
import Header from '@/components/layout/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from "next/font/google";
import { Footer } from '@/components/layout/footer'
import Sidebar from '@/components/layout/sidebar'
import React, { Children, useState, createContext, useContext } from "react";
export const SidebarContext = createContext({showChat: false});

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {

   const [isOpen, setIsOpen] = useState(false);
   const [showChat, setShowChat] = useState(false);
  return (
    <html lang="en">
      <body
        className={
          isOpen
            ? `sidebar-main-open ${montserrat.className}`
            : `sidebar-main-close ${montserrat.className}`
        }
      >
        <Header
          open={isOpen}
          showChat={showChat}
          setShowChat={(value) => setShowChat(value)}
        />
        <SidebarContext.Provider value={{ showChat }}>
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
          <div className="layout_container">{children}</div>
        </SidebarContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
