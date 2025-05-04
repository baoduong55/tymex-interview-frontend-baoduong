import OneColumnsLayout from "@/layout/OneColumnsLayout";
import { Metadata } from "next";
import ProductContainer from "@/features/product/component/ProductContainer/ProductContainer";

export const metadata: Metadata = {
  title: "Digital Asset Marketplace",
  description: "Browse and trade digital assets on Tymex Marketplace. Find the best deals on cryptocurrencies, NFTs, and other digital assets.",
  openGraph: {
    title: "Digital Asset Marketplace | Tymex",
    description: "Browse and trade digital assets on Tymex Marketplace. Find the best deals on cryptocurrencies, NFTs, and other digital assets.",
  },
  alternates: {
    canonical: '/marketplace',
  },
};

export default function Page() {
  return <OneColumnsLayout>
    <ProductContainer />
  </OneColumnsLayout>
}
