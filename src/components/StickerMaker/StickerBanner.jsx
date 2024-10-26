import Image from "next/image";

const StickerBanner = () => {
    return (
        <main>
            <div className="min-h-[50vh] xl:min-h-[550px] bg-[#FFF1E7] bg-no-repeat bg-cover bg-right-bottom sm:bg-[0_center] lg:bg-right rounded-3xl lg:rounded-[40px] px-4 sm:px-8 sm:py-4 max-lg:my-4 mx-4 sm:mt-4">
                <div className="h-full flex flex-col lg:flex-row">
                    <div className="px-2 pt-4 lg:basis-[55%]">
                        <div className="lg:h-full flex flex-col">
                            <div>
                                <h1 className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl 2xl:!leading-[72px] text-[#FE5000] text-start font-bold mb-2 2xl:mb-4">
                                    Convert Photos in to
                                    <span className="text-black block">Animated Stickers</span>
                                </h1>
                                <h2 className="lg:text-lg 2xl:text-xl mb-6 2xl:mb-8">
                                    Are you looking to convert your photo in to Beautiful Animated Stickers, You are at the right Place
                                </h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between gap-4">
                            <Image src={'/sticker/banner1.webp'} width={20} height={20} alt="banner1" className="w-24 h-24" unoptimized />
                            <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                            </svg>
                            <Image src={'/sticker/banner2.webp'} width={20} height={20} alt="banner1" className="w-28 h-28" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StickerBanner;
