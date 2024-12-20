import Image from "next/image";
import { useEffect, useState } from "react";
import {
  setItemLocalStorage,
  getItemLocalStorage,
  toastProvider,
  currentTime,
} from "@/helpers/utils";
import axios from "axios";

const Design = () => {
  const [appDesign, setAppDesign] = useState({
    themeColor: "",
    custom: "",
    splashScreen: "",
  });
  const [splashScreen, setSplashScreen] = useState(null);
  const [designError, setDesignError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const saveAppDesign = (e) => {
    e.preventDefault();
    const element = document.querySelector('input[name="theme"]:checked');
    if (element) {
      setAppDesign({ ...appDesign, themeColor: element.value });
      setItemLocalStorage("appDesign", {
        ...appDesign,
        themeColor: element.value,
      });
    }

    if (splashScreen) {
      const formData = new FormData();
      formData.append("file", splashScreen);
      formData.append("upload_preset", "ltvsms6q");

      setBtnLoading(true);
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dd4iqjurs/image/upload",
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            setAppDesign((design) => {
              setItemLocalStorage("appDesign", {
                ...design,
                splashScreen: response.data.secure_url,
              });
              return { ...design, splashScreen: response.data.secure_url };
            });
            toastProvider("success", "App Design Saved");
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

  const setInitialState = (color) => {
    const elementGroup = document.querySelectorAll('input[name="theme"]');
    elementGroup.forEach((ele) => {
      if (ele.value === color) {
        ele.checked = true;
      }
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      if (file.size > 5000000) {
        setDesignError("Image File should be less than 5 Mb");
      } else if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setDesignError("Image Format sholud be .jpeg or .jpg or .png");
      } else {
        setSplashScreen(file);
        setAppDesign({
          ...appDesign,
          splashScreen: URL.createObjectURL(file),
        });
      }
    } else {
      setDesignError("Image Upload Failed. Please try again..");
    }
  };

  useEffect(() => {
    const myAppDesign = getItemLocalStorage("appDesign");
    if (myAppDesign) {
      setAppDesign({ ...myAppDesign });
      if (myAppDesign["themeColor"]) {
        setInitialState(myAppDesign["themeColor"]);
      }
    }
  }, []);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">App Design</div>
          {currentTime()}
        </div>
        <section>
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-[#FFF1E7] rounded-t-[24px] sm:rounded-t-[32px] relative px-4 sm:px-10">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7] w-12 h-12"></div>
              <div className="text-[#212121] text-xs sm:text-lg lg:text-lg font-semibold py-4">
                Design
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
              <form onSubmit={(e) => saveAppDesign(e)} className="basis-1/2">
                <div className="grid gap-6 mb-6 md:grid-cols-1 bg-white p-8 rounded-[24px]">
                  <div className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    1) Choose a Theme Color for your App?
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center me-4">
                      <input
                        id="red-radio"
                        name="theme"
                        type="radio"
                        value="red"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />

                      <label
                        for="red-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Red
                      </label>
                      <div className="w-4 h-4 rounded-md bg-red-600 ms-2"></div>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="teal-radio"
                        name="theme"
                        type="radio"
                        value="teal"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />

                      <label
                        for="teal-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Teal
                      </label>
                      <div className="w-4 h-4 rounded-md bg-teal-600 ms-2"></div>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="green-radio"
                        name="theme"
                        type="radio"
                        value="green"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />
                      <label
                        for="green-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Green
                      </label>
                      <div className="w-4 h-4 rounded-md bg-green-600 ms-2"></div>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="purple-radio"
                        name="theme"
                        type="radio"
                        value="purple"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />

                      <label
                        for="purple-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Purple
                      </label>
                      <div className="w-4 h-4 rounded-md bg-purple-600 ms-2"></div>
                    </div>

                    <div className="flex items-center me-4">
                      <input
                        id="yellow-radio"
                        name="theme"
                        type="radio"
                        value="yellow"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />
                      <label
                        for="yellow-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Yellow
                      </label>
                      <div className="w-4 h-4 rounded-md bg-yellow-400 ms-2"></div>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="orange-radio"
                        name="theme"
                        type="radio"
                        value="orange"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />
                      <label
                        for="orange-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Orange
                      </label>
                      <div className="w-4 h-4 rounded-md bg-orange-500 ms-2"></div>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="custom-radio"
                        type="radio"
                        value="custom"
                        name="theme"
                        className="w-4 h-4 bg-transparent text-black border border-black checked:border-black focus:ring-0"
                      />
                      <label
                        for="custom-radio"
                        className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                      >
                        Pick a Color
                      </label>
                      <div className="flex items-center ms-4">
                        <input
                          type="color"
                          id="favcolor"
                          name="favcolor"
                          value={appDesign.custom}
                          className="cursor-pointer"
                          onChange={(e) =>
                            setAppDesign({
                              ...appDesign,
                              custom: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    2) Upload Splash Screen for your App?
                  </div>
                  <div className="mb-6">
                    <input
                      className="block w-full  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </div>
                  {designError ? (
                    <small className="block text-xs text-red-600">
                      {designError}
                    </small>
                  ) : null}
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-sm sm:text-lg lg:text-lg xl:text-lg font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3"
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
                </div>
              </form>

              <div className="basis-1/2 flex justify-center items-center rounded-[24px] sm:rounded-[32px] p-4 sm:p-8">
                <Image
                  src={
                    appDesign.splashScreen
                      ? appDesign.splashScreen
                      : "/images/design.png"
                  }
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

export default Design;
