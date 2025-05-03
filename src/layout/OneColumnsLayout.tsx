import Loading from "@/components/Loading/Loading";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Suspense } from "react";
export default function OneColumnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 bg-[url(/assets/images/body-background.png)] bg-center bg-no-repeat bg-cover`}>
        <Suspense fallback={<Loading fullScreen />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}