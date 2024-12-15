import {
  currentTime,
  getItemLocalStorage,
  setItemLocalStorage,
} from "@/helpers/utils";
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import { toastProvider } from "@/helpers/utils";
import PageLoader from "../PageLoader";

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
          <div className="sm:text-xl xl:text-2xl font-semibold">App Editor 1.0</div>
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
                  class="flex items-center mb-2.5 text-sm text-green-800 rounded-lg "
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">Note:</span> Use this user Email
                    and Password for Login the app editor
                  </div>
                </div>
                <div className="flex gap-4 justify-between">
                  <div class="w-full max-w-sm">
                    <div class="flex items-center">
                      <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg">
                        User Email
                      </span>
                      <div class="relative w-full">
                        <input
                          id="website-url"
                          type="text"
                          aria-describedby="helper-text-explanation"
                          class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={data.username || ""}
                          readonly
                          disabled
                        />
                      </div>
                      <button
                        data-tooltip-target="tooltip-website-url"
                        data-copy-to-clipboard-target="website-url"
                        class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-700 hover:border-blue-800"
                        type="button"
                        onClick={() => handleCopyText(data.username)}
                      >
                        <span id="default-icon">
                          <svg
                            class="w-4 h-4"
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
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        <span id="default-tooltip-message">Copy link</span>
                      </div>
                    </div>
                  </div>
                  <div class="w-full max-w-sm">
                    <div class="flex items-center">
                      <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg">
                        Password
                      </span>
                      <div class="relative w-full">
                        <input
                          id="website-password"
                          type="text"
                          aria-describedby="helper-text-explanation"
                          class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={data.secretCode || ""}
                          readonly
                          disabled
                        />
                      </div>
                      <button
                        data-tooltip-target="tooltip-website-password"
                        data-copy-to-clipboard-target="website-password"
                        class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-700 hover:border-blue-800"
                        type="button"
                        onClick={() => handleCopyText(data.secretCode)}
                      >
                        <span id="default-icon">
                          <svg
                            class="w-4 h-4"
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
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        <span id="default-tooltip-message">Copy link</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => props.setTab("tutorial")}
                    >
                      View Tutorial Video
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[162px] bg-white">
                <div className="flex items-center mt-6 gap-6 p-3">
                  <a
                    data-tooltip-target="tooltip-apk"
                    href={`https://apk.e-droid.net/apk/app${data.appId}.apk`}
                    class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download Apk
                  </a>
                  {props.user.isPremium ? (
                    <a
                      type="button"
                      data-tooltip-target="tooltip-aab"
                      href={`https://aab.e-droid.net/aab/app${data.appId}.aab`}
                      class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-lg shadow-pink-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={true}
                    >
                      Download AAB
                    </a>
                  ) : (
                    <div data-tooltip-target="tooltip-aab-warn">
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-lg shadow-pink-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={true}
                      >
                        Download AAB
                      </button>
                    </div>
                  )}

                  <button
                    data-tooltip-target="tooltip-playstore"
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    onClick={() => props.setTab("pro")}
                  >
                    Publish in PlayStore
                  </button>
                  <div
                    id="tooltip-apk"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Apk File to Test the Andriod Application
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    id="tooltip-aab"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    AAB File to Publish in Playstore
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    id="tooltip-aab-warn"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    AAB File can be downloaded after purchasing premium
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <div
                    id="tooltip-playstore"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Click to Publish in Playstore
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div
                  class="flex items-center p-3 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">Note:</span> If the App is not
                    found
                    <span className="font-semibold ms-2">
                      You can regenerate it from &apos;Name and Icon Section&apos;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 overflow-hidden bg-white p-6 relative md:hidden">
              This Section is not viewed in mobile & tab
            </div>
          </section>
        ) : loading ? (
          <div className="w-[770px] lg:w-[1072px] h-[600px] flex justify-center items-center">
            <PageLoader />
          </div>
        ) : (
          <section>Please contact us</section>
        )}
      </div>
    </main>
  );
};

export default EditApp;
