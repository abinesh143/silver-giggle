import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import Referal from "@/components/Referal";
import Features from "@/components/Features";
import Working from "@/components/Working";
import KeyFeatures from "@/components/keyFeatures";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "flowbite";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleModal = (type: string) => {
    const modalElement = document.getElementById("auth-modal");
    const modal = new Modal(modalElement, { closable: false });
    type === "show" ? modal.show() : modal.hide();
  };

  const checkUserExists = () => {
    const userData = localStorage.getItem("appMaker");
    const parsedData = userData ? JSON.parse(userData) : null;
    if (parsedData) {
      router.push("/account");
    } else {
      toggleModal("show");
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("appMaker");
    if (userData) {
      userData ? setUser(JSON.parse(userData)) : null;
    }
  }, [router]);
  return (
    <main>
      <div className="container sm:mx-auto py-4">
        <Navbar user={user} />
        <Banner checkUserExists={() => checkUserExists()} />
        <KeyFeatures checkUserExists={() => checkUserExists()} />
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
