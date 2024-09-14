import Head from "next/head";
import StickerBanner from "../../components/StickerMaker/StickerBanner";
import StickerList from "../../components/StickerMaker/StickerList";
import Footer from "../../components/Footer"
import StickerNavbar from "../../components/StickerMaker/StickerNav";

export default function StickerMakerAI() {
    return (
        <main>
            <div className="container sm:mx-auto py-4">
                <Head>
                    <title>WASticker Maker AI</title>
                    <meta
                        name="description"
                        content="Turn your photos to sticker, quickly with no coding required."
                        key="desc"
                    />
                    <meta property="og:title" content="WASticker Maker AI" />
                    <meta
                        property="og:description"
                        content="Turn your photos to sticker, quickly with no coding required."
                    />
                    <meta property="og:site_name" content="WASticker Maker AI" />
                </Head>
                <StickerNavbar />
                <StickerBanner />
                <StickerList />
                <Footer />
            </div>
        </main>
    );
}
