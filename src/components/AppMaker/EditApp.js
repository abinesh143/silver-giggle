"use client";

import {
  currentTime,
  getItemLocalStorage,
  setItemLocalStorage,
} from "@/helpers/utils";
import { initFlowbite, Modal } from "flowbite";
import { useEffect, useState } from "react";
import { toastProvider } from "@/helpers/utils";
import PageLoader from "../PageLoader";
import Image from "next/image";

const EditApp = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCopyText = (shareText) => {
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        toastProvider("success", "Text copied to clipboard!");
      })
      .catch((err) => {
        toastProvider("error", "Failed to copy text");
      });
  };

  console.log(typeof props.user.isPremium);

  const getApplist = async () => {
    try {
      const response = await fetch(
        `/api/appcreator?email=${props.user.userEmail}`,
        {
          method: "GET",
        }
      );
      const appDetails = await response.json();
      if (response.status === 200) {
        console.log(appDetails, "appDetails");
        setItemLocalStorage("freeapp-editor", appDetails);
        setData(appDetails);
        toastProvider("success", "App Editor Started ");
      }
      if (response.status === 404) {
        mappingApplist();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const mappingApplist = async () => {
    const body = {
      userEmail: props.user.userEmail,
    };

    try {
      let res = await fetch("/api/appcreator", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        getApplist();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = (type, id) => {
    const modalElement = document.getElementById(id);
    const modal = new Modal(modalElement, { closable: false });
    type === "show" ? modal.show() : modal.hide();
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const appDetails = getItemLocalStorage("freeapp-editor");
    if (appDetails) {
      setData(appDetails);
    } else {
      getApplist();
    }
  }, []);

  return (
    <main>
      <div className="p-4  lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            App Editor 1.0
          </div>
          {currentTime()}
        </div>
        {data ? (
          <section>
            <div className="w-[770px] lg:w-[1072px] h-[600px] overflow-hidden bg-white p-6 relative max-md:hidden">
              <iframe
                src="https://www.e-droid.net"
                title="Free App Maker AI"
                className="w-[1024px] h-full border-none"
              ></iframe>
              <div className="absolute top-0 left-0 w-full h-[104px] bg-white">
                <div
                  className="flex items-center mb-2.5 text-sm text-green-800 rounded-lg "
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Note:</span> Use this user
                    Email and Password for Login the app editor
                  </div>
                </div>
                <div className="flex gap-4 justify-between">
                  <div className="w-full max-w-sm">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg">
                        User Email
                      </span>
                      <div className="relative w-full">
                        <input
                          id="website-url"
                          type="text"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={data.username || ""}
                          readonly
                          disabled
                        />
                      </div>
                      <button
                        data-tooltip-target="tooltip-website-url"
                        data-copy-to-clipboard-target="website-url"
                        className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-700 hover:border-blue-800"
                        type="button"
                        onClick={() => handleCopyText(data.username)}
                      >
                        <span id="default-icon">
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id="tooltip-website-url"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        <span id="default-tooltip-message">Copy link</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg">
                        Password
                      </span>
                      <div className="relative w-full">
                        <input
                          id="website-password"
                          type="text"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={data.secretCode || ""}
                          readonly
                          disabled
                        />
                      </div>
                      <button
                        data-tooltip-target="tooltip-website-password"
                        data-copy-to-clipboard-target="website-password"
                        className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-700 hover:border-blue-800"
                        type="button"
                        onClick={() => handleCopyText(data.secretCode)}
                      >
                        <span id="default-icon">
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id="tooltip-website-password"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        <span id="default-tooltip-message">Copy link</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => props.setTab("tutorial")}
                    >
                      View Tutorial Video
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[162px] bg-white">
                <div className="flex items-center mt-6 gap-6 p-3">
                  <button
                    data-tooltip-target="tooltip-apk"
                    onClick={() => toggleModal("show", "download-modal")}
                    // href={`https://apk.e-droid.net/apk/app${data.appId}-fdbh6c.apk`}
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download Application
                  </button>
                  <button
                    data-tooltip-target="tooltip-playstore"
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex justify-center items-center"
                    onClick={() => props.setTab("pro")}
                  >
                    <Image
                      src={"/images/playstore.png"}
                      width={24}
                      height={24}
                      alt=""
                      className="me-2"
                    />
                    Publish in PlayStore
                  </button>
                  <div
                    id="tooltip-apk"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Apk File to Test the Andriod Application
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    id="tooltip-playstore"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Click to Publish in Playstore
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div
                  className="flex items-center p-3 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Note:</span> If the App is not
                    found
                    <span className="font-semibold ms-2">
                      You can regenerate it from &apos;Name and Icon
                      Section&apos;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 overflow-hidden bg-white p-6 relative md:hidden">
             <span> This Section is not viewed in mobile & tab</span>
              <div className=" w-full h-[162px] bg-white">
                <div className="flex flex-col items-center mt-6 gap-6 p-3">
                  <button
                    data-tooltip-target="tooltip-apk"
                    onClick={() => toggleModal("show", "download-modal")}
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download Application
                  </button>
                  <button
                    data-tooltip-target="tooltip-playstore"
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex justify-center items-center"
                    onClick={() => props.setTab("pro")}
                  >
                    <Image
                      src={"/images/playstore.png"}
                      width={24}
                      height={24}
                      alt=""
                      className="me-2"
                    />
                    Publish in PlayStore
                  </button>
                  <div
                    id="tooltip-apk"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Apk File to Test the Andriod Application
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    id="tooltip-playstore"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Click to Publish in Playstore
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div
                  className="flex items-center p-3 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Note:</span> If the App is not
                    found
                    <span className="font-semibold ms-2">
                      You can regenerate it from &apos;Name and Icon
                      Section&apos;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : loading ? (
          <div className="w-[770px] lg:w-[1072px] h-[600px] flex justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          <section>Please contact us</section>
        )}

        <div
          id="download-modal"
          tabindex="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-[650px] max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  Download Application
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  onClick={() => toggleModal("hide", "download-modal")}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="w-full h-[600px] flex justify-center items-center overflow-hidden rounded-xl bg-white p-6 relative">
                {data?.appId ? (
                  <iframe
                    src={`https://www.appcreator24.com/app${data.appId}-fdbh6c`}
                    title="Free App Maker AI"
                    className="w-[350px] h-full border-none"
                  ></iframe>
                ) : null}
                <div className="absolute bottom-0 left-0 w-full h-[210px] rounded-xl bg-white">
                  <div className="flex justify-center text-lg font-semibold mb-4">
                    AAB File to Publish in Playstore
                  </div>
                  <div className="flex justify-center">
                    {props.user.isPremium && data?.appId ? (
                      <a
                        type="button"
                        data-tooltip-target="tooltip-aab"
                        href={`https://aab.e-droid.net/aab/app${data.appId}.aab`}
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-lg shadow-pink-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={true}
                      >
                        Download AAB
                      </a>
                    ) : (
                      <div data-tooltip-target="tooltip-aab-warn">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-lg shadow-pink-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={true}
                        >
                          Download AAB
                        </button>
                      </div>
                    )}
                    <div
                      id="tooltip-aab"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                    >
                      AAB File to Publish in Playstore
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div
                      id="tooltip-aab-warn"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                    >
                      AAB File can be downloaded after purchasing premium
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div className="flex justify-center text-xs mt-4">
                    <ul className="list-disc">
                      <li>You can install .apk file in your Android device.</li>
                      <li>
                        File .aab (Android App Bundle) only can be published on
                        Google Play.
                      </li>
                      <li>
                        In case you generate .aab file, you can download it from
                        the Download app option.
                      </li>
                      <li>
                        .aab file is available for 12 hours after its
                        generation.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute top-[88px] left-40 w-60 rounded-xl h-8 bg-[#eeeeee]"></div>
                <div className="absolute top-2 left-28 w-96 rounded-xl h-16 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditApp;
