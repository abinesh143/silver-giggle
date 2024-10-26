import Image from "next/image";

const StickerBanner = () => {
    return (
        <main>
            <div className="min-h-[50vh] xl:min-h-[550px] bg-[#FFF1E7] bg-no-repeat bg-cover bg-right-bottom sm:bg-[0_center] lg:bg-right rounded-3xl lg:rounded-[40px] px-4 sm:px-8 sm:py-4 max-lg:my-4 mx-4">
                <div className="h-full flex flex-col lg:flex-row">
                    <div className="px-2 pt-4 lg:basis-[55%]">
                        <div className="lg:h-full flex flex-col">
                            <div className="lg:h-1/2 flex">
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
                        </div>
                        {/* Place for Convert Sticker Image */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StickerBanner;
