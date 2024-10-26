import Head from "next/head";
import StickerBanner from "../../components/StickerMaker/StickerBanner";
import StickerList from "../../components/StickerMaker/StickerList";
import SmileyAINavbar from "../../components/Common/SmileyAINav"
import SmileyAIBottomNav from "../../components/Common/BottomNav";

export default function StickerMakerAI() {
    return (
        <main>
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
            <SmileyAINavbar title="" />
            <div className="container sm:mx-auto">
                <StickerBanner />
                <StickerList />
                <SmileyAIBottomNav />
            </div>
        </main>
    );
}
