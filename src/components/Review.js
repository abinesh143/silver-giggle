import Image from "next/image";
import { useState } from "react";

const Review = () => {
  const [selectedReview, setSelectedReview] = useState(0);
  const userReviews = [
    {
      rating: "5",
      imageUrl: "/images/review2.jpeg",
      customerName: "Jessica Thomson",
      description:
        "Wow! convert my website into an app. The process was seamless, and the final product exceeded my expectations. Thank you for your excellent service!",
    },
    {
      rating: "5",
      imageUrl: "/images/review1.jpeg",
      customerName: "Abinesh",
      description:
        "App maker Pro AI is a very awesome and easy tool for making android apps free without coding I Recommend App maker Pro AI everyone",
    },
    {
      rating: "5",
      imageUrl: "/images/review3.jpeg",
      customerName: "Aishwarya Bala",
      description:
        "App maker Pro AI is awsome website to develop apps and its very easy to publish apps on google play store. Ultimate Services for starters who want to launch app. Great management. Every times App Maker's Support persons is there for helping us. Really we admire & recommended to all",
    },
    {
      rating: "5",
      imageUrl: "/images/review5.jpeg",
      customerName: "Sowmiya Abhy",
      description:
        "OGM! I can't believe my website is looking so much amazing in android application with the help App maker Pro AI. For making android apps my search ends here.",
    },
    {
      rating: "5",
      imageUrl: "/images/review4.jpeg",
      customerName: "Ansam Rahul",
      description:
        "Nice application. No Coding Skills Needed. App maker Pro AI provides the best platform to make awesome apps out their, The best thing it's that they provides a real experience of being a developer without knowing much coding. It's the best mobile app creation service, I sincerely recommend it... The real deal.",
    },
  ];
  return (
    <main>
      <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-10 mt-10 sm:mt-24">
        Reviews
      </h2>
      <div className="flex justify-center items-center mb-6 sm:mb-10">
        <div className="flex items-center">
          <div className="flex -space-x-4">
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-[#FCE594]"
              src="/images/avatar1.png"
              alt="avatar1"
              width={48}
              height={48}
            />
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-[#A6DBE8]"
              src="/images/avatar2.png"
              alt="avatar2"
              width={48}
              height={48}
            />
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-[#FE5000]"
              src="/images/avatar3.png"
              alt="avatar3"
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold text-lg">+ 20.000</p>
            <p className="text-sm">Clients</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 sm:gap-10 max-w-full overflow-x-auto [&::-webkit-scrollbar]:h-0 max-sm:px-4 sm:px-12 pb-4">
        {userReviews.map((testimonial, index) => {
          return (
            <div
              key={`testimonial-${index}`}
              className="flex flex-col xl:min-w-[20rem]"
              onMouseOver={() => setSelectedReview(index)}
            >
              <div className="flex">
                <div
                  className={`basis-1/6 ${
                    selectedReview == index
                      ? "bg-[#000000] text-white"
                      : "bg-[#B5B5B5] opacity-60"
                  }`}
                >
                  <div className="bg-white rounded-br-[16px] sm:rounded-br-[22px] flex justify-center p-2">
                    <Image
                      src="/svg/google.svg"
                      className="w-5 h-5 sm:w-8 sm:h-8"
                      width={32}
                      height={32}
                      alt="google"
                    />
                  </div>
                </div>
                <div
                  className={`basis-5/6 rounded-t-[16px] sm:rounded-t-[22px] flex justify-end sm:py-3 ${
                    selectedReview == index
                      ? "bg-[#000000] text-white"
                      : "bg-[#B5B5B5] opacity-60"
                  }`}
                >
                  <div className="flex items-center px-5">
                    <Image
                      src={
                        selectedReview == index
                          ? "/svg/star-orange.svg"
                          : "/svg/star.svg"
                      }
                      className="w-5 h-5"
                      width={20}
                      height={20}
                      alt="star"
                    />
                    <p className="ml-1 max-sm:text-sm">{testimonial.rating}</p>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col grow rounded-b-[16px] rounded-tl-[16px] sm:rounded-b-[28px] sm:rounded-tl-[22px] p-3 xl:p-6 w-56 sm:w-[266px] xl:w-fit ${
                  selectedReview == index
                    ? "bg-[#000000] text-white"
                    : "bg-[#B5B5B5] opacity-60"
                }`}
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Image
                    format="webp"
                    src={
                      testimonial.imageUrl
                        ? testimonial.imageUrl
                        : "/images/review.png"
                    }
                    className="rounded-full bg-yellow-500 w-12 h-12 sm:w-20 sm:h-20"
                    width={80}
                    height={80}
                    alt="user"
                  />
                </div>
                <div className="text-center text-sm sm:text-lg font-semibold">
                  {testimonial.customerName}
                </div>
                <div className="text-center leading-none p-2 sm:p-3 text-[10px] sm:text-xs lg:text-[11px] xl:text-xs">
                  {testimonial.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Review;
