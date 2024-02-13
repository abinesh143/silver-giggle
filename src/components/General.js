/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import { setItemLocalStorage, getItemLocalStorage } from "@/helpers/utils";

const General = () => {
  const [appInfo, setAppInfo] = useState({
    appName: "",
    packageName: "",
    versionName: "",
    versionCode: "",
    website: "",
  });
  const [appError, setAppError] = useState("");
  const [appIcon, setAppIcon] = useState(
    "http://localhost:3000/images/logo.png"
  );

  const saveAppInfo = (e) => {
    e.preventDefault();
    if (!appInfo.appName) {
      setAppError("App Name is Missing");
    } else if (!appInfo.packageName) {
      setAppError("package is missing.");
    } else if (!appInfo.website) {
      setAppError("website url is missing");
    } else if (!appIcon) {
      setAppError("App Icon is missing");
    } else {
      // first upload to cloudinary
      // After Success make api call to localstorage
      setItemLocalStorage("appInfo", {
        ...appInfo,
        appIcon: "http://localhost:3000/images/logo.png",
      });

      // Failed Case
      setAppError("Image Failed to Upload. Please Retry");
    }
  };

  useEffect(() => {
    const appDetails = getItemLocalStorage("appInfo");
    if (appDetails) {
      setAppInfo({ ...appDetails });
    }
  }, []);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold capitalize max-sm:hidden">
            App Basic Information
          </div>
          <div className="sm:text-xl xl:text-2xl font-semibold capitalize sm:hidden">
            App Info
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
                App Info
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-16">
              <form onSubmit={(e) => saveAppInfo(e)} className="basis-1/2">
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                  <div>
                    <label
                      for="app_name"
                      className="block mb-2  font-medium text-gray-900 dark:text-white"
                    >
                      App Name:
                    </label>
                    <input
                      type="text"
                      id="app_name"
                      className="bg-white border text-sm sm:text-base border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Crazy Shoppy"
                      value={appInfo.appName}
                      onChange={(e) =>
                        setAppInfo({ ...appInfo, appName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="package_name"
                      className="block mb-2  font-medium text-gray-900 dark:text-white"
                    >
                      Package name:
                    </label>
                    <input
                      type="text"
                      id="package_name"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="com.crazy.shopy"
                      value={appInfo.packageName}
                      onChange={(e) =>
                        setAppInfo({ ...appInfo, packageName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="version_name"
                      className="block mb-2  font-medium text-gray-900 dark:text-white"
                    >
                      Version name:
                    </label>
                    <input
                      type="version_name"
                      id="company"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1.0"
                      value={appInfo.versionName}
                      onChange={(e) =>
                        setAppInfo({ ...appInfo, versionName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      for="version_code"
                      className="block mb-2  font-medium text-gray-900 dark:text-white"
                    >
                      Version code:
                    </label>
                    <input
                      type="tel"
                      id="version_code"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="11"
                      value={appInfo.versionCode}
                      onChange={(e) =>
                        setAppInfo({ ...appInfo, versionCode: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      for="website"
                      className="block mb-2  font-medium text-gray-900 dark:text-white"
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="https://www.crazyshopy.com"
                      value={appInfo.website}
                      onChange={(e) =>
                        setAppInfo({ ...appInfo, website: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                    for="app_launcher"
                  >
                    App icon: (Launcher)
                  </label>
                  <input
                    className="block w-full text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="app_launcher"
                    type="file"
                  />
                </div>
                {appError ? (
                  <small class="block text-xs text-red-600">{appError}</small>
                ) : null}
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-sm sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3 mt-4"
                >
                  Save
                </button>
              </form>

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
                      alt="mockup1"
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                      className="hidden dark:block w-[272px] h-[572px]"
                      alt="mockup2"
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

export default General;
