import OneColumnsLayout from "@/layout/OneColumnsLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tymex",
  description: "Learn about Tymex Marketplace - Your trusted platform for digital asset trading. Discover our mission, values, and commitment to secure trading.",
  openGraph: {
    title: "About Tymex | Digital Asset Trading Platform",
    description: "Learn about Tymex Marketplace - Your trusted platform for digital asset trading. Discover our mission, values, and commitment to secure trading.",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <div>
      <OneColumnsLayout>
        <div>
          <h1>About2</h1>
        </div>
      </OneColumnsLayout>
    </div>
  );
}
