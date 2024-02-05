import Image from "next/image";

const Banner = () => {
  return (
    <main>
      <div class="h-[calc(100vh-150px)] min-h-[580px] xl:min-h-[550px] max-h-[812px] bg-[#FFF1E7] bg-no-repeat bg-cover bg-right-bottom sm:bg-[0_center] lg:bg-right rounded-3xl lg:rounded-[40px] px-4 sm:px-10 lg:px-16 sm:py-4 max-sm:mx-4">
        <div class="h-full flex flex-col lg:flex-row">
          <div class="px-6 pt-10 sm:p-10 lg:basis-[55%]">
            <div class="lg:h-full flex flex-col">
              <div class="lg:h-1/2 flex">
                <div>
                  <h1 class="text-3xl sm:text-5xl lg:text-5xl 2xl:text-6xl 2xl:!leading-[72px] text-[#FE5000] text-start font-bold mb-2 2xl:mb-4">
                    Convert Website to App
                    <span class="text-black block">in 10 MINUTES</span>
                  </h1>
                  <h2 class="lg:text-lg 2xl:text-xl mb-6 2xl:mb-8">
                    Are you looking to convert Shopify, WooCommerce,
                    BigCommerce, Squarespace, Dukaan, Wix, or ANY other website
                    into native Android and iOS apps?
                  </h2>
                </div>
              </div>
              <div className="lg:h-1/2">
                <div class="relative">
                  <input
                    v-bind="field"
                    type="text"
                    class="w-full text-xs sm:text-base lg:text-sm xl:text-base bg-transparent border-2 border-black focus:ring-0 focus:border-black rounded-lg sm:rounded-xl p-2 sm:p-3"
                    placeholder="Enter Your Website Address"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-8 mt-8">
                  <a
                    href="#discover"
                    class="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
                  >
                    Convert Now
                  </a>
                  <div class="flex items-center">
                    <div class="flex -space-x-4">
                      <Image
                        class="w-12 h-12 border-2 border-white rounded-full bg-[#FCE594]"
                        src="/images/avatar1.png"
                        alt="avatar1"
                        width={48}
                        height={48}
                      />
                      <Image
                        class="w-12 h-12 border-2 border-white rounded-full bg-[#A6DBE8]"
                        src="/images/avatar2.png"
                        alt="avatar2"
                        width={48}
                        height={48}
                      />
                      <Image
                        class="w-12 h-12 border-2 border-white rounded-full bg-[#FE5000]"
                        src="/images/avatar3.png"
                        alt="avatar3"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div class="ml-4">
                      <p class="font-semibold text-lg">+ 20.000</p>
                      <p class="text-sm">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:basis-[45%] lg:flex h-full relative">
            <div className="pt-20">
              <Image
                src="/images/screenshot.png"
                width={512}
                height={256}
                alt="banner-main"
                className="w-full"
              />
              <p className="text-4xl font-semibold text-center leading-snug">
                Make your dream App for{" "}
                <span className="block text-[#FE5000]">Andriod & Ios</span>
              </p>
            </div>
            <div class="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-16 lg:right-16 flex justify-center gap-2 sm:gap-4 lg:gap-6">
              <a href="#" target="_blank">
                <Image
                  src="/svg/google-play.svg"
                  width={120}
                  height={56}
                  alt="goole-play"
                  className="w-36 sm:w-44 lg:w-32 xl:w-fit"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src="/svg/app-store.svg"
                  width={120}
                  height={56}
                  alt="goole-play"
                  className="w-36 sm:w-44 lg:w-32 xl:w-fit"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
