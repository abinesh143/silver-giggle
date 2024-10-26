/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  currentTime,
  getItemLocalStorage,
  toastProvider,
} from "@/helpers/utils";

const Download = (props) => {
  const [step, setStep] = useState(1);
  const [disableButton, setDisableButton] = useState(true);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});

  const getDashboardData = async (userEmail) => {
    try {
      const response = await fetch(`/api/applist?email=${userEmail}`, {
        method: "GET",
      });
      const appDetails = await response.json();
      if (response.status === 200) {
        setData(appDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setProgressDownload = async () => {
    setStep(2);
    const appDetails = getItemLocalStorage();
    const loginDetails = localStorage.getItem("appMaker");
    if (appDetails && loginDetails) {
      const userData = JSON.parse(loginDetails);
      try {
        let res = await fetch("/api/metadata", {
          method: "POST",
          body: JSON.stringify({
            ...appDetails,
            userEmail: userData.userEmail,
          }),
        });

        let data = await res.json();
        if (res.status === 201) {
          setTimeout(() => {
            setDisableButton(false);
            toastProvider("success", "App Successfully Build");
            setStep(3);
          }, 5000);
        } else {
          setMessage("Build Failed Try Again");
        }
      } catch (error) {
        console.log(error);
        setStep(1);
        setMessage("Build Failed Try Again");
      }
    } else {
      toastProvider("error", "Failed! Try Again!");
    }
  };

  useEffect(() => {
    getDashboardData(props.user.userEmail);
  }, []);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold max-sm:hidden">
            Download the Application
          </div>
          <div className="sm:text-xl xl:text-2xl font-semibold sm:hidden">
            Download App
          </div>
          {currentTime()}
        </div>
        <div>
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-[#FFF1E7] rounded-t-[24px] sm:rounded-t-[32px] relative px-4 sm:px-10">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7] w-12 h-12"></div>
              <div className="text-[#212121] text-xs sm:text-base lg:text-lg font-semibold py-4">
                Download
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] sm:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-16">
              <section className="basis-1/2">
                {step === 1 ? (
                  <div className=" flex items-center justify-center">
                    <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 max-sm:mx-4 max-sm:mt-5 w-full h-[472px] xl:h-[526px]">
                      <div>
                        <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                          <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                            Start Building the Application:
                            <span className="block text-xs mt-2 font-semibold text-blue-600">
                              Press Start to Build the app.
                            </span>
                            <span className="text-red-500 text-base">
                              {message ? message : ""}
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                strokeWidth="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={
                                  2 * 3.14 * 30 * (66.67 / 100)
                                }
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                            </svg>
                            <div className="absolute text-xl top-6 left-5">
                              1/3
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center py-4">
                          <Image
                            src="/images/start.png"
                            width={256}
                            height={256}
                            alt="download-start"
                            className="max-sm:w-44 max-sm:h-44  hover:opacity-50 cursor-pointer"
                            onClick={() => setProgressDownload()}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : step === 2 ? (
                  <div className="lg:basis-[45%] flex items-center justify-center">
                    <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 max-sm:mx-4 max-sm:mt-5 w-full h-[472px] xl:h-[560px]">
                      <div>
                        <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                          <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                            Building your Application:
                            <span className="block text-xs mt-2 font-semibold text-blue-500">
                              {disableButton
                                ? "App is Building..."
                                : "Build Finished Press Next"}
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                strokeWidth="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={2 * 3.14 * 30 * (33.3 / 100)}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                            </svg>
                            <div className="absolute text-xl top-6 left-5">
                              2/3
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center py-4">
                          <div className="relative">
                            <Image
                              src="/gif/phone.gif"
                              width={256}
                              height={256}
                              alt="download-build"
                              className="max-sm:w-48 max-sm:h-48"
                            />
                            {disableButton ? (
                              <Image
                                src="/gif/setting.gif"
                                width={128}
                                height={128}
                                alt="download-setting"
                                className="absolute -bottom-10 right-0 max-sm:w-24 max-sm:h-24"
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {!disableButton ? (
                        <p className="text-center text-orange-500 font-semibold my-3">
                          We Successfully Build and Tested Your Application
                        </p>
                      ) : null}
                      <div className="w-full flex justify-end">
                        {!disableButton && (
                          <button
                            className="bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none disabled:bg-gray-600 disabled:border-gray-600 text-sm sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-6 xl:py-3"
                            onClick={() => setStep(3)}
                            disabled={disableButton}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="lg:basis-[45%] flex items-center justify-center">
                    <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 max-sm:mx-4 max-sm:mt-5 w-full h-[472px] xl:h-[526px]">
                      <div>
                        <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                          <div className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                            Download the Application:
                            <span className="block text-sm font-semibold ms-2 mt-2 text-blue-500">
                              Your application is ready.
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                strokeWidth="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={2 * 3.14 * 30 * (1 / 100)}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                            </svg>
                            <div className="absolute text-xl top-6 left-5">
                              3/3
                            </div>
                          </div>
                        </div>
                        <div className="flex  justify-center items-center sm:mt-4 ">
                          <div className="rounded-full p-2 sm:p-4 bg-green-500">
                            <div className="rounded-full p-3 bg-white">
                              <Image
                                src="/gif/download.gif"
                                width={140}
                                height={140}
                                alt="download-gif"
                                className="rounded-full max-sm:w-20 max-sm:h-20"
                              />
                            </div>
                          </div>
                        </div>
                        <section className="mt-8">
                          <div className="flex flex-col lg:flex-row justify-center gap-6 ">
                            {data && data.downloadLink ? (
                              <a
                                href={`https://www.googleapis.com/drive/v3/files/${data.downloadLink}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                                className="text-white uppercase bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                              >
                                Download
                              </a>
                            ) : null}
                            {/* <div className="relative lg:w-3/4">
                              <input
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Download Link Here"
                                readOnly
                              />
                              <button className="absolute top-0 end-0 px-5 py-2.5 text-sm font-medium h-full text-white bg-green-500 rounded-e-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Copy Link
                              </button>
                            </div> */}
                          </div>
                        </section>
                      </div>

                      <div className="w-full flex justify-center mt-4">
                        <button
                          className="text-white inline-flex items-center uppercase bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          onClick={() => props.setTab()}
                        >
                          <svg
                            class="w-6 h-6 text-white me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                          </svg>{" "}
                          Publish in PlayStore and AppStore
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 ? (
                  <div className="text-sm mt-4 pl-8 text-red-500 font-semibold">
                    Note :{" "}
                    <span className="text-blue-500">
                      App Icon & App Name with reflect in Publish Build Only
                    </span>
                  </div>
                ) : null}
              </section>

              <div className="basis-1/2 flex justify-center items-center">
                {/* {data && data["secretCode"] ? (
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[690px] w-[390px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[362px] h-[662px] bg-white dark:bg-gray-800">
                      <embed
                        src={`https://app.freeappmaker.pro/?id=${data["secretCode"]}`}
                        style={{width: '362px', height: '662px'}}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                        className="dark:hidden w-[272px] h-[572px]"
                        alt="reback1"
                      />
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                        className="hidden dark:block w-[272px] h-[572px]"
                        alt="reback2"
                      />
                    </div>
                  </div>
                )} */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                      className="dark:hidden w-[272px] h-[572px]"
                      alt="reback1"
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                      className="hidden dark:block w-[272px] h-[572px]"
                      alt="reback2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Download;
