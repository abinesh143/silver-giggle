const Referal = () => {
  return (
    <main>
      <div className="mt-6 sm:mt-10 mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black p-4 sm:p-6 lg:p-10 rounded-[12px] sm:rounded-[32px] lg:rounded-[40px]">
          <div className="text-white font-medium">
            <h2 className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-semibold sm:mb-2">
              Refer a Friend
            </h2>
            <p className="text-xs sm:text-base lg:text-lg">
              Get 10 Dollar for Every Successful Referal
            </p>
          </div>
          <div className="flex rounded-md pt-4 sm:py-4">
            <input
              type="text"
              className="py-2.5 sm:py-4 pl-4 sm:pl-6 w-full rounded-l-lg sm:rounded-l-xl text-xs sm:text-base lg:text-sm xl:text-base"
              placeholder="Email Address"
            />
            <button
              type="button"
              className="py-2.5 sm:py-4 px-4 sm:px-10 inline-flex justify-center items-center rounded-r-lg sm:rounded-r-xl font-semibold bg-white text-black text-xs sm:text-lg lg:text-base xl:text-lg focus:outline-none hover:bg-gray-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Referal;
