import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
