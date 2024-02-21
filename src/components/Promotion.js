import { currentTime, toastProvider } from "@/helpers/utils";
import Image from "next/image";
import { useState } from "react";

const Promotion = () => {
  const [mail, setMail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const savePromotion = async (e) => {
    e.preventDefault();
    if (!mail) {
      setErrorMsg("Email is missing");
    } else {
      setErrorMsg("");
      const loginDetails = localStorage.getItem("appMaker");
      const userData = JSON.parse(loginDetails);
      try {
        setBtnLoading(true);
        let res = await fetch("/api/promotion", {
          method: "POST",
          body: JSON.stringify({
            email: mail,
            userEmail: userData.userEmail,
          }),
        });
        // let data = await res.json();
        if (res.status === 200) {
          setMail("");
          toastProvider("success", "Referal is Success");
        }
      } catch (error) {
        toastProvider("error", "Something went wrong");
        setErrorMsg("Oops !! Something went wrong");
        console.log(error);
      } finally {
        setBtnLoading(false);
      }
    }
  };
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            Refer a Friend
          </div>
          {currentTime()}
        </div>
        <div className="flex flex-col justify-center items-center h-[calc(100vh-158px)] sm:h-[calc(100vh-224px)] bg-[#FFEDE5] rounded-[24px] sm:rounded-[40px]">
          <Image
            src="/svg/gift-orange.svg"
            width={160}
            height={160}
            alt="gift"
            className="w-28 sm:w-40 mb-4 sm:mb-8"
          />
          <h2 className="text-xl sm:text-4xl lg:text-3xl xl:text-4xl text-center font-semibold mb-2 sm:mb-3">
            Reward 30% or Receive 10 Dollar
          </h2>
          <div className="text-xs sm:text-base lg:text-lg text-center sm:mb-6 px-5 sm:px-20 md:px-28 xl:px-24">
            Get 10$ and 10 Free 5 Star Reviews with each successful referral.
          </div>
          <form
            onSubmit={(e) => savePromotion(e)}
            className="flex rounded-md pt-4 pb-2 sm:py-4 w-4/5 md:w-3/5 xl:w-2/5"
          >
            <input
              type="email"
              className="py-2 sm:py-4 pl-4 sm:pl-6 w-full rounded-l-lg sm:rounded-l-xl text-xs sm:text-base lg:text-sm xl:text-base border-r-0 border-black focus:border-r-2"
              placeholder="Email Address"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="py-2 sm:py-4 px-4 sm:px-10 inline-flex justify-center items-center rounded-r-lg sm:rounded-r-xl font-semibold bg-white text-black text-xs sm:text-base lg:text-sm xl:text-base focus:outline-none hover:bg-gray-300 border-y border-r border-black"
              disabled={btnLoading}
            >
              {btnLoading ? (
                <Image
                  src="/svg/spin.svg"
                  width={24}
                  height={24}
                  alt="spin"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                />
              ) : null}{" "}
              Submit
            </button>
          </form>
          {errorMsg ? (
            <small class="block text-xs text-red-600">{errorMsg}</small>
          ) : null}
          <div className="text-[#3B3A43] text-[8px] sm:text-xs lg:text-[10px] xl:text-xs">
            Enter your friend&apos;s email address (automatic email will be
            sent)
          </div>
        </div>
      </div>
    </main>
  );
};

export default Promotion;
