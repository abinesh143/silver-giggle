"use client";

import { Drawer } from "flowbite";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import CommonDrawer from "../../components/Feedback//CommonDrawer";
import RatingStyle from "../../components/Feedback/RatingStyle";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toastProvider } from "@/helpers/utils";

const logoLinks = [
  {
    src: "/svg/insta-black.svg",
    link: "https://www.instagram.com/animated_stickers_for_watsapp",
  },
  {
    src: "/svg/fb-black.svg",
    link: "https://www.facebook.com/p/Moving-Stickers-100064870698255/",
  },
  {
    src: "/svg/youtube-black.svg",
    link: "https://www.youtube.com/@animatedstickers3744",
  },
];

const CustomerFeedbackClient = (props: any) => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(5);
  const [stickerSuggest, setStickerSuggest] = useState("");
  const [feedback, setFeedback] = useState("");
  const [btnLoading, setBtnLoading] = useState(false)
  const searchparam = useSearchParams()
  const playId = searchparam.get("id")

  const postAnswer = async () => {
    try {
      setBtnLoading(true);
      let res = await fetch("/api/sticker-feedback", {
        method: "POST",
        body: JSON.stringify( {
          score : score,
          feedback: feedback,
          stickerSuggest: stickerSuggest
        }),
      });
      if (res.status === 200) {
        toastProvider("success", "Feedback Submitted Succesfully");
        // push to another site
      }
    } catch (error) {
      toastProvider("error", "Please try Again");
    } finally {
      setBtnLoading(false);
    }
      
  }

  const toggleDropdown = (id: string, type: string) => {
    const targetEl = document.getElementById(id);
    const options = {
      placement: "bottom",
      backdrop: true,
    };
    const drawer = new Drawer(targetEl, options);
    type === "show" ? drawer.show() : drawer.hide();
  };

  const loadDynamicDropdown = useCallback((currentStep: number) => {
    let dropdownId;
    switch (currentStep) {
      case 1:
        dropdownId = "rating-style-dropdown";
        break;
      case 2:
        dropdownId = "category-dropdown";
        break;
      case 3:
        dropdownId = "heartAbout-dropdown";
        break;
      case 4:
        dropdownId = "onlineReview-dropdown";
        break;
      default:
        dropdownId = "onlineReview-dropdown";
    }

    toggleDropdown(dropdownId, "show");
  }, []);

  useEffect(() => {
    if (step) {
      loadDynamicDropdown(step);
    }
  }, [loadDynamicDropdown, step]);


  return (
    <main
      style={{
        backgroundColor: "orange",
      }}
      className="h-screen"
    >
      <nav className="flex justify-center items-center h-24">
        <div style={{ color: "black" }} className="text-2xl font-semibold">
          Customer Feedback
        </div>
      </nav>
      <section className="h-[calc(100vh-96px)] rounded-2xl bg-white flex flex-col items-center p-8">
        <div className="flex flex-col justify-center items-center h-fit gap-4 mb-20">
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="w-20 h-20 rounded-lg"
          />

          <h4 className="text-xl font-semibold text-black">Hello Friend,</h4>
          <p className="text-center">
            Please suggest us your favourite sticker to add to this app.
          </p>
          <p>Please Give us your valuable feedback</p>
        </div>
        <div className=" flex items-center gap-4">
          {logoLinks.map((l, index) => (
            <Link key={`logo-${index}`} href={l.link} target="_blank">
              <Image
                src={l.src}
                width={24}
                height={24}
                alt={`logo=${index}`}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>

        {/* Steps */}
        {step === 1 ? (
          <div>
            <CommonDrawer drawerId={"rating-style-dropdown"}>
              <div className="flex flex-col items-center">
                <h4 className="sm:text-lg font-semibold">
                  How well do you rate us ?
                </h4>
                <div className="flex gap-8 sm:gap-10 my-6">
                  <RatingStyle
                    type="zoom"
                    style={"emoji"}
                    pixel={32}
                    isEvent={true}
                    setRating={(value: number) => {
                      setScore(value);
                      toggleDropdown("rating-style-dropdown", "hide");
                      setStep(step + 1);
                    }}
                  />
                </div>
                <small className="font-semibold">Thank you</small>
              </div>
            </CommonDrawer>
          </div>
        ) : step === 2 ? (
          <CommonDrawer drawerId={"category-dropdown"}>
            <div className="flex flex-col items-center">
              <div className="flex gap-8 sm:gap-10 my-6">
                <RatingStyle
                  type="zoom"
                  style={"emoji"}
                  pixel={32}
                  isEvent={true}
                  score={score}
                  setRating={(value: number) => {
                    setScore(value);
                  }}
                />
              </div>
              <h4 className="sm:text-lg font-semibold">
                {score > 3
                  ? "Thank You so much!"
                  : score === 3
                  ? "Thank you!"
                  : "We apologize our mistake !"}
              </h4>
              <div className="flex flex-col items-center gap-2 my-4 w-full"></div>
              <h4 className="sm:text-lg font-semibold mb-2">
                Describe your experience, which helps us to improve our
                application?
              </h4>
              <textarea
                rows={4}
                value={feedback}
                className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-96 mb-4"
                placeholder="Add your Feedback"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                }}
                className="w-full sm:w-96 rounded-lg cursor-pointer py-2 sm:py-3"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next
              </button>
            </div>
          </CommonDrawer>
        ) : step === 3 ? (
          <CommonDrawer drawerId={"heartAbout-dropdown"}>
            <div className="flex flex-col items-center">
              <h4 className="sm:text-lg font-semibold">
                Please Give us Sticker Sugggestion? 
              </h4>
              <div className="flex flex-col items-center gap-2 my-4 w-full">
                <textarea
                  rows={4}
                  value={stickerSuggest}
                  className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-96 mb-4"
                  placeholder="Add your Favourite Stickers"
                  onChange={(e) => setStickerSuggest(e.target.value)}
                ></textarea>
                <button
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                  }}
                  className="w-full sm:w-96 rounded-lg cursor-pointer py-2 sm:py-3"
                  onClick={() => {
                    setStep(step + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </CommonDrawer>
        ) : step === 4 ? (
          <CommonDrawer drawerId={"onlineReview-dropdown"}>
            <div className="flex flex-col items-center">
              <Image
                src={"/svg/success.svg"}
                width={56}
                height={56}
                alt="success"
                className="mb-2"
              />
              <h4 className="sm:text-lg font-semibold mb-4">
                {score < 3
                  ? "Thanks for your feedback,"
                  : "Thanks for your wonderful feedback,"}
                <span className="block text-center">
                  {score < 3
                    ? "We took feedback very seriously."
                    : "We are glad that you like it."}
                </span>
              </h4>
              {playId && score >3 && (
                <div className="w-full sm:w-96 py-6 sm:py-8 px-4 rounded-2xl bg-[#eee5ff] relative mb-6">
                  <p className="text-center mb-4">
                    Do us a favour and{" "}
                    <span className="font-semibold">
                      share your rating on Google
                    </span>{" "}
                    too? It takes 2 sec.
                  </p>
                  <Link href={`https://play.google.com/store/apps/details?id=${playId}`} target="_blank" className="bg-[#6B2AC1] w-full rounded-lg text-white inline-flex items-center justify-center mb-1 p-2 relative z-10">
                    Leave Online Review
                    <Image
                      src={"/svg/arrow-left-white.svg"}
                      width={24}
                      height={24}
                      alt="arrow-left"
                      className="ms-2 rotate-180"
                    />
                  </Link>
                  <Image
                    src={"/svg/online-star-1.svg"}
                    width={48}
                    height={48}
                    alt="star"
                    className="absolute top-0 left-0 rounded-tl-lg"
                  />
                  <Image
                    src={"/svg/online-star-2.svg"}
                    width={36}
                    height={36}
                    alt="star"
                    className="absolute bottom-0 right-0 "
                  />
                </div>
              )}
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                }}
                disabled={btnLoading}
                className="w-full sm:w-96 rounded-lg cursor-pointer py-2 sm:py-3 disabled:opacity-80"
                onClick={() => postAnswer()}
              >
                Submit Answer
              </button>
            </div>
          </CommonDrawer>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};

export default CustomerFeedbackClient;
