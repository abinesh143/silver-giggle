import Image from "next/image";
import Link from "next/link";
import StickerJson from "../../json/stickerList.json"
import { useState } from "react";

const StickerList = () => {
    const stickers = StickerJson
    const [category, setCategory] = useState('girl')
    return <main className="px-4 sm:px-8 sm:py-4 max-lg:my-4 pb-16">
        <h4 className="text-2xl font-semibold mb-4">Choose Template</h4>
        <div class="w-full my-4">
            <div class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg" role="group">
                <button type="button" class={`px-5 py-1.5 text-xs font-medium rounded-lg ${category === 'boy' && 'text-white bg-gray-900'}`} onClick={() => setCategory('boy')}>
                    Boy
                </button>
                <button type="button" class={`px-5 py-1.5 text-xs font-medium rounded-lg ${category === 'girl' && 'text-white bg-gray-900'}`} onClick={() => setCategory('girl')}>
                    Girl
                </button>
                <button type="button" class={`px-5 py-1.5 text-xs font-medium rounded-lg ${category === 'couple' && 'text-white bg-gray-900'}`} onClick={() => setCategory('couple')}>
                    Couple
                </button>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {
                stickers.map((s, index) => <div key={`sticker-${index}`} className="max-w-sm p-2.5 bg-white border border-gray-200 rounded-lg shadow">
                    <h4 className="text-lg font-semibold text-center  mb-2.5">{s.title}</h4>
                    <div>
                        <Image src={s.imageUrl} width={240} height={240} alt={'photo-sticker'} className="w-full h-full rounded-lg" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href={`sticker-maker/${s.id}`}
                            className="bg-[#FE5000] text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none py-1.5 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
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