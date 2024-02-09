import Image from "next/image";
import { useState } from "react";

const Publish = () => {
  const [tab, setTab] = useState("andriod");
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            Publish App
          </div>
          <p className="text-sm sm:text-lg xl:text-xl">
            06/02/2024,
            <span className="font-semibold">18:26 ⏰</span>
          </p>
        </div>
        {tab === "andriod" ? (
          <section>
            <div className="flex">
              <div className="basis-1/2 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setTab("andriod")}
                >
                  Andriod
                </h3>
                <div
                  className={`absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_#FCE594]`}
                ></div>
              </div>
              <div className="basis-1/2 relative rounded-t-[24px] md:rounded-t-[32px] xl:rounded-t-[40px] bg-[#FCE594]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#212121] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setTab("ios")}
                >
                  IOS
                </h3>
              </div>
            </div>
            <div className="bg-[#FCE594] rounded-tl-[24px]  sm:rounded-tl-[32px] rounded-b-[24px]  sm:rounded-b-[32px]  p-4 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
                <div className="basis-1/2">{/* to do */}</div>

                <div className="basis-1/2 flex justify-center items-center">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex justify-center items-center bg-white dark:bg-gray-800">
                      <Image
                        src="/svg/play.svg"
                        width={156}
                        height={156}
                        alt="playstore"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="flex">
              <div className="basis-1/2 relative bg-[#E0F2FF] rounded-t-[24px] sm:rounded-t-[32px] xl:rounded-t-[40px]">
                <h3
                  className="cursor-pointer text-[10px] sm:text-sm md:text-lg xl:text-2xl text-[#4983AB] opacity-60 text-center font-medium py-2 sm:py-4"
                  onClick={() => setTab("andriod")}
                >
                  Andriod
                </h3>
              </div>
              <div className="basis-1/2 relative">
                <h3
                  className="text-[10px] sm:text-sm md:text-lg xl:text-2xl text-center font-semibold py-2 sm:py-4"
                  onClick={() => setTab("ios")}
                >
                  IOS
                </h3>
                <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#E0F2FF]"></div>
              </div>
            </div>
            <div className="bg-[#E0F2FF] rounded-b-[24px]  sm:rounded-b-[32px]  p-4 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:space-x-6 max-lg:space-y-6">
                <div className="basis-1/2">{/* <div>To do</div> */}</div>

                <div className="basis-1/2 flex justify-center items-center">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex justify-center items-center bg-white dark:bg-gray-800">
                      <Image
                        src="/svg/apps.svg"
                        width={156}
                        height={156}
                        alt="playstore"
                      />
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

export default Publish;
