import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <main>
      <div className="mt-10 md:mt-20 sm:pb-8">
        <div className="px-4 sm:px-10 lg:px-16 mb-10 md:mb-20">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-2 md:mb-6">
            About Us
          </h1>
          <div className="lg:text-lg 2xl:text-xl text-center font-medium px-0 sm:px-5 md:px-10 lg:px-20 xl:px-48">
            Artificial Intelligence is the Future
          </div>
        </div>
        <div className="sm:bg-[url('/images/meal-bg.png')] bg-no-repeat pb-16 sm:pb-32 px-4 sm:px-10 lg:px-16">
          <div className="flex ">
            <div className=" bg-[#9FFF9D] relative rounded-t-[24px] sm:rounded-t-[32px] px-4 sm:px-8 lg:px-6 xl:px-8">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] w-7 h-7  before:shadow-[0_0_0_40px_#9FFF9D]"></div>
              <div className="sm:text-lg xl:text-xl font-semibold py-4">
                App Maker Pro AI
              </div>
            </div>
          </div>
          <div className="rounded-b-[24px] bg-[#9FFF9D] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px]">
            <div className="flex text-xs  sm:text-base 2xl:text-xl min-h-[560px] max-h-[560px] sm:min-h-[680px] sm:max-h-[680px] md:min-h-[572px] md:max-h-[572px] xl:min-h-[512px] xl:max-h-[512px] text-ellipsis overflow-hidden ...">
              <div className="lg:basis-[60%] xl:basis-[70%] px-4 sm:px-8 lg:px-6 xl:px-8 pt-4 sm:pt-8 lg:pt-6 xl:pt-8 lg:pb-20 max-lg:text-justify relative">
                <div>
                  <p className="max-lg:pb-12 text-sm sm:text-xl">
                    <span className="font-semibold">
                      Trusted App Maker for 7+ years by 780 hundred thousand
                      developers. App Maker Pro AI is made to allow everybody is
                      an App owner.
                    </span>
                    Mobile apps are the future that has already reached us. More
                    and more people across the planet choose to use mobile
                    devices over any type of computer. This trend is only going
                    to continue as mobile technology continues to grow. App
                    Maker Pro AI is created to be a path for thousands to reach
                    Android mobile device users across the world. The mobile app
                    market is going to be worth as much as $188 billion in 2024.
                    No-code” tools are software development platforms that allow
                    even non-technical users to build and deploy their own
                    applications without writing a single line of code. These
                    tools often feature a simple user interface with
                    drag-and-drop features, letting you easily visualize the
                    development process and define the underlying business
                    logic.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 lg:left-40 h-12 sm:h-14 lg:rounded-t-[32px] bg-white flex px-4 sm:px-8 items-center max-sm:rounded-tr-[24px] max-lg:rounded-tr-[32px]">
                  <span className="font-semibold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-black">
                    Our Features
                  </span>
                  <div className="absolute -right-7 sm:-right-8 bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-7 h-7 sm:w-8 sm:h-8"></div>
                  <div className="absolute -left-8 bottom-0 overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_white] w-8 h-8 max-lg:hidden"></div>
                  <div className="absolute left-0 -top-8 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-8 h-8 lg:hidden"></div>
                </div>
              </div>
              <div className="lg:basis-[40%] xl:basis-[30%] w-full max-lg:hidden"></div>
            </div>
          </div>
          <div className="ml-4 sm:ml-8 lg:ml-48">
            <h2 className="font-semibold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl sm:my-2">
              can attract you in ,
            </h2>
            <h2 className="font-semibold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl my-2 sm:my-4">
              million of ways.
            </h2>
            <div className="lg:pr-32 text-xs sm:text-xl mt-8 mb-36 lg:mb-20">
              <ul className="list-disc pl-6">
                <li>
                  App Maker Pro AI App builder user interface is native and very
                  easy to use!
                </li>
                <li>
                  Building process takes just a glance of time. Quick and
                  reliable!
                </li>
                <li>
                  App Maker Pro AI brings new features and updates for you to
                  improve your Apps
                </li>
                <li>
                  With all the ways to monetize Apps, this is undoubtedly the
                  best place to build!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:px-8 lg:px-10 py-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
