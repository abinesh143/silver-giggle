import Image from "next/image";
import { initAccordions } from "flowbite";
import { useEffect, useState } from "react";
import { currentTime, toastProvider } from "@/helpers/utils";

const Help = () => {
  const [showAllFaq, setShowAllFaq] = useState(false);
  const faqs = [
    {
      question: "Can I create an app for free?",
      answer:
        "Yes, you may make an app for free with App Maker Pro AI. Its free to Build an App",
    },
    {
      question: "How to publish an app in the Google Play market?",
      answer:
        "You need to register for a Google Play Developer account in order to upload Android apps. You will be required to pay a one-time $25 registration fee. Is  We Recommed it. However we will publish it for free in our developer account for free,  App Maker AI support staff will assist you with the Google Play app publication.",
    },
    {
      question: "What is no-code?",
      answer:
        "The term refers to design and usage that eliminates the need for programming language skills.",
    },
    {
      question: "What types of websites are supported?",
      answer:
        "App Maker pro AI supports all kinds of websites including eccomerce, blog, youtube channel, Facbook Page.",
    },
    {
      question: "How will my application look?",
      answer:
        "Your application will look exactly as your website on mobile devices.",
    },
    {
      question: "What do I need to create my app?",
      answer: "You just need your website URL, App Name and Logo.",
    },
  ];
  const [feedback, setFeedback] = useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const saveFeedback = async (e) => {
    e.preventDefault();
    if (!feedback.fullName) {
      setErrorMsg("Fulname is missing");
    } else if (!feedback.email) {
      setErrorMsg("Email is missing");
    } else if (!feedback.description) {
      setErrorMsg("Description is missing");
    } else {
      setErrorMsg("");
      const loginDetails = localStorage.getItem("appMaker");
      const userData = JSON.parse(loginDetails);
      try {
        setBtnLoading(true);
        let res = await fetch("/api/feedback", {
          method: "POST",
          body: JSON.stringify({
            ...feedback,
            userEmail: userData.userEmail,
          }),
        });

        if (res.status === 200) {
          setFeedback({
            fullName: "",
            email: "",
            subject: "",
            description: "",
          });
          toastProvider("success", "Help Ticket Submitted");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setBtnLoading(false);
      }
    }
  };

  useEffect(() => {
    initAccordions();
  }, []);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">Need Help?</div>
          {currentTime()}
        </div>
        <div className="flex flex-col xl:flex-row gap-6 mt-6">
          <div className="basis-1/2">
            <div>
              <div className="flex w-full">
                <div className="flex items-center justify-center bg-[#ECECEC] rounded-t-[24px] sm:rounded-t-[32px] relative px-4 sm:px-10">
                  <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#ECECEC] w-12 h-12"></div>
                  <div className="text-[#212121] text-xs sm:text-base lg:text-lg font-semibold py-4">
                    Contact Us
                  </div>
                </div>
              </div>
              <form
                onSubmit={(e) => saveFeedback(e)}
                className="bg-[#ECECEC] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10"
              >
                <div className="mb-4 sm:mb-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image
                        src="/svg/profile.svg"
                        width="24"
                        height="24"
                        alt="profile"
                      />
                    </div>
                    <div className="absolute top-1.5 left-0 flex text-xs text-[#949494] items-center pl-12 pointer-events-none">
                      Full Name
                    </div>
                    <input
                      type="text"
                      className="px-4 pt-5 pl-12 sm:pl-12 w-full text-[#585858] border border-[#CECECE] focus:ring-black focus:border-black rounded-lg lg:rounded-xl text-sm sm:text-base"
                      value={feedback.fullName}
                      onChange={(e) =>
                        setFeedback({ ...feedback, fullName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image
                        src="/svg/sms.svg"
                        width="24"
                        height="24"
                        alt="sms"
                      />
                    </div>
                    <div className="absolute top-1.5 left-0 flex text-xs text-[#949494] items-center pl-12 pointer-events-none">
                      Email Address
                    </div>
                    <input
                      type="email"
                      className="px-4 pt-5 pl-12 sm:pl-12 w-full text-[#585858] border border-[#CECECE] focus:ring-black focus:border-black rounded-lg sm:rounded-xl text-sm sm:text-base"
                      value={feedback.email}
                      onChange={(e) =>
                        setFeedback({ ...feedback, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div name="subject" className="mb-4 sm:mb-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image
                        src="/svg/document-text.svg"
                        width="24"
                        height="24"
                        alt="document"
                      />
                    </div>
                    <div className="absolute top-1.5 left-0 flex text-xs text-[#949494] items-center pl-12 pointer-events-none">
                      Subject
                    </div>
                    <input
                      type="text"
                      className="px-4 pt-5 pl-12 sm:pl-12 w-full text-[#585858] border border-[#CECECE] focus:ring-black focus:border-black rounded-lg sm:rounded-xl text-sm sm:text-base"
                      value={feedback.subject}
                      onChange={(e) =>
                        setFeedback({ ...feedback, subject: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-5">
                  <div className="relative">
                    <div className="absolute top-4 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image
                        src="/svg/edit-cover.svg"
                        width="24"
                        height="24"
                        alt="cover"
                      />
                    </div>
                    <div className="absolute top-1.5 left-0 flex text-xs text-[#949494] items-center pl-12 pointer-events-none">
                      Description
                    </div>
                    <textarea
                      rows="3"
                      className="resize-none pt-5 pl-12 pr-6 pb-4 w-full rounded-lg sm:rounded-xl border border-[#DBDBDB] focus:ring-black focus:border-black text-sm sm:text-base"
                      value={feedback.description}
                      onChange={(e) =>
                        setFeedback({
                          ...feedback,
                          description: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                  <small
                    name="description"
                    className="mt-1 text-xs text-red-600"
                  ></small>
                </div>
                {errorMsg ? (
                  <small className="block text-xs text-red-600">
                    {errorMsg}
                  </small>
                ) : null}

                <button
                  type="submit"
                  className="w-full text-xs sm:text-base lg:text-sm xl:text-base disabled:bg-gray-600 disabled:border-gray-600 text-white bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg p-2 sm:p-3 max-sm:mb-4 text-center"
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
                  ) : null}
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col items-center">
            <div className="relative w-full border-2 rounded-3xl px-4 pt-4 sm:px-7 sm:pt-7 bg-white">
              <div
                data-accordion="collapse"
                data-active-classes="bg-white"
                data-inactive-classes="bg-white border-b-2"
              >
                {faqs.map((faq, index) => {
                  return (
                    <div key={`faq-${index}`}>
                      <h2 id={`faq-heading-${index}`}>
                        <button
                          type="button"
                          class={`flex items-center justify-between w-full sm:px-2 py-3 sm:py-5 font-medium text-left ${
                            !showAllFaq && index > 4 ? "hidden" : "border-b-2"
                          }`}
                          data-accordion-target={`#faq-body-${index}`}
                          aria-expanded="false"
                          aria-controls={`faq-body-${index}`}
                        >
                          <span className="text-xs sm:text-lg lg:text-base xl:text-lg">
                            {faq.question}
                          </span>
                          <Image
                            src="/svg/add.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            width="40"
                            height="40"
                            alt="add"
                          />
                        </button>
                      </h2>
                      <div
                        id={`faq-body-${index}`}
                        className="hidden"
                        aria-labelledby={`faq-heading-${index}`}
                      >
                        <p className="pl-2 pr-10 pb-5 border-b-2 text-[#6D6D6D] text-[11px] sm:text-base lg:text-sm xl:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {!showAllFaq ? (
                  <div className="flex justify-between items-center border-b-2 opacity-5 sm:px-2 py-4 sm:py-5 relative">
                    <div className="font-medium text-xs sm:text-lg lg:text-base xl:text-lg">
                      {faqs[5]?.question}
                    </div>
                    <Image
                      src="/svg/add.svg"
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      width="40"
                      height="40"
                      alt="add"
                    />
                  </div>
                ) : (
                  <div v-else className="h-14 sm:h-20"></div>
                )}
                <p
                  className="absolute bottom-5 md:bottom-7 left-0 right-0 opacity-100 font-semibold text-xs sm:text-lg lg:text-base xl:text-lg text-center cursor-pointer"
                  onClick={() => setShowAllFaq(!showAllFaq)}
                >
                  {showAllFaq ? "See Less" : "See More"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
