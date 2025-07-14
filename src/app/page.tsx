import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
}
