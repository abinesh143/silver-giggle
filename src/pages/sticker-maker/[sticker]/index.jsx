'use client'

import Image from "next/image"
import StickerJson from "../../../json/stickerList.json"
import StickerNavbar from "../../../components/StickerMaker/StickerNav"
import { useParams } from "next/navigation"
import { useLayoutEffect, useState } from "react"
import axios from "axios"

const IndividualStickerPacks = () => {
    const params = useParams()

    const [stickerIndex, setStickerIndex] = useState('06220010836921')
    const [sticker, setSticker] = useState('')
    const [appError, setAppError] = useState("");
    const [appIcon, setAppIcon] = useState(null);
    const [appPreview, setAppPreview] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file, 'file');
        if (file) {
            if (file.size > 5000000) {
                setAppError("Image File should be less than 5 Mb");
            } else if (file.type !== "image/jpeg" && file.type !== "image/png") {
                setAppError("Image Format sholud be .jpeg or .jpg or .png");
            } else {
                setAppIcon(file);
                setAppPreview(URL.createObjectURL(file));

            }
        } else {
            setAppError("Image Upload Failed. Please try again..");
        }
    };

    const postAvatar = async () => {
        console.log(appIcon);
        const data = new FormData();
        data.append("photo", appIcon);
        data.append("createIcon", true);

        const headers = {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "https://freeappmaker.pro"
        }

        setBtnLoading(true);
        axios
            .post("https://gamead.netlify.app/api/avatar", data, { headers })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.error(error);
                setAppError("Image Uploading Failed.. Please try again");
            })
            .finally(() => {
                setBtnLoading(false);
            });
    };



    useLayoutEffect(() => {
        if (params?.sticker) {
            setStickerIndex(params.sticker)
            const imageIndex = StickerJson.findIndex((s) => s.id === params.sticker)
            if (imageIndex > -1) {
                setSticker(StickerJson[imageIndex])
            }
        }
    }, [params])

    return <main className="container sm:mx-auto py-4">
        <StickerNavbar />
        {/* Your Photo
        Arrow gif */}
        <div className="px-4 sm:px-8 sm:py-4 max-lg:my-4">
            <h4 className="text-xl font-semibold text-center mb-2.5">{sticker?.title || ""}</h4>
            <div>
                <Image src={sticker?.imageUrl || "/sticker/template-1.gif"} width={240} height={240} alt="photo-sticker" className="w-full h-full rounded-lg" />
            </div>
            <div>

                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload Your Photo</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" onChange={handleFileUpload} />
                <p class="mt-1 text-sm text-gray-500" id="file_input_help">PNG, JPG only.</p>

            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <button
                    className="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                    onClick={postAvatar}
                >
                    Convert Now
                </button>
                <a
                    href="https://resource.mojipop.com/web-render/result/175257-0-500-0-f-70-06220010836921.gif"
                    download={true}
                    className="bg-green-500 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                >
                    Download
                </a>
            </div>
        </div>
    </main>
}
export default IndividualStickerPacks