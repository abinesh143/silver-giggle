'use client'

import Image from "next/image"
import StickerJson from "../../../json/stickerList.json"
import { useParams } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import axios from "axios"
import SmileyAIBottomNav from "../../../components/Common/BottomNav"
import SmileyAINavbar from "../../../components/Common/SmileyAINav"
import { initFlowbite } from "flowbite"
import { toastProvider } from "@/helpers/utils";
import Head from "next/head"

const newLine = "\n";
const shareText = encodeURIComponent(
    `Hai Friend,${newLine}*${"Here is my Cartoon Gif"
    }*${newLine}${'click below and vote me'}${newLine}${newLine}https://www.freeappmaker.pro/cartoon`
);

const IndividualStickerPacks = () => {
    const params = useParams()

    const [stickerIndex, setStickerIndex] = useState('06220010836921')
    const [sticker, setSticker] = useState('')
    const [appError, setAppError] = useState("");
    const [appIcon, setAppIcon] = useState(null);
    const [btnLoading, setBtnLoading] = useState(false);
    const [avatar, setAvatar] = useState([])
    const [selectedAvatar, setSelectedAvatar] = useState(null)
    const [animatedSticker, setAnimatedSticker] = useState([])
    const [convertedGif, setConvertedGif] = useState(null)
    const [fileName, setFileName] = useState("");

    const postTemplateImage = async (ava) => {
        setBtnLoading(true);
        if (!ava?.AvatarId) {
            setBtnLoading(false);
            return toastProvider("error", "Please Upload an Photo");
        }
        const data = {
            "AvatarID": ava.AvatarId,
            "TemplateID": params.sticker,
            "BackgroundLayer": true
        }
        const response = await fetch('/api/gif', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        if (response.status === 200) {
            const myData = await response.json()
            console.log(myData, myData.data, myData.data.Result)
            if (myData && myData.data && myData.data.Result) {
                setAnimatedSticker(myData.data.Result)
                setConvertedGif(myData.data.Result)
                if (myData.data.Result?.PreviewUrl) {
                    saveFileName(myData.data.Result?.PreviewUrl)
                }
                toastProvider("success", "Sticker Made Successfully")
            }
        }
        setBtnLoading(false);
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 5000000) {
                toastProvider("error", "Image File should be less than 5 Mb");
            } else if (!/\.jpg$|\.png$/i.test(file.name)) {
                toastProvider("error", "Image Format sholud be .jpg or .png, Try Another Picture");
            } else {
                setAppIcon(file);
            }
        } else {
            toastProvider("error", "Image Upload Failed. Please try again..");
        }
    };

    const postAvatar = async () => {
        if (appIcon) {
            const data = new FormData();
            data.append("photo", appIcon);
            data.append("createIcon", true);

            const headers = {
                "Content-Type": "multipart/form-data",
            }

            setBtnLoading(true);
            axios
                .post("https://gamead.netlify.app/api/avatar", data, { headers })
                .then(async (response) => {
                    if (response.status === 200) {
                        if (response.data.Result) {
                            setAvatar(prev => [...prev, response.data.Result])
                            setSelectedAvatar(response.data.Result)
                            localStorage.setItem("smileyai", JSON.stringify({ avatar: [...avatar, response.data.Result] }));
                            await postTemplateImage(response.data.Result)
                        } else {
                            toastProvider("error", "Image Format sholud be .jpg or .png, Unsupported File");
                        }
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toastProvider("error", "Image Uploading Failed.. Please try again");
                })
                .finally(() => {
                    setBtnLoading(false);
                });
        } else {
            postTemplateImage(selectedAvatar)
        }
    };

    const downloadGif = async () => {
        const url = convertedGif.PreviewUrl
        const fileName = "smileyAI.gif";

        try {
            const response = await axios.get(url, {
                responseType: 'blob',
            });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(response.data);
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    const saveFileName = (url) => {
        const extractedFileName = url.substring(url.lastIndexOf('/') + 1);
        setFileName(extractedFileName);
    };

    const handleCopyText = (shareText) => {
        const decodedText = decodeURIComponent(shareText);
        navigator.clipboard.writeText(decodedText)
            .then(() => {
                toastProvider("success", "Text copied to clipboard!");
            })
            .catch((err) => {
                toastProvider("error", "Failed to copy text");
            });
    };

    useEffect(() => {
        if (params?.sticker) {
            setStickerIndex(params.sticker)
            const imageIndex = StickerJson.findIndex((s) => s.id === params.sticker)
            if (imageIndex > -1) {
                setSticker(StickerJson[imageIndex])
            }
        }
    }, [params])

    useEffect(() => {
        const data = localStorage.getItem("smileyai");
        const smileyAI = data ? JSON.parse(data) : null;
        if (smileyAI && smileyAI.avatar) {
            setAvatar(smileyAI.avatar)
            if (smileyAI.avatar.length) {
                setSelectedAvatar(smileyAI.avatar[0])
            }
            if (smileyAI.gif?.length) {
                setAnimatedSticker([...smileyAI.gif])
            }
        }
        initFlowbite()
    }, [])

    return <main >
        <Head>
            <title>Smiley AI - Photo to cartoon GIF maker</title>
            <meta
                name="description"
                content="Create caricature from photo, Telegram sticker maker from photo, Personalized caricature stickers, Cartoonize your photos for GIFs, Make cartoon animations for chat"
                key="desc"
            />
        </Head>
        <SmileyAINavbar title="- Cartoon" />
        <div className="container sm:mx-auto px-4 sm:px-8 sm:py-4 max-lg:mb-10 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Image src={convertedGif?.PreviewUrl ? convertedGif.PreviewUrl : sticker?.imageUrl || '/sticker/template-1.gif'} width={200} height={200} alt="photo-sticker" className="w-full h-full rounded-lg" />
                </div>
                <div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload Your Photo</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" onChange={handleFileUpload} />
                        <p className="mt-1 text-xs text-gray-500" id="file_input_help">PNG, JPG only accecpted.</p>
                    </div>
                    <div className="flex overflow-x-auto gap-4 mt-4">
                        {
                            avatar?.length ? avatar?.map((ava, index) => <div key={`avatar-${index}`} className={`flex justify-center items-center w-20 h-20 rounded-lg shadow ${selectedAvatar?.AvatarId === ava?.AvatarId ? 'bg-green-500' : 'bg-gray-50'}`} onClick={() => setSelectedAvatar(ava)}>
                                <Image src={ava?.AvatarIconUrl} width={72} height={72} alt="avatar" className="rounded-lg w-[72p h-[72px]" />
                            </div>) : null
                        }
                    </div>
                    {
                        avatar?.length ? <div className="text-xs mt-1">Select Your Face Above</div> : null
                    }
                    <div className="flex flex-col items-center justify-center gap-4 mt-4">
                        <button
                            data-modal-target="sticker-instruction-modal" data-modal-toggle="sticker-instruction-modal"
                            disabled={btnLoading}
                            className="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                        >
                            {btnLoading ? (
                                <Image
                                    src="/svg/spin.svg"
                                    width={24}
                                    height={24}
                                    alt="spin"
                                    className="inline w-4 h-4 me-3 text-white animate-spin"
                                />
                            ) : null}  Convert Now
                        </button>
                        {
                            convertedGif ? <button
                                className="bg-green-500 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                                onClick={downloadGif}
                            >
                                Download
                            </button> : null
                        }
                        {
                            (convertedGif && fileName) ? <div className="flex flex-col lg:flex-row gap-4 w-full">
                                <a
                                    href={`https://wa.me/?text=${shareText}?gif=${fileName}`}
                                    target="_blank"
                                    className="bg-purple-700 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                                >
                                    Share on Whatsapp
                                </a>
                                <button
                                    className="bg-yellow-400 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                                    onClick={() => handleCopyText(`${shareText}?gif=${fileName}`)}
                                >
                                    Copy Gif Link
                                </button>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
        <SmileyAIBottomNav />
        <div id="sticker-instruction-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow border border-orange-500">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Sticker Instruction
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="sticker-instruction-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <div className="flex flex-col gap-4">
                            <Image src='/sticker/sticker-instruct.webp' width={100} height={100} alt="instruct" className="w-full" />
                            <button type="submit" className="w-full text-white bg-[#FE5000] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="sticker-instruction-modal" onClick={postAvatar}>Confirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
}
export default IndividualStickerPacks