import Image from "next/image";
import { useState } from "react";

const Download = () => {
  const [step, setStep] = useState(1);
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
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
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
                            <span className="block text-sm font-light">
                              Press Start to Build the app.
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                stroke-width="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                stroke-width="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={
                                  2 * 3.14 * 30 * (66.67 / 100)
                                }
                                stroke-linecap="round"
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
                            className="max-sm:w-44 max-sm:h-44"
                            onClick={() => setStep(2)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : step === 2 ? (
                  <div className="lg:basis-[45%] flex items-center justify-center">
                    <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 max-sm:mx-4 max-sm:mt-5 w-full h-[472px] xl:h-[526px]">
                      <div>
                        <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                          <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                            Building your Application:
                            <span className="block text-sm font-light">
                              Please wait ... Its takes less than 1 Minute
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                stroke-width="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                stroke-width="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={2 * 3.14 * 30 * (33.3 / 100)}
                                stroke-linecap="round"
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
                            <Image
                              src="/gif/setting.gif"
                              width={128}
                              height={128}
                              alt="download-setting"
                              className="absolute -bottom-10 right-0 max-sm:w-24 max-sm:h-24"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <p className="text-center mt-6">
                        Please wait ... Its takes less than 1 Minute
                      </p> */}
                      <div className="w-full flex justify-end">
                        <button
                          className="bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none disabled:bg-gray-600 disabled:border-gray-600 text-sm sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-6 xl:py-3"
                          onClick={() => setStep(3)}
                        >
                          Next
                        </button>
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
                            <span className="block text-sm font-light ms-2">
                              After Testing the app in your Mobile. Click Finish
                            </span>
                          </div>
                          <div className="relative mb-4">
                            <svg className="w-[72px] h-[72px] relative -rotate-90">
                              <circle
                                className="text-[#E0DFE2]"
                                stroke-width="5"
                                stroke="currentColor"
                                fill="transparent"
                                r="30"
                                cx="35"
                                cy="35"
                              />
                              <circle
                                className="text-[#FE5000]"
                                stroke-width="5"
                                stroke-dasharray={2 * 3.14 * 30}
                                stroke-dashoffset={2 * 3.14 * 30 * (1 / 100)}
                                stroke-linecap="round"
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
                          <div className="flex flex-col lg:flex-row justify-center gap-6">
                            <button
                              type="button"
                              className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              Download
                            </button>
                            <div className="relative lg:w-3/4">
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
                            </div>
                          </div>
                        </section>
                      </div>

                      <div className="w-full flex justify-end mt-4">
                        <button
                          className="bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none disabled:bg-gray-600 disabled:border-gray-600 text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-6 xl:py-3"
                          onClick={() => setStep(1)}
                        >
                          FInish
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <div className="basis-1/2 flex justify-center items-center">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                      className="dark:hidden w-[272px] h-[572px]"
                      alt=""
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                      className="hidden dark:block w-[272px] h-[572px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ss
    </main>
  );
};

export default Download;
