'use client'
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function OneColumnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <div className="flex items-center justify-center h-screen">Loading...</div>}
      <Header />
      <main className={`flex-1 bg-[url(/assets/images/body-background.png)] bg-center bg-no-repeat bg-cover`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}