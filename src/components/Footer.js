import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <main>
      <section>
        <div class="flex">
          <div class="basis-5/12 sm:basis-4/12 md:basis-3/12 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14%] bg-[#FFF1E7] rounded-t-[24px] sm:rounded-t-[40px] flex justify-center py-2.5 sm:py-5">
            <div class="text-start text-lg md:text-2xl">&nbsp;</div>
          </div>
          <div class="basis-5/6 relative">
            <div class="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_#FFF1E7]"></div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-6 xl:gap-10 bg-[#FFF1E7] rounded-b-[24px] rounded-tr-[24px] sm:rounded-b-[40px] sm:rounded-tr-[40px] p-4 sm:p-6 xl:p-8">
          <div class="basis-5/12 relative">
            <Image
              src="/svg/logo-footer.svg"
              class="absolute -top-12 h-20 sm:-top-16 sm:h-28 lg:-top-[72px] lg:h-36"
              width={144}
              height={144}
              alt="footer-logo"
            />
            <div class="text-lg sm:text-xl lg:text-lg xl:text-xl leading-none mt-16 sm:mt-28 lg:mt-32 mb-2">
              Get exclusive updates straight to your inbox.
            </div>
            <form>
              <div class="relative my-5">
                <input
                  v-bind="field"
                  type="text"
                  class="w-full text-xs sm:text-base lg:text-sm xl:text-base bg-transparent border-2 border-black focus:ring-0 focus:border-black rounded-lg sm:rounded-xl p-2 sm:p-3"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  class="absolute inset-y-0 right-0 flex items-center bg-black text-white hover:bg-opacity-80 focus:outline-none m-1 px-2 sm:px-3 rounded-lg sm:rounded-xl"
                >
                  <Image
                    src="/svg/arrow-right.svg"
                    width="24"
                    height="24"
                    alt="arrow"
                  />
                </button>
              </div>
            </form>
            <p class="max-md:hidden text-[8px] sm:text-xs lg:text-[10px] xl:text-xs">
              2023-2024 Fitlab Catering Services LLC. All rights reserved.
            </p>
          </div>
          <div class="basis-2/12 max-md:mt-5">
            <h2 class="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold mb-6">
              Links
            </h2>
            <ul class="text-xs sm:text-base lg:text-sm xl:text-base font-medium">
              <li class="mb-2">
                <Link href="/blogs">Blog</Link>
              </li>
              <li class="mb-2">
                <Link href="#discover">Calorie Calculator</Link>
              </li>
              <li class="mb-2">
                <Link href="#faq">FAQ&apos;s</Link>
              </li>
              <li class="mb-2">
                <Link href="/account/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div class="basis-2/12 max-md:mt-5">
            <h2 class="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold mb-6">
              Company
            </h2>
            <ul class="text-xs sm:text-base lg:text-sm xl:text-base font-medium">
              <li class="mb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li class="mb-2">
                <Link href="/content/terms-and-conditions">
                  Terms and Conditions
                </Link>
              </li>
              <li class="mb-2">
                <Link href="/content/privacy-policy">Privacy Policy</Link>
              </li>
              <li class="mb-2">
                <Link href="/content/refund-policy">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div class="basis-3/12 max-md:mt-5">
            <h2 class="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold mb-6">
              Stay in Touch
            </h2>
            <ul class="text-xs sm:text-base lg:text-sm xl:text-base font-medium">
              <li class="mb-2">
                <Link href="tel:+971522638788">+971 52 263 8788</Link>
              </li>
              <li class="mb-2">
                <Link href="mailto:info@fitlab-me.com">info@fitlab-me.com</Link>
              </li>
              <li class="leading-none mb-3">
                <Link href="#">
                  Office 301, Al Asmawi building, Dubai Investment Park 1, Dubai
                  - UAE
                </Link>
              </li>
              <li>
                <div class="flex gap-3">
                  <Link
                    href="/"
                    target="_blank"
                    class="flex items-center justify-center bg-[#3A3A3A] w-6 h-6 rounded-full p-1"
                  >
                    <Image
                      src="/svg/facebook.svg"
                      class="text-[#E3DEDC]"
                      width={24}
                      height={24}
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    class="flex items-center justify-center bg-[#3A3A3A] w-6 h-6 rounded-full p-1"
                  >
                    <Image
                      src="/svg/twitter.svg"
                      class="text-[#E3DEDC]"
                      width={24}
                      height={24}
                      alt="twitter"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    class="flex items-center justify-center bg-[#3A3A3A] w-6 h-6 rounded-full p-1"
                  >
                    <Image
                      src="/svg/instagram.svg"
                      class="text-[#E3DEDC]"
                      width={24}
                      height={24}
                      alt="insta"
                    />
                  </Link>
                </div>
              </li>
            </ul>
            <div class="flex md:flex-col xl:flex-row gap-2 mt-10">
              <div class="text-xs sm:text-base lg:text-sm xl:text-base">
                We Accept
              </div>
              <div class="flex gap-x-2">
                <Image src="/svg/visa.svg" alt="visa" width="44" height="44" />
                <Image
                  src="/svg/master.svg"
                  alt="visa"
                  width="44"
                  height="44"
                />
                <Image src="/svg/apple.svg" alt="visa" width="44" height="44" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
