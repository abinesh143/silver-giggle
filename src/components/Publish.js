import Swal from "sweetalert2";
import Image from "next/image";
import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";
import { toastProvider } from "@/helpers/utils";

const Publish = (props) => {
  const [tab, setTab] = useState("andriod");
  const [publishData, setPublishData] = useState({
    andriodReq: false,
    andriodStatus: "start",
    iosReq: false,
    iosStatus: "start",
    andriodApk: "",
    andriodAab: "",
    iosApk: "",
    iosAbb: "",
    userEmail: props.user.userEmail,
  });
  const [isLoading, setIsLoading] = useState(true);

  const getPublishData = async (userEmail) => {
    try {
      const response = await fetch(`/api/publishapp?email=${userEmail}`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.status === 200) {
        setPublishData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const postPublishData = async (platform) => {
    try {
      setIsLoading(true);
      let res = await fetch("/api/publishapp", {
        method: "POST",
        body: JSON.stringify({
          ...publishData,
          ...(platform === "andriod"
            ? { andriodReq: true, andriodStatus: "build" }
            : { iosReq: true, iosStatus: "build" }),
        }),
      });

      if (res.status === 200) {
        setPublishData({
          ...publishData,
          ...(platform === "andriod"
            ? { andriodReq: true, andriodStatus: "build" }
            : { iosReq: true, iosStatus: "build" }),
        });
        toastProvider("success", `${platform} build requested`);
      }
    } catch (error) {
      console.log(error);
      toastProvider("error", `Failed! Try Again`);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmationModal = (platform) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Start Building a Store ${platform} Build`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Start Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        postPublishData(platform);
      }
    });
  };

  const resetModal = (platform) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Start a new ${platform} Build`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Build Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPublishData({
          ...publishData,
          ...(platform === "andriod"
            ? { andriodReq: false, andriodStatus: "start" }
            : { iosReq: false, iosStatus: "start" }),
        });
      }
    });
  };

  useEffect(() => {
    getPublishData(props.user.userEmail);
  }, []);

  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            Publish App
          </div>
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        {tab === "andriod" ? (
          <section>
            <div className="flex">
              <div className="basis-1/2 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setTab("andriod")}
                >
                  Andriod
                </h3>
                <div
                  className={`absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_#FCE594]`}
                ></div>
              </div>
              <div className="basis-1/2 relative rounded-t-[24px] md:rounded-t-[32px] xl:rounded-t-[40px] bg-[#FCE594]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setTab("ios")}
                >
                  IOS
                </h3>
              </div>
            </div>
            <div className="bg-[#FCE594] rounded-tl-[24px]  sm:rounded-tl-[32px] rounded-b-[24px]  sm:rounded-b-[32px]  p-4 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
                <section className="basis-[60%] relative">
                  {props.user &&
                  props.user["isPremium"] &&
                  (props.user["amount"] === 99 ||
                    props.user["amount"] === 25) ? null : (
                    <>
                      <div className="bg-[#F9F9F9] absolute left-0 top-0 opacity-80 z-30 w-full h-full rounded-3xl"></div>
                      <div className="absolute lg:w-[calc(100vw-360px)] max-lg:top-0 h-[calc(100vh-240px)] overflow-hidden top-28 left-20 xl:left-12 2xl:left-20 z-40 text-black">
                        <div className="max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:rounded-t-[24px] flex flex-col items-center sm:rounded-[32px] bg-white w-full lg:w-[50%] xl:w-[40%] p-8">
                          <Image
                            src="/images/premium.png"
                            alt="pause-plan"
                            width={80}
                            height={80}
                            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4"
                          />
                          <h2 className="sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-2">
                            Unlock the Feature
                          </h2>
                          <p className="text-xs sm:text-base text-center font-normal mb-4">
                            Please note! you can pulish to PlayStore only If
                            Premium Plan is Purchased. AAB File is Build in this
                            section.
                          </p>
                          <button
                            className="bg-black text-sm sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-8 xl:py-3"
                            onClick={() => props.setTab("pro")}
                          >
                            Upgrade to Premium
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {isLoading ? (
                    <>
                      <div className="bg-[#F9F9F9] absolute left-0 top-0 opacity-80 z-30 w-full h-full rounded-3xl"></div>
                      <div className="absolute lg:w-[calc(100vw-360px)] max-lg:top-0 h-[calc(100vh-240px)] overflow-hidden top-28 left-20 xl:left-12 2xl:left-20 z-40 text-black">
                        <div className="max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:rounded-t-[24px] h-64 flex flex-col items-center justify-center sm:rounded-[32px]  w-full lg:w-[50%] xl:w-[40%] p-8">
                          <PageLoader />
                        </div>
                      </div>
                    </>
                  ) : null}
                  {publishData["andriodStatus"] === "start" ? (
                    <div className=" flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10  w-full h-[540px] sm:h-[640px] lg:h-[560px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Building the Application for PlayStore:
                              <span className="block text-sm font-light mt-2">
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
                              onClick={() => confirmationModal("andriod")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : publishData["andriodStatus"] === "build" ? (
                    <div className=" flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 w-full h-[540px] sm:h-[640px] lg:h-[560px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Building your Application:
                              <span className="block text-sm font-light mt-2">
                                Please wait ... Its takes less than 24 Hours
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
                                    2 * 3.14 * 30 * (33.3 / 100)
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
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 w-full h-[540px] sm:h-[640px] lg:h-[560px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Download the Application:
                              <span className="block text-xs sm:text-sm font-light ms-2 mt-2">
                                Use APK File for Testing.
                              </span>
                              <span className="block text-xs sm:text-sm font-light ms-2 mt-1">
                                Submit AAB File in PlayStore.
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
                            <div className="flex flex-col lg:flex-row justify-center gap-5">
                              {publishData.andriodApk ? (
                                <a
                                  href={`https://www.googleapis.com/drive/v3/files/${publishData.andriodApk}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                                  className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Download Apk
                                </a>
                              ) : null}
                              {publishData.andriodAab ? (
                                <a
                                  href={`https://www.googleapis.com/drive/v3/files/${publishData.andriodAab}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Download AAB
                                </a>
                              ) : null}

                              <button
                                type="button"
                                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                              >
                                Tutorial
                              </button>
                            </div>
                          </section>
                        </div>

                        <div className="w-full flex justify-end mt-4">
                          <button
                            className="bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none disabled:bg-gray-600 disabled:border-gray-600 text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-6 xl:py-3"
                            onClick={() => resetModal("andriod")}
                          >
                            Rebuild Andriod
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                <div className="basis-[40%] flex justify-center items-center">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex justify-center items-center bg-white dark:bg-gray-800">
                      <Image
                        src="/svg/play.svg"
                        width={156}
                        height={156}
                        alt="playstore"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="flex">
              <div className="basis-1/2 relative bg-[#E0F2FF] rounded-t-[24px] sm:rounded-t-[32px] xl:rounded-t-[40px]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#4983AB] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setTab("andriod")}
                >
                  Andriod
                </h3>
              </div>
              <div className="basis-1/2 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setTab("ios")}
                >
                  IOS
                </h3>
                <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#E0F2FF]"></div>
              </div>
            </div>
            <div className="bg-[#E0F2FF] rounded-b-[24px]  sm:rounded-b-[32px]  p-4 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
                <section className="basis-1/2 relative">
                  {props.user &&
                  props.user["isPremium"] &&
                  (props.user["amount"] === 99 ||
                    props.user["amount"] === 79) ? null : (
                    <>
                      <div className="bg-[#F9F9F9] absolute left-0 top-0 opacity-80 z-30 w-full h-full rounded-3xl"></div>
                      <div className="absolute lg:w-[calc(100vw-360px)] max-lg:top-0 h-[calc(100vh-240px)] overflow-hidden top-28 lg:left-8 xl:left-4 2xl:left-10 z-40 text-black">
                        <div className="max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:rounded-t-[24px] flex flex-col items-center sm:rounded-[32px] bg-white w-full lg:w-[50%] xl:w-[40%] p-8">
                          <Image
                            src="/images/premium.png"
                            alt="pause-plan"
                            width={80}
                            height={80}
                            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4"
                          />
                          <h2 className="sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-2">
                            Unlock the Feature
                          </h2>
                          <p className="text-xs sm:text-base text-center font-normal mb-4">
                            Please note! you can pulish to PlayStore only If
                            Premium Plan is Purchased. AAB File is Build in this
                            section.
                          </p>
                          <button
                            className="bg-black text-sm sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-8 xl:py-3"
                            onClick={() => props.setTab("pro")}
                          >
                            Upgrade to Premium
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {publishData["iosStatus"] === "start" ? (
                    <div className=" flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 w-full h-[472px] sm:h-[600px] lg:h-[540px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Building the Application for AppStore:
                              <span className="block text-sm font-light mt-2">
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
                              onClick={() => confirmationModal("ios")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : publishData["iosStatus"] === "build" ? (
                    <div className="lg:basis-[45%] flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 w-full h-[472px] sm:h-[600px] lg:h-[540px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl  font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Building your Application:
                              <span className="block text-sm font-light mt-2">
                                Please wait ... Its takes less than 2 Days
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
                                    2 * 3.14 * 30 * (33.3 / 100)
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
                      </div>
                    </div>
                  ) : (
                    <div className="lg:basis-[45%] flex items-center justify-center">
                      <div className="flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-8 sm:mb-10 w-full h-[472px] sm:h-[600px] lg:h-[540px]">
                        <div>
                          <div className="flex justify-between gap-1 sm:gap-4 lg:gap-1 xl:gap-4">
                            <div className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-2 xl:mb-6">
                              Download the Application:
                              <span className="block text-xs sm:text-sm font-light ms-2 mt-2">
                                Use APP File for Testing.
                              </span>
                              <span className="block text-xs sm:text-sm font-light ms-2 mt-1">
                                Submit IPA File in AppStore.
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
                              {publishData.iosApk ? (
                                <a
                                  href={`https://www.googleapis.com/drive/v3/files/${publishData.iosApk}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                                  className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Download .APP
                                </a>
                              ) : null}
                              {publishData.iosAbb ? (
                                <a
                                  href={`https://www.googleapis.com/drive/v3/files/${publishData.iosAbb}?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True`}
                                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 sm:py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Download .IPA
                                </a>
                              ) : null}
                            </div>
                          </section>
                        </div>

                        <div className="w-full flex justify-end mt-4">
                          <button
                            className="bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none disabled:bg-gray-600 disabled:border-gray-600 text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-6 xl:py-3"
                            onClick={() => resetModal("ios")}
                          >
                            Rebuild Ios
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
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex justify-center items-center bg-white dark:bg-gray-800">
                      <Image
                        src="/svg/apps.svg"
                        width={156}
                        height={156}
                        alt="playstore"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Publish;
