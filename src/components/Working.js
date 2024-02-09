/* eslint-disable @next/next/no-img-element */

const Working = () => {
  return (
    <main>
      <div className="mt-10 sm:mt-24 max-sm:px-4">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-16">
          How it Works?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 2xl:gap-20">
          <div>
            <div className="flex">
              <div className="basis-3/12 relative">
                <h3 className="text-center text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#FE5000] py-1 sm:py-2">
                  01
                </h3>
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-br-3xl before:shadow-[0_0_0_40px_#FFDCCC]"></div>
              </div>
              <div className="basis-9/12 bg-[#FFDCCC] rounded-t-xl sm:rounded-t-2xl"></div>
            </div>
            <div className="h-44 sm:h-64 2xl:h-72 bg-[#FFDCCC] rounded-b-xl rounded-tl-xl sm:rounded-b-2xl sm:rounded-tl-2xl relative">
              <img
                src="/svg/feature1.svg"
                className="absolute left-1/2 transform -translate-x-1/2 mt-8 max-sm:w-24"
                alt="feature1"
              />
              <h3 className="absolute bottom-4 sm:bottom-8 w-full text-sm sm:text-lg text-center">
                <div className="font-bold">Submit</div>
                <div className="max-sm:text-[11px]">
                  Submit your website URL
                </div>
              </h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="basis-3/12 relative">
                <h3 className="text-center text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#FE5000] py-1 sm:py-2">
                  02
                </h3>
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-br-3xl before:shadow-[0_0_0_40px_#FFDCCC]"></div>
              </div>
              <div className="basis-9/12 bg-[#FFDCCC] rounded-t-xl sm:rounded-t-2xl"></div>
            </div>
            <div className="h-44 sm:h-64 2xl:h-72 bg-[#FFDCCC] rounded-b-xl rounded-tl-xl sm:rounded-b-2xl sm:rounded-tl-2xl relative">
              <img
                src="/svg/feature2.svg"
                densities="1x"
                className="absolute left-1/2 transform -translate-x-1/2 mt-8 max-sm:w-24"
                alt="feature2"
              />
              <h3 className="absolute bottom-4 sm:bottom-8 w-full text-sm sm:text-lg text-center">
                <div className="font-bold">Personalize</div>
                <div className="max-sm:text-[11px]">
                  Edit your app with custom logos
                </div>
              </h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="basis-3/12 relative">
                <h3 className="text-center text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#FE5000] py-1 sm:py-2">
                  03
                </h3>
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-br-3xl before:shadow-[0_0_0_40px_#FFDCCC]"></div>
              </div>
              <div className="basis-9/12 bg-[#FFDCCC] rounded-t-xl sm:rounded-t-2xl"></div>
            </div>
            <div className="h-44 sm:h-64 2xl:h-72 bg-[#FFDCCC] rounded-b-xl rounded-tl-xl sm:rounded-b-2xl sm:rounded-tl-2xl relative">
              <img
                src="/svg/feature3.svg"
                className="absolute left-1/2 transform -translate-x-1/2 max-sm:w-24"
                alt="feature3"
              />
              <h3 className="absolute bottom-4 sm:bottom-8 w-full text-sm sm:text-lg text-center">
                <div className="font-bold">Build</div>
                <div className="max-sm:text-[11px]">
                  We deliver your app in 10 Minutes
                </div>
              </h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="basis-3/12 relative">
                <h3 className="text-center text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-[#FE5000] py-1 sm:py-2">
                  04
                </h3>
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2 sm:w-full overflow-hidden before:block before:h-full before:rounded-br-3xl before:shadow-[0_0_0_40px_#FFDCCC]"></div>
              </div>
              <div className="basis-9/12 bg-[#FFDCCC] rounded-t-xl sm:rounded-t-2xl"></div>
            </div>
            <div className="h-44 sm:h-64 2xl:h-72 bg-[#FFDCCC] rounded-b-xl rounded-tl-xl sm:rounded-b-2xl sm:rounded-tl-2xl relative">
              <img
                src="/svg/feature4.svg"
                densities="1x"
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 max-sm:w-24"
                alt="feature4"
              />
              <h3 className="absolute bottom-4 sm:bottom-8 w-full text-sm sm:text-lg text-center">
                <div className="font-bold">Publish</div>
                <div className="max-sm:text-[11px]">
                  Upload to App Store or Play Store
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Working;
