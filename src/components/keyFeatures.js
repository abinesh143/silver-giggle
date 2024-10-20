import Image from "next/image";

const KeyFeatures = (props) => {
  const features = [
    {
      title: "Free Forever",
      description: "Convert your website to App for Free!",
      image: "/images/free.png",
    },
    {
      title: "No Coding Required",
      description: "Zero Knowledge of Coding Required.",
      image: "/images/coding.png",
    },
    {
      title: "Publish in PlayStore",
      description: "You can publish andriod app in PlayStore!",
      image: "/svg/play.svg",
    },
    {
      title: "Publish in App Store",
      description: "You can publish ios app in AppStore!",
      image: "/svg/apps.svg",
    },
    {
      title: "Send Notification",
      description: "Send unlimited notifications to the app users.",
      image: "/images/notify.png",
    },
    // {
    //   title: "Earn from Ads",
    //   description: "Get More Revenue by using Ads",
    //   image: "/svg/admob.svg",
    // },
    {
      title: "Customer Support",
      description: "Fast Support by Email, Phone and Whatsapp",
      image: "/svg/support.svg",
    },
    {
      title: "Security",
      description: "Our apps are fully secured with sha-256",
      image: "/svg/security.svg",
    },
  ];
  return (
    <main>
      <div className="mt-10 sm:mt-24 mx-4">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-16">
          Why Choose Free App Maker Pro AI?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {features.map((f, index) => {
            return (
              <div
                key={`key-${index}`}
                className="w-40 sm:w-52 flex flex-col items-center"
              >
                <div className="rounded-[24px] flex items-center justify-center w-32 h-32 bg-[#fafafa]">
                  <Image src={f.image} alt={f.title} width="100" height="100" />
                </div>
                <div className="mt-2 sm:text-lg font-semibold">{f.title}</div>
                <p className="text-center text-sm sm:text-base">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 2xl:px-16 2xl:py-4"
            onClick={() => props.checkUserExists()}
          >
            Convert your Website to App for Free
          </button>
        </div>
      </div>
      {/* <div className="mt-10 sm:mt-24 max-sm:px-4">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4 ">
          No Developer Account to Publish Apps
          <span className="sm:hidden">! Don&apos;t Worry!</span>
        </h2>
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 max-sm:hidden">
          Don&apos;t Worry!
        </h2>
        <div className="flex flex-col lg:flex-row max-lg:gap-y-10 justify-center">
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <p className="text-lg sm:text-2xl text-center mb-2 sm:mb-4 2xl:w-3/4  px-4">
              Your Success is our Priority !!
            </p>
            <p className="text-lg sm:text-2xl text-center mb-2 sm:mb-4 2xl:w-3/4  px-4">
              If you have no playstore account to publish Apps, Don&apos;t worry
              we will publish your app in our developer account.{" "}
            </p>
            <p className="text-lg sm:text-2xl text-center mb-6 sm:mb-10 2xl:w-3/4  px-4">
              Our Support team will help you from start building apps,
              Publishing in playstore and for future updates.
            </p>
            <button
              className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
              onClick={() => props.checkUserExists()}
            >
              Start Now for Free
            </button>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Image
              src="/images/convert.gif"
              width={256}
              height={256}
              alt="gifer"
            />
          </div>
          <div className="flex basis-1/3 flex-col justify-center items-center">
            <p className="text-lg sm:text-2xl text-center mb-2 sm:mb-4 2xl:w-3/4  px-4">
              Advantages of Apps:
            </p>
            <p className="text-lg sm:text-2xl text-center mb-2 sm:mb-4 2xl:w-3/4  px-4">
              When your Customers install the app, So they always browse your
              products when they are free. Highly Chance to get more orders.
            </p>
            <p className="text-lg sm:text-2xl text-center mb-6 sm:mb-10 2xl:w-3/4  px-4">
              You will get More Customers by Play Store Search if you get more 5
              Star Reviews
            </p>
            <button
              className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3  2xl:px-16 2xl:py-4"
              onClick={() => props.checkUserExists()}
            >
              Start Now for Free
            </button>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default KeyFeatures;
