import Image from "next/image";
import Link from "next/link";
import StickerJson from "../../json/stickerList.json"

const StickerList = () => {
    const stickers = StickerJson
    return <main className="px-4 sm:px-8 sm:py-4 max-lg:my-4 ">
        <h4 className="text-2xl font-semibold mb-4">Choose Template</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                stickers.map((s, index) => <div key={`sticker-${index}`} className="max-w-sm p-2.5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-center dark:text-white mb-2.5">{s.title}</h4>
                    <div>
                        <Image src={s.imageUrl} width={240} height={240} alt={'photo-sticker'} className="w-full h-full rounded-lg" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href={`sticker-maker/${s.id}`}
                            className="bg-[#FE5000] text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                        >
                            Convert Now
                        </Link>
                    </div>
                </div>)
            }
        </div>
    </main>
}

export default StickerList;