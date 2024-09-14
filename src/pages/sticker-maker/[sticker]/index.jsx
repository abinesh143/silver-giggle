'use client'

import Image from "next/image"
import StickerJson from "../../../json/stickerList.json"
import StickerNavbar from "../../../components/StickerMaker/StickerNav"
import { useParams } from "next/navigation"
import { useLayoutEffect, useState } from "react"

const IndividualStickerPacks = () => {
    const params = useParams()
    const [stickerIndex, setStickerIndex] = useState(0)
    const stickers = StickerJson

    useLayoutEffect(() => {
        if (params?.sticker) {
            setStickerIndex(params.sticker)
        }
    },[params])

    return <main className="container sm:mx-auto py-4">
        <StickerNavbar />
        {/* Your Photo
        Arrow gif */}
        <div className="px-4 sm:px-8 sm:py-4 max-lg:my-4">
            <h4 className="text-xl font-semibold text-center mb-2.5">{stickers[stickerIndex]?.title || ""}</h4>
            <div>
                <Image src={stickers[stickerIndex]?.imageUrl || "/gif/animated.webp"} width={240} height={240} alt="photo-sticker" className="w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <button
                    className="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                >
                    Purchase at $5
                </button>
            </div>
        </div>
    </main>
}
export default IndividualStickerPacks