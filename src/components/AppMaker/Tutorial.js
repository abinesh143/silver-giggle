import Image from "next/image";
import { currentTime } from "@/helpers/utils";

const videoJson = [
  {
    title: "1) How to Convert website to Mobile Application",
    description: "Watch the video carefully",
    videourl: "https://www.youtube.com/embed/g2SCzbdclFA?si=Iw6T9pT7QYqj2UAU",
  },
];

const TutorialVideo = () => {
  return (
    <main>
      <div className="p-4 sm:p-8 bg-[#F9F9F9] lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">
            {" "}
            Tutorial Video
          </div>
          {currentTime()}
        </div>
        <section>
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-[#FFF1E7] rounded-t-[24px] sm:rounded-t-[32px] relative px-4 sm:px-10">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7] w-12 h-12"></div>
              <div className="text-[#212121] text-xs sm:text-lg lg:text-lg font-semibold py-4">
                Tutorial Video
              </div>
            </div>
          </div>
          <div className="bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px] p-4 sm:p-10">
            <div className="grid gap-6 mb-6 md:grid-cols-1 bg-white p-8 rounded-[24px]">
              {videoJson.map((video, index) => (
                <div key={`video-${index}`}>
                  <div className="text-xl font-semibold mb-4">
                    {video.title}
                  </div>
                  <p className="text-gray-500 mb-4">{video.description}</p>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={video.videourl}
                      className="w-full lg:w-[800px] h-[400px] rounded-3xl"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TutorialVideo;
