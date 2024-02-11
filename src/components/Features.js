/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const Features = () => {
  const [section, setSection] = useState("s1");
  return (
    <main id="discover">
      <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-10 sm:mb-16 mt-10 sm:mt-24">
        Features of Our Software?
      </h2>
      <div className="lg:mx-4">
        {section === "s1" ? (
          <section>
            <div className="flex">
              <div className="basis-1/3 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setSection("s1")}
                >
                  Premium Features
                </h3>
                <div
                  className={`absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_#FCE594]`}
                ></div>
              </div>
              <div className="basis-1/3 relative rounded-tl-[24px] md:rounded-tl-[32px] xl:rounded-tl-[40px] bg-[#FCE594]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s2")}
                >
                  Custom Design
                </h3>
              </div>
              <div className="basis-1/3 rounded-tr-[24px] md:rounded-tr-[32px] xl:rounded-tr-[40px] relative bg-[#FCE594]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s3")}
                >
                  More Templates
                </h3>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-center lg:flex-row md:gap-6 xl:gap-10 rounded-tl-[24px] rounded-b-[24px] sm:rounded-tl-[32px] md:rounded-b-[32px] xl:rounded-tl-[40px] xl:rounded-b-[40px] pl-0 pr-0 pt-5 md:pl-10 md:pr-8 md:pt-8 xl:pr-10 xl:pt-10 lg:h-[536px] xl:h-[620px] bg-[#FCE594]">
              <div className="sm:basis-[55%]">
                <div className="relative flex justify-center h-full">
                  <img
                    src="/images/nutrionalist.png"
                    className="object-scale-down object-bottom"
                    alt="nutrition1"
                  />
                  <div className="absolute lg:left-0 bottom-10">
                    <div className="flex">
                      <p className="text-sm sm:text-lg lg:text-base xl:text-lg font-medium bg-white rounded-t-xl lg:rounded-t-2xl px-3 py-1 sm:py-2 w-fit">
                        #Developer
                      </p>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <h3 className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-tr-2xl lg:rounded-tr-[32px] px-3 sm:p-3 pr-8 lg:pr-10 xl:pr-8 w-fit">
                        Need more
                      </h3>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-[35px] md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-b-2xl rounded-tr-2xl lg:rounded-b-3xl sm:rounded-tr-3xl px-3 p-2 lg:p-3 w-fit">
                      features for your app?
                    </div>
                  </div>
                  <img
                    src="/svg/arrow-orange.svg"
                    className="w-32 absolute bottom-28 right-0 h-fit max-sm:hidden"
                    alt="orange=arrow"
                  />
                </div>
              </div>
              <div className="sm:basis-[45%] flex items-center justify-center">
                <div className="bg-white rounded-3xl max-md:m-4 p-5 sm:p-8 sm:mb-10 lg:p-5 xl:p-8 xl:mb-10 w-full xl:h-[526px]">
                  <div className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-3xl mb-5 sm:mb-5 lg:mb-4 xl:mb-5">
                    Get more features for your App.
                  </div>
                  <div className="sm:text-lg">
                    <p>We have more features for your Application.</p>
                    <p>which include:</p>
                    <ul className="list-disc pl-4 pt-4">
                      <li>In App Purchase - For More Revenue</li>
                      <li>In App Games - For User Retension</li>
                      <li>In App Notification - For Offers & Discount</li>
                      <li>In App Rating - Get More 5 Stars</li>
                      <li>In App Chats - Group Chat inside app</li>
                      <li>Banner Ads - For More Revenue</li>
                      <li>Custom Features also applicable</li>
                    </ul>
                    <div className="mt-8">
                      <a className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 2xl:px-16 2xl:py-4">
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : section === "s2" ? (
          <section>
            <div className="flex">
              <div className="basis-1/3 relative bg-[#ADD180] rounded-t-[24px] sm:rounded-t-[32px] xl:rounded-t-[40px]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s1")}
                >
                  Premium Features
                </h3>
              </div>
              <div className="basis-1/3 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setSection("s2")}
                >
                  Custom Design
                </h3>
                <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#ADD180]"></div>
                <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_#ADD180]"></div>
              </div>
              <div className="basis-1/3 bg-[#ADD180] rounded-t-[24px] sm:rounded-t-[32px] xl:rounded-t-[40px] relative">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s3")}
                >
                  More Templates
                </h3>
              </div>
            </div>
            <div className="lg:h-[536px] xl:h-[620px] flex flex-col-reverse lg:flex-row gap-10 bg-[#ADD180] rounded-b-[24px] sm:rounded-b-[40px] pl-0 pr-0 pt-5 sm:pl-10 sm:pr-10 sm:pt-10">
              <div className="sm:basis-[55%]">
                <div className="relative flex justify-center h-full">
                  <img
                    src="/images/nutrition-2.png"
                    className="object-scale-down object-bottom"
                    alt="nutition2"
                  />
                  <div className="absolute lg:left-0 bottom-10">
                    <div className="flex">
                      <p className="text-sm sm:text-lg lg:text-base xl:text-lg font-medium bg-white rounded-t-xl lg:rounded-t-2xl px-3 py-1 sm:py-2 w-fit">
                        #Developer
                      </p>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <h3 className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-tr-2xl lg:rounded-tr-[32px] px-3 sm:p-3 pr-8 lg:pr-10 xl:pr-8 w-fit">
                        Need Custom
                      </h3>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-[35px] md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-b-2xl rounded-tr-2xl lg:rounded-b-3xl sm:rounded-tr-3xl px-3 p-2 lg:p-3 w-fit">
                      Design for your app?
                    </div>
                  </div>
                  <img
                    src="/svg/arrow-orange.svg"
                    className="w-32 absolute bottom-28 right-0 h-fit max-sm:hidden"
                    alt="arrow-orange"
                  />
                </div>
              </div>
              <div className="sm:basis-[45%] flex items-center justify-center">
                <div className="bg-white rounded-3xl max-sm:m-4 p-5 sm:p-8 sm:mb-10 lg:p-5 xl:p-8 xl:mb-10 w-full xl:h-[526px]">
                  <div className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-3xl mb-5 sm:mb-5 lg:mb-4 xl:mb-5">
                    Customise with Premium Design
                  </div>
                  <div className="sm:text-lg">
                    <p>We have more Designs for your Application.</p>
                    <p>which include:</p>
                    <ul className="list-disc pl-4 pt-4">
                      <li>Splash Screen - Unique UI</li>
                      <li>Custom Screenshots - Attract More Users</li>
                      <li>ASO handled by Us- Rank First in PlayStore</li>
                      <li>Full Reskin - Looks Premium</li>
                      <li>Premium Design - Loved by Customers</li>
                      <li>Custom Design also applicable</li>
                    </ul>
                    <div className="mt-8">
                      <a className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 2xl:px-16 2xl:py-4">
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="flex">
              <div className="basis-1/3 relative bg-[#FFF1E7] rounded-tl-[24px] sm:rounded-tl-[32px] xl:rounded-tl-[40px]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s1")}
                >
                  Premium Features
                </h3>
              </div>
              <div className="basis-1/3 relative bg-[#FFF1E7] rounded-tr-[24px] sm:rounded-tr-[32px] xl:rounded-tr-[40px]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setSection("s2")}
                >
                  Custom Design
                </h3>
              </div>
              <div className="basis-1/3 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setSection("s3")}
                >
                  More Templates
                </h3>
                <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7]"></div>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-10 bg-[#FFF1E7] rounded-tr-[24px] rounded-b-[24px] sm:rounded-tr-[40px] sm:rounded-b-[40px] px-4 pt-5 sm:px-10 sm:pt-10 lg:h-[536px] xl:h-[620px]">
              <div className="sm:basis-[55%]">
                <div className="relative flex justify-center h-full">
                  <img
                    src="/images/nutrition-2.png"
                    className="object-scale-down object-bottom"
                    alt="nutrition3"
                  />
                  <div className="absolute lg:left-0 bottom-10">
                    <div className="flex">
                      <p className="text-sm sm:text-lg lg:text-base xl:text-lg font-medium bg-white rounded-t-xl lg:rounded-t-2xl px-3 py-1 sm:py-2 w-fit">
                        #Developer
                      </p>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <h3 className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-tr-2xl lg:rounded-tr-[32px] px-3 sm:p-3 pr-8 lg:pr-10 xl:pr-8 w-fit">
                        Get More
                      </h3>
                      <div className="relative w-10">
                        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white]"></div>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-[35px] md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-white rounded-b-2xl rounded-tr-2xl lg:rounded-b-3xl sm:rounded-tr-3xl px-3 p-2 lg:p-3 w-fit">
                      Premium App Templates?
                    </div>
                  </div>
                  <img
                    src="/svg/arrow-orange.svg"
                    className="w-32 absolute bottom-28 right-0 h-fit max-sm:hidden"
                    alt="arrow-orange"
                  />
                </div>
              </div>
              <div className="sm:basis-[45%] flex items-center justify-center">
                <div className="bg-white rounded-3xl p-5 sm:p-8 sm:mb-10 lg:p-5 xl:p-8 xl:mb-10 w-full xl:h-[526px]">
                  <div className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-3xl mb-5 sm:mb-5 lg:mb-4 xl:mb-5">
                    Make More Apps and Publish.
                  </div>
                  <div className="sm:text-lg">
                    <p>We have more Templates for your Play Console.</p>
                    <p>Make More Apps and Publish Them in PlayStore.</p>
                    <p>Earn More Revenue from Ads.</p>
                    <ul className="list-disc pl-4 pt-4">
                      <li>Whatsapp Sticker Maker and Status Apps</li>
                      <li>Dating and Chat Apps</li>
                      <li>Photo Editor and Video Editor Apps</li>
                      <li>Wallpaper and Image Gallery App.</li>
                      <li>100 Games in One App.</li>
                      <li>Custom Apps also available.</li>
                    </ul>
                    <div className="mt-8">
                      <a className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 2xl:px-16 2xl:py-4">
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Features;
