import { initAccordions } from "flowbite";
import Image from "next/image";
import { useEffect, useState } from "react";

const Faqs = () => {
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
        "You need to register for a Google Play Developer account in order to upload Android apps. You will be required to pay a one-time $25 registration fee. Is  We Recommed it. However we will publish it  in our developer account for some additional cost.,  App Maker AI support staff will assist you with the Google Play app publication.",
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
      answer: "Your application will look exactly as your website on mobile devices.",
    },
    {
      question: "What do I need to create my app?",
      answer: "You just need your website URL, App Name and Logo.",
    }
  ];
  useEffect(() => {
    initAccordions();
  }, []);

  return (
    <main id="faqs">
      <section className="mt-10 sm:mt-24 mb-8 sm:mb-16">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-10 sm:mb-16">
          FAQ&apos;s
        </h2>
        <div className="flex justify-center bg-white rounded-[24px] sm:rounded-[40px] p-4 sm:p-8 xl:p-10 min-h-[384px] lg:h-[480px] xl:h-[620px]">
          <div className="flex justify-center h-fit w-full lg:w-4/5">
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
                          className={`flex items-center justify-between w-full sm:px-2 py-3 sm:py-5 font-medium text-left ${
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
      </section>
    </main>
  );
};

export default Faqs;
