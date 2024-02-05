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

        {/* <div>11 AM TO 9 PM OFFICE</div>
        <div>9 PM TO 10 PM LUNCH</div>
        <div>10 PM TO 12 PM LEARNING + Questions</div>
        <div>12 AM TO 7 AM SLEEPING</div>
        <div>7 AM TO 7.30 PM TYPING</div>
        <div>7.30 AM TO 8 AM ENGLISH</div>
        <div>8 AM TO 10 PM PROBLEM</div>
        <div>10 AM TO 11 PM GET READY</div>
        <div>SATURDAY - LEARNING + PROJECT</div>
        <div>SUNDAY - APP WORK</div> */}
      </div>
    </main>
  );
}
