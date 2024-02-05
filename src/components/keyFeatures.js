import Image from "next/image";

const KeyFeatures = () => {
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
      description: "You can publish andriod app for free!",
      image: "/svg/play.svg",
    },
    {
      title: "Publish in App Store",
      description: "You can publish ios app for free!",
      image: "/svg/apps.svg",
    },
    {
      title: "Send Notification",
      description: "Send unlimited notifications to the app users.",
      image: "/images/notify.png",
    },
    {
      title: "Earn from Ads",
      description: "Get More Revenue by using Ads",
      image: "/svg/admob.svg",
    },
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
      <div class="mt-10 sm:mt-24 max-sm:px-4">
        <h2 class="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-16">
          Why Choose Free App Maker Pro AI?
        </h2>
        <div className="grid grid-cols-6 gap-8">
          {features.map((f, index) => {
            return (
              <div
                key={`key-${index}`}
                className="w-52 flex flex-col items-center"
              >
                <div className="rounded-[24px] flex items-center justify-center w-32 h-32 bg-[#fafafa]">
                  <Image src={f.image} alt={f.title} width="100" height="100" />
                </div>
                <div className="mt-2 text-lg font-semibold">{f.title}</div>
                <p className="text-center">{f.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#discover"
            class="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
          >
            Convert your Website to App for Free
          </a>
        </div>
      </div>
      <div class="mt-10 sm:mt-24 max-sm:px-4">
        <h2 class="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4 ">
          No Developer Account to Publish Apps
        </h2>
        <h2 class="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8">
          Don&apos;t Worry!
        </h2>
        <div className="flex justify-center">
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <p class="text-2xl text-center mb-4 w-3/4  px-4">
              Your Success is our Priority !!
            </p>
            <p class="text-2xl text-center mb-4 w-3/4  px-4">
              If you have no playstore account to publish Apps, Don&apos;t worry
              we will publish your app in our developer account.{" "}
            </p>
            <p className="text-2xl text-center mb-10 w-3/4  px-4">
              Our Support team will help you from start building apps,
              Publishing in playstore and for future updates.
            </p>
            <a
              href="#discover"
              class="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
            >
              Start Now for Free
            </a>
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
            <p class="text-2xl text-center mb-4 w-3/4  px-4">
              Advantages of Apps:
            </p>
            <p class="text-2xl text-center mb-4 w-3/4  px-4">
              Your Customers have Apps Installed, So they always browse your
              products.
            </p>
            <p className="text-2xl text-center mb-10 w-3/4  px-4">
              You will get More Customers by Play Store Search if you get more 5
              Star Reviews
            </p>
            <a
              href="#discover"
              class="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
            >
              Start Now for Free
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KeyFeatures;
