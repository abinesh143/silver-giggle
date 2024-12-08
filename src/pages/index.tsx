"use client";

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
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        <Head>
          <title>
            Convert Any Website to Native Mobile App – Shopify, WooCommerce, Wix
            & More for Android & IOS
          </title>
          <meta
            name="description"
            content="Convert your Shopify, WooCommerce, BigCommerce, Squarespace, Dukaan, Wordpress, or Wix website into a high-performing native Android and iOS app. Launch your mobile app effortlessly to reach more customers on mobile with fast, user-friendly solutions!"
            key="desc"
          />
          <meta property="og:title" content="Web to App Converter" />
          <meta
            property="og:description"
            content="Turn your website to app, quickly with no coding required."
          />
          <meta property="og:site_name" content="Free App Maker Pro" />
          <meta
            name="google-site-verification"
            content="-41E5If5IV2N-CtmI2hI5MAR5HQ9S-i8BEksUDDvG58"
          />
          <meta
            name="impact-site-verification"
            content="ef3a9037-75c4-4f3c-b16f-b0eba76822d3"
          />
        </Head>
        <Navbar user={user} />
        <Banner checkUserExists={() => checkUserExists()} />
        <KeyFeatures checkUserExists={() => checkUserExists()} />
        <Working />
        <Features />
        {/* <Referal /> */}
        <div className="sm:bg-[url('/images/faq-bg.png')] bg-center bg-no-repeat">
          <Review />
          <Faqs />
          <Footer />
        </div>
      </div>
    </main>
  );
}
