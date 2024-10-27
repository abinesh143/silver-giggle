import Navbar from "@/components/Navbar";
import { toastProvider } from "@/helpers/utils";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
    const [feedback, setFeedback] = useState({
        fullName: "",
        email: "",
        subject: "",
        description: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
      const [btnLoading, setBtnLoading] = useState(false);
    
      const saveFeedback = async (e: any) => {
        e.preventDefault();
        if (!feedback.fullName) {
          setErrorMsg("Fulname is missing");
        } else if (!feedback.email) {
          setErrorMsg("Email is missing");
        } else if (!feedback.description) {
          setErrorMsg("Description is missing");
        } else {
          setErrorMsg("");
          try {
            setBtnLoading(true);
            let res = await fetch("/api/feedback", {
              method: "POST",
              body: JSON.stringify({
                ...feedback,
                userEmail: feedback.email
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
  return (
    <main className="container mx-auto">
      <Navbar />
      <section className="mt-10 md:mt-20 sm:pb-8">
        <div className="px-4 sm:px-10 lg:px-16 mb-10 md:mb-20">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-2 md:mb-6">
            Contact Us
          </h1>
          <div className="lg:text-lg 2xl:text-xl text-center font-medium px-0 sm:px-5 md:px-10 lg:px-20 xl:px-48">
            Please fill the htmlForm below, we will get back to you asap.
          </div>
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
                <div className="mb-4 sm:mb-5">
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
                      rows={3}
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
      </section>
    </main>
  );
};

export default ContactUs;
