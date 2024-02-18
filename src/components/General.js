/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  setItemLocalStorage,
  getItemLocalStorage,
  toastProvider,
} from "@/helpers/utils";
import axios from "axios";

const General = (props) => {
  const [appInfo, setAppInfo] = useState({
    appName: "",
    packageName: "",
    versionName: "",
    versionCode: "",
    website: "",
  });
  const [appError, setAppError] = useState("");
  const [appIcon, setAppIcon] = useState(null);
  const [appPreview, setAppPreview] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const mappingApplist = async () => {
    const body = {
      website: appInfo.website,
      userEmail: props.user.userEmail,
    };

    try {
      let res = await fetch("/api/applist", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        toastProvider("success", "App Info Saved ");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      const formData = new FormData();
      formData.append("file", appIcon);
      formData.append("upload_preset", "ml_default");
      setBtnLoading(true);
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dd4iqjurs/image/upload",
          formData
        )
        .then(async (response) => {
          if (response.status === 200) {
            setItemLocalStorage("appInfo", {
              ...appInfo,
              appIcon: response.data.secure_url,
            });
            setAppPreview(response.data.secure_url);
            await mappingApplist();
          }
        })
        .catch((error) => {
          console.error(error);
          setDesignError("Image Uploading Failed.. Please try again");
        })
        .finally(() => {
          setBtnLoading(false);
        });
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      if (file.size > 5000000) {
        setAppError("Image File should be less than 5 Mb");
      } else if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setAppError("Image Format sholud be .jpeg or .jpg or .png");
      } else {
        setAppIcon(file);
        setAppPreview(URL.createObjectURL(file));
      }
    } else {
      setDesignError("Image Upload Failed. Please try again..");
    }
  };

  useEffect(() => {
    const appDetails = getItemLocalStorage("appInfo");
    if (appDetails) {
      setAppInfo({ ...appDetails });
      if (appDetails["appIcon"]) {
        setAppPreview(appDetails["appIcon"]);
      }
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
              <form
                onSubmit={(e) => saveAppInfo(e)}
                className="basis-1/2 relative"
              >
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
                    onChange={handleFileUpload}
                  />
                </div>
                <div className="absolute -bottom-2 right-5 bg-gray-400 rounded-lg">
                  {appPreview ? (
                    <Image
                      src={appPreview}
                      width={100}
                      height={100}
                      alt="app-icon"
                      className="rounded-lg"
                    />
                  ) : null}
                </div>
                {appError ? (
                  <small class="block text-xs text-red-600">{appError}</small>
                ) : null}
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-sm sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3 mt-4"
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
                  ) : null}{" "}
                  Save
                </button>
              </form>

              <div className="basis-1/2 flex justify-center items-center">
                {appInfo.website ? (
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[690px] w-[390px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[362px] h-[662px] bg-white dark:bg-gray-800">
                      <embed
                        src={appInfo.website}
                        className="w-[362px] h-[662px]"
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default General;
