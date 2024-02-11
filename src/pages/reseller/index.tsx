import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Reseller = () => {
  return (
    <main>
      <div className="container sm:mx-auto py-4">
        <Navbar />
        <div className="mt-10 md:mt-24 px-4 ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4">
            Welcome Resellers and WhiteLabel Partners
          </h2>
          <div className="flex justify-center">
            <p className="text-lg text-center lg:w-3/4">
              Provide additional value to your clients by turning their website
              into an app. Ideal for web developers, marketing agencies and
              other service providers that are in close contact with their
              clients and their websites.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-20 mt-10 sm:mt-20 lg:mt-40">
            <div className="flex flex-col items-center gap-6 max-lg:order-2 max-lg:mt-10">
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
                Create apps with Free App Maker AI and resell them.
              </div>
              <p className="text-lg text-center">
                Create app with app maker AI. Just Pay 25$ Per App and Resell at
                your Own Cost.
              </p>
              <button className="bg-[#FE5000] w-fit text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3  2xl:px-16 2xl:py-4">
                Register Reseller for Free
              </button>
            </div>
            <div className="max-lg:order-1 flex justify-center">
              <Image src="/svg/resell.svg" width={512} height={512} alt="app" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-20 mt-20 lg:mt-60">
            <div className="flex justify-center">
              <Image
                src="/svg/white-label.svg"
                width={512}
                height={512}
                alt="app"
              />
            </div>
            <div className="flex flex-col items-center gap-6 max-lg:mt-10">
              <div className="text-2xl sm:text-3xl lg:text-5xl text-center font-bold">WhiteLabel Our Software.</div>
              <p className="text-lg text-center">
                We will create a clone of this software. Reskin with your Logo
                and Domains. LifeTime Access and Support.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">Price - 1000$ / One Time</p>
              <button className="bg-[#FE5000] w-fit text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4">
                Register WhiteLabelling
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-20 mt-20 lg:mt-60">
            <div className="flex flex-col gap-4 max-lg:order-2 max-sm:mt-10">
              <div className="text-2xl sm:text-3xl lg:text-5xl text-center font-bold">
                No coding knowledge required.
              </div>
              <p className="text-lg text-center">
                Easily create and publish apps for your clients. Even a Child
                can build an App
              </p>
            </div>
            <div className="max-lg:mt-10 max-lg:order-1 flex justify-center">
              <Image src="/svg/nocode.svg" width={512} height={512} alt="app" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-20 my-20 lg::my-60">
            <div className="flex justify-center">
              <Image src="/svg/earn.svg" width={512} height={512} alt="app" />
            </div>
            <div className="flex flex-col gap-4 max-lg:mt-10">
              <div className="text-2xl sm:text-3xl lg:text-5xl text-center font-bold">
                Earn Money - Take your first step to Success
              </div>
              <p className="text-lg text-center">
                Hey! This is a good opportunity to you. Use them wisely. Grow
                with us.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Reseller;
