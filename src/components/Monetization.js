import Image from "next/image";

const Monetization = () => {
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            Monetization (Ads)
          </div>
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        <section className="flex gap-8">
          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-2/5 relative bg-[#E3FFBF] rounded-t-[24px] sm:rounded-t-[32px] px-4 sm:px-10 lg:px-6 xl:px-10">
                <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#E3FFBF] w-12 h-12"></div>
                <div className="text-[#4E7923] text-xs sm:text-base lg:text-lg font-semibold py-3 sm:py-4">
                  Admob Ads
                </div>
              </div>
            </div>
            <div className="bg-[#E3FFBF] grid grid-cols-1 gap-4 rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-3 sm:p-10 lg:p-5 xl:p-10 mb-8">
              <div>
                <Image
                  src="/svg/admob.svg"
                  width={100}
                  height={100}
                  alt="onesignal"
                />
              </div>
              <div>
                <label
                  for="admob_appid"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  App ID:
                </label>
                <input
                  type="text"
                  id="admob_appid"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your admob app id"
                  required
                />
              </div>
              <div>
                <label
                  for="admob_banner"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Banner Ads:
                </label>
                <input
                  type="text"
                  id="admob_banner"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your admob banner id"
                  required
                />
              </div>
              <div>
                <label
                  for="admob_interstitial"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Full Screen Ads:
                </label>
                <input
                  type="text"
                  id="admob_interstitial"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your admob interstitial id"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-xs sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3 mt-4"
              >
                Save
              </button>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-2/5 relative bg-[#F7FF9D] rounded-t-[24px] sm:rounded-t-[32px] px-4 sm:px-10 lg:px-6 xl:px-10">
                <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#F7FF9D] w-12 h-12"></div>
                <div className="text-[#767C2C] text-xs sm:text-base lg:text-lg font-semibold py-3 sm:py-4">
                  Unity Ads
                </div>
              </div>
            </div>
            <div className="bg-[#F7FF9D] grid grid-cols-1 gap-4 rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-3 sm:p-10 lg:p-5 xl:p-10 mb-8">
              <div className="mb-6">
                <Image
                  src="/images/unity.png"
                  width={180}
                  height={180}
                  alt="onesignal"
                />
              </div>
              <div>
                <label
                  for="unity_gameid"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  UnityAds Game ID:
                </label>
                <input
                  type="text"
                  id="unity_gameid"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="com.crazy.shopy"
                  required
                />
              </div>
              <div>
                <label
                  for="unity_banner"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Banner Placement ID:
                </label>
                <input
                  type="text"
                  id="unity_banner"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Crazy Shoppy"
                  required
                />
              </div>
              <div>
                <label
                  for="unity_interstitial"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Full Screen Placement ID:
                </label>
                <input
                  type="text"
                  id="unity_interstitial"
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="com.crazy.shopy"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-xs sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3 mt-4"
              >
                Save
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Monetization;
