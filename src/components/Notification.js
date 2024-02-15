import Image from "next/image";
import { useEffect, useState } from "react";
import { setItemLocalStorage, getItemLocalStorage, toastProvider } from "@/helpers/utils";

const Notification = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [appNotify, setAppNotify] = useState({
    oneSignalId: "",
  });

  const saveAppNotification = (e) => {
    e.preventDefault();
    setItemLocalStorage("appNotification", {
      ...appNotify,
    });
    toastProvider('success', 'App Notification Saved')
  };

  useEffect(() => {
    const appNotification = getItemLocalStorage("appNotification");
    if (appNotification) {
      setAppNotify({ ...appNotification });
    }
  }, []);

  useEffect(() => {
    setIsPaused(false);
  }, []);
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            Push Notification
          </div>
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        {isPaused ? (
          <>
            <div className="bg-[#F9F9F9] absolute left-0 top-0 opacity-80 z-30 w-full h-full"></div>
            <div className="absolute xl:w-[calc(100vw-360px)] max-lg:top-0 h-[calc(100vh-240px)] overflow-hidden z-40 flex flex-col justify-center items-center text-black">
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
                  You will be missed! Please note, you can send unlimited
                  notification to all your app users for discounts and offers.
                </p>
                <button className="bg-black text-sm sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl text-white py-2 px-8 xl:py-3">
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </>
        ) : null}
        <section className="flex flex-col lg:flex-row h-[calc(100vh-224px)]">
          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-2/5 relative bg-[#E0F2FF] rounded-t-[24px] sm:rounded-t-[32px] px-4 sm:px-10 lg:px-6 xl:px-10">
                <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#E0F2FF] w-12 h-12"></div>
                <div className="text-[#4983AB] g:text-lg font-semibold py-3 sm:py-4">
                  Notification
                </div>
              </div>
            </div>
            <div className="bg-[#E0F2FF] grid grid-cols-1 gap-4 rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-3 sm:p-10 lg:p-5 xl:p-10 mb-8">
              <div className="mb-6">
                <Image
                  src="/images/onesignal.png"
                  width={156}
                  height={156}
                  alt="onesignal"
                />
              </div>
              <form onSubmit={(e) => saveAppNotification(e)}>
                <div>
                  <label
                    for="one_signal_id"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    One Signal ID:
                  </label>
                  <input
                    type="text"
                    id="one_signal_id"
                    className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your one signal id"
                    value={appNotify.oneSignalId}
                    onChange={(e) =>
                      setAppNotify({
                        ...appNotify,
                        oneSignalId: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-sm sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3 mt-4"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center rounded-[24px] sm:rounded-[32px] p-4 sm:p-8">
            <Image
              src="/svg/notify-icon.svg"
              width={512}
              height={512}
              alt="notify"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Notification;
