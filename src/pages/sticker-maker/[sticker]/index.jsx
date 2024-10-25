'use client'

import Image from "next/image"
import StickerJson from "../../../json/stickerList.json"
import StickerNavbar from "../../../components/StickerMaker/StickerNav"
import { useParams } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import axios from "axios"

const IndividualStickerPacks = () => {
    const params = useParams()

    const [stickerIndex, setStickerIndex] = useState('06220010836921')
    const [sticker, setSticker] = useState('')
    const [appError, setAppError] = useState("");
    const [appIcon, setAppIcon] = useState(null);
    const [appPreview, setAppPreview] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);
    const [avatar, setAvatar] = useState([])
    const [selectedAvatar, setSelectedAvatar] = useState(null)
    const [animatedSticker, setAnimatedSticker] = useState([])
    const [convertedGif, setConvertedGif] = useState(null)

    const postTemplateImage = async (ava) => {
        setBtnLoading(true);
        if (!ava.AvatarId) {
            return setAppError("Please Upload an Photo");
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
            }
        }
        setBtnLoading(false);
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
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
                        setAvatar(prev => [...prev, response.data.Result])
                        setSelectedAvatar(response.data.Result)
                        localStorage.setItem("smileyai", JSON.stringify({ avatar: [...avatar, response.data.Result] }));
                        await postTemplateImage(response.data.Result)
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setAppError("Image Uploading Failed.. Please try again");
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

    useLayoutEffect(() => {
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
    }, [])

    return <main className="container sm:mx-auto py-4">
        <StickerNavbar />
        {/* Your Photo
        Arrow gif */}
        <div className="px-4 sm:px-8 sm:py-4 max-lg:my-4">
            <h4 className="text-xl font-semibold text-center mb-2.5">{sticker?.title || ""}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Image src={convertedGif?.PreviewUrl ? convertedGif.PreviewUrl : sticker?.imageUrl || '/sticker/template-1.gif'} width={240} height={240} alt="photo-sticker" className="w-full h-full rounded-lg" />
                </div>
                <div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload Your Photo</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" onChange={handleFileUpload} />
                        <p class="mt-1 text-sm text-gray-500" id="file_input_help">PNG, JPG only.</p>

                    </div>
                    <div className="flex overflow-x-auto gap-4 mt-4">
                        {
                            avatar?.map((ava, index) => <div key={`avatar-${index}`} className={`flex justify-center items-center w-20 h-20 rounded-lg shadow ${selectedAvatar.AvatarId === ava.AvatarId ? 'bg-green-500' : 'bg-gray-50'}`} onClick={() => setSelectedAvatar(ava)}>
                                <Image src={ava.AvatarIconUrl} width={72} height={72} alt="avatar" className="rounded-lg w-[72p h-[72px]" />
                            </div>)
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 mt-4">
                        <button
                            disabled={btnLoading}
                            className="bg-[#FE5000] text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={postAvatar}
                        >
                            Convert Now
                        </button>
                        {
                            convertedGif ? <button
                                className="bg-green-500 text-center text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80  focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4 max-lg:w-full"
                                onClick={downloadGif}
                            >
                                Download
                            </button> : null
                        }
                    </div>
                </div>
            </div>

        </div>
    </main>
}
export default IndividualStickerPacks