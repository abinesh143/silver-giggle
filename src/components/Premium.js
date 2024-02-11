/* eslint-disable @next/next/no-img-element */
const Premium = () => {
  const andriodPremium = [
    {
      normal: "Publish in",
      bold: "PlayStore",
    },
    {
      normal: "App Push",
      bold: "Notification",
    },
    {
      normal: "Google AdMob",
      bold: "Ads",
    },
    {
      normal: "Free 5 Star",
      bold: "Reviews",
    },
    {
      normal: "Customer",
      bold: "Support",
    },
  ];

  const premium = [
    {
      normal: "Publish in",
      bold: "PlayStore",
    },
    {
      normal: "Publish in",
      bold: "AppStore",
    },
    {
      normal: "App Push",
      bold: "Notification",
    },
    {
      normal: "Google AdMob",
      bold: "Ads",
    },
    {
      normal: "Free 5 Star",
      bold: "Reviews",
    },
    {
      normal: "Customer",
      bold: "Support",
    },
  ];

  const iosPremium = [
    {
      normal: "Publish in",
      bold: "AppStore",
    },
    {
      normal: "App Push",
      bold: "Notification",
    },
    {
      normal: "Google AdMob",
      bold: "Ads",
    },
    {
      normal: "Free 5 Star",
      bold: "Reviews",
    },
    {
      normal: "Customer",
      bold: "Support",
    },
  ];
  return (
    <main>
      <div className="2xl:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <section className="max-w-6xl mx-auto py-4 px-8">
          <div className=" mx-auto mb-14 text-center">
            <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
              <span className="text-indigo-600">Premium</span> Plans
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              Choose a plan that works best for you and your team.
            </p>
          </div>

          <div className="flex flex-col justify-between items-center gap-x-10 lg:flex-row lg:items-start">
            <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1">
              <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                  alt="unknown1"
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-semibold">Andriod</span>
                  <span>
                    <span className="font-medium text-gray-500 text-lg sm:text-xl align-top">
                      $&thinsp;
                    </span>
                    <span className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-bold">25 </span>
                  </span>
                  <span className="text-gray-500 font-medium">/ one time</span>
                </div>
              </div>
              <ul className="mb-7 font-medium text-gray-500">
                {andriodPremium.map((feature, index) => {
                  return (
                    <li key={`andriod-${index}`} className="flex sm:text-xl lg:text-base 2xl:text-xl mb-2">
                      <img
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                        alt="unknown2"
                      />
                      <span className="ml-3">
                        {feature.normal}{" "}
                        <span className="text-black">{feature.bold}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button className="flex justify-center items-center bg-indigo-600 rounded-xl py-4 px-6 text-center text-white  sm:text-xl">
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                  alt="unknown3"
                />
              </button>
            </div>

            <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
              <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                  alt="unknown4"
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-semibold text-white">
                    Andriod & Ios
                  </span>
                  <span>
                    <span className="font-medium text-lg sm:text-xl align-top">
                      $&thinsp;
                    </span>
                    <span className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-bold text-white">99 </span>
                  </span>
                  <span className="font-medium">/ one time</span>
                </div>
              </div>
              <ul className="mb-10 font-medium sm:text-xl lg:text-base 2xl:text-xl">
                {premium.map((pre, index) => {
                  return (
                    <li key={`premium-${index}`} className="flex mb-4">
                      <img
                        src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                        alt="unknown5"
                      />
                      <span className="ml-3">
                        {pre.normal}{" "}
                        <span className="text-white">{pre.bold}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button className="flex justify-center items-center bg-indigo-600 rounded-xl py-4 px-6 text-center text-white sm:text-2xl">
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                  alt="unknown6"
                />
              </button>
            </div>

            <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3">
              <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                  alt="unknown7"
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-semibold">Ios</span>
                  <span>
                    <span className="font-medium text-gray-500 text-xl align-top">
                      $&thinsp;
                    </span>
                    <span className="text-xl sm:text-3xl lg:text-xl 2xl:text-3xl font-bold">79 </span>
                  </span>
                  <span className="text-gray-500 font-medium">/ one time</span>
                </div>
              </div>
              <ul className="mb-7 font-medium text-gray-500">
                {iosPremium.map((ios, index) => {
                  return (
                    <li key={`ios-${index}`} className="flex sm:text-xl lg:text-base 2xl:text-xl mb-2">
                      <img
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                        alt="unknown8"
                      />
                      <span className="ml-3">
                        {ios.normal}{" "}
                        <span className="text-black">{ios.bold}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button className="flex justify-center items-center bg-indigo-600 rounded-xl py-4 px-6 text-center text-white sm:text-xl">
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                  alt="unknown9"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Premium;
