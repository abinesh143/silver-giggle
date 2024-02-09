import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import Referal from "@/components/Referal";
import Features from "@/components/Features";
import Working from "@/components/Working";
import KeyFeatures from "@/components/keyFeatures";

export default function Home() {
  return (
    <main>
      <div className="container sm:mx-auto py-4">
        <Navbar />
        <Banner />
        <KeyFeatures />
        <Working />
        <Features />
        <Referal />
        <div className="sm:bg-[url('/images/faq-bg.png')] bg-center bg-no-repeat">
          <Review />
          <Faqs />
          <Footer />
        </div>
      </div>
    </main>
  );
}
