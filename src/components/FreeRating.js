import Image from "next/image";

const FreeRating = () => {
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold max-sm:hidden">
            Free 5 Star Rating & Reviews
          </div>
          <div className="sm:text-xl xl:text-2xl font-semibold sm:hidden">
            Free Rating
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
                5 Stars
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
              <form className="basis-1/2">
                <div className="text-sm sm:text-xl xl:text-2xl font-semibold mb-6">
                  My Balance -{" "}
                  <span className="text-[#FE5000]">10 Free Reviews</span>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-1 bg-white p-8 rounded-[24px]">
                  <div>
                    <label
                      for="first_name"
                      className="block mb-2 text-sm sm:text-base font-medium text-gray-900 dark:text-white"
                    >
                      App Link:
                    </label>
                    <input
                      type="text"
                      id="app-link"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your App Link"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="need-rating"
                      className="block mb-2 text-sm sm:text-base font-medium text-gray-900 dark:text-white"
                    >
                      Select a Rating
                    </label>
                    <select
                      id="need-rating"
                      className="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="keywords"
                      className="block mb-2 text-sm sm:text-base font-medium text-gray-900 dark:text-white"
                    >
                      Keywords for Review:
                    </label>
                    <textarea
                      id="keywords"
                      rows="4"
                      className="block p-2.5 w-full text-sm sm:text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Keywords"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-opacity-80 focus:ring-gray-400 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-4 focus:outline-none text-sm sm:text-base lg:text-sm xl:text-base font-semibold rounded-xl px-8 py-2 sm:px-14 sm:py-3"
                  >
                    Save
                  </button>
                </div>
              </form>

              <div className="basis-1/2 flex justify-center items-center rounded-[24px] sm:rounded-[32px] p-4 sm:p-8">
                <Image
                  src="/images/rating.png"
                  width={472}
                  height={472}
                  alt="review"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FreeRating;
