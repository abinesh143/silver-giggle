'use client'
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const url = `https://resource.mojipop.com/web-render/result/`

const MyCartoonSticker = (props) => {
    const [data, setData] = useState('')
    const router = useRouter();

    useEffect(() => {
        if (router) {
            const { gif } = router.query;
            if (gif) {
                setData(gif)
            }
        }
    }, [router])
    return <main>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-4">
            <div className="max-w-sm p-2.5 bg-white border border-gray-200 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-center  mb-2.5">My Cartoon Gif</h4>
                <div>
                    <Image src={data ? `${url}${data}` : '/sticker/template-1.gif'} width={240} height={240} alt={'photo-sticker'} className="w-full h-full rounded-lg" />
                </div>
            </div>
            <Link
                href={'https://www.freeappmaker.pro/sticker-maker'}
                className="bg-yellow-400 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
            >
                Make your Gif
            </Link>
        </div>

    </main>
}

export default MyCartoonSticker