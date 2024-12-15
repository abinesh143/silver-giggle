"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toastProvider } from "@/helpers/utils";
import PageLoader from "../../components/PageLoader";
import Image from "next/image";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const router = useRouter()

  const updatePlan = async (transaction) => {
    const userData = localStorage.getItem("appMaker");
    const parsedData = userData ? JSON.parse(userData) : null;

    const data = {
      isPremium: true,
      userEmail: parsedData.userEmail,
      amount: transaction["order_amount"],
    };
    try {
      let res = await fetch("/api/userData", {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        localStorage.setItem(
          "appMaker",
          JSON.stringify({
            ...parsedData,
            isPremium: true,
            amount: props.amount,
          })
        );
        toastProvider("success", "Premium Plan Activated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getPaymentStatus = async (id) => {
    try {
      const response = await fetch(`/api/payment?order_id=${id}`, {
        method: "GET",
      });
      const orderDetails = await response.json();
      if (orderDetails["order_status"] === "PAID") {
        setStatus("success");
        updatePlan(orderDetails);
      } else {
        setStatus("failed");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderId) {
      getPaymentStatus(orderId);
    }
  }, [orderId]);

  return (
    <main>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <PageLoader />
        </div>
      ) : status === 'success' ? <div
        className={`flex flex-col items-center !h-screen overflow-y-auto py-20 `}
      >
        <Image
          src="/svg/green-tick.svg"
          alt="payment-success"
          width={120}
          height={120}
          quality={100}
        />
        <div className="text-2xl sm:text-4xl lg:text-5xl capitalize text-center font-bold mb-2 ks:text-[3vh] ks:mb-[2vh]">
          Payment Success
        </div>
        <button
          className="bg-[#F0602C] capitalize text-sm sm:text-base lg:text-lg font-medium rounded-3xl text-white w-4/5 sm:w-1/2 lg:w-1/3 mt-8 py-2 sm:py-3 lg:py-4 ks:text-[2vh] ks:mt-[3vh] ks:py-[1.5vh] ks:rounded-[5vh] ks:px-[4vh] ks:w-3/5"
          onClick={() => router.push('/account')}
        >
          Back to Home</button>
      </div> : <div className="flex flex-col items-center justify-center h-screen mx-5">
        <Image
          src="/svg/close-icon.svg"
          alt="payment-success"
          width={80}
          height={80}
          quality={100}
          className=" mb-6"
        />
        <div className="text-2xl capitalize sm:text-4xl lg:text-5xl text-center font-bold mb-2 ks:text-[3vh] ks:mb-[2vh]">
          Payment Failed
        </div>
        <button
          className="bg-[#F0602C] capitalize text-sm sm:text-base lg:text-lg font-medium rounded-3xl text-white w-4/5 sm:w-1/2 lg:w-1/3 mt-8 py-2 sm:py-3 lg:py-4 ks:text-[2vh] ks:mt-[3vh] ks:py-[1.5vh] ks:rounded-[5vh] ks:px-[4vh] ks:w-3/5"
          onClick={() => router.push('/account')}
        >
          Back to Home
        </button>
      </div>}
    </main>
  );
};

export default PaymentSuccess;
