import Image from "next/image";
import { useEffect, useState } from "react";
import { setItemLocalStorage, getItemLocalStorage, toastProvider } from "@/helpers/utils";

const Setting = () => {
  const [appSetting, setAppSetting] = useState({
    showMessage: false,
    navLink1: "",
    navLink2: "",
    navLink3: "",
  });

  const saveAppSetting = (e) => {
    e.preventDefault();
    setItemLocalStorage("appSetting", {
      ...appSetting,
    });
    toastProvider('success', 'App Setting Saved')
  };

  useEffect(() => {
    const appSetting = getItemLocalStorage("appSetting");
    if (appSetting) {
      setAppSetting({ ...appSetting });
    }
  }, []);

  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            App Setting
          </div>
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        <section>
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-[#FFF1E7] rounded-t-[24px] sm:rounded-t-[32px] relative px-4 sm:px-10">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7] w-12 h-12"></div>
              <div className="text-[#212121] text-xs sm:text-base lg:text-lg font-semibold py-4">
                Setting
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
              <form onSubmit={(e) => saveAppSetting(e)} className="basis-1/2">
                <div className="grid gap-6 mb-6 md:grid-cols-1 bg-white p-8 rounded-[24px]">
                  <div>
                    <div className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                      Rate app in Google Play:
                    </div>
                    <p>Message to ask user to rate the app on Google Play.</p>
                    <div className="flex items-center mt-2">
                      <input
                        id="review-rating"
                        type="checkbox"
                        checked={appSetting.showMessage}
                        onChange={(e) =>
                          setAppSetting({
                            ...appSetting,
                            showMessage: e.target.checked,
                          })
                        }
                        className="w-5 h-5 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="link-checkbox"
                        className="ms-2 sm:text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Show message in your app.
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                      Bottom Navigation:
                    </div>
                    <p>Show Links in Bottom Menu of the app</p>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      <input
                        type="text"
                        id="navlink_1"
                        className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Link 1"
                        value={appSetting.navLink1}
                        onChange={(e) =>
                          setAppSetting({
                            ...appSetting,
                            navLink1: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        id="navlink_2"
                        className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Link 2"
                        value={appSetting.navLink2}
                        onChange={(e) =>
                          setAppSetting({
                            ...appSetting,
                            navLink2: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        id="navlink_3"
                        className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Link 3"
                        value={appSetting.navLink3}
                        onChange={(e) =>
                          setAppSetting({
                            ...appSetting,
                            navLink3: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-xs sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3"
                  >
                    Save
                  </button>
                </div>
              </form>

              <div className="basis-1/2 flex justify-center items-center rounded-[24px] sm:rounded-[32px] p-4 sm:p-8">
                <Image
                  src="/images/setting.png"
                  width={472}
                  height={472}
                  alt="design"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Setting;
