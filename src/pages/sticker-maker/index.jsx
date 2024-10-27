import Head from "next/head";
import StickerBanner from "../../components/StickerMaker/StickerBanner";
import StickerList from "../../components/StickerMaker/StickerList";
import SmileyAINavbar from "../../components/Common/SmileyAINav"
import SmileyAIBottomNav from "../../components/Common/BottomNav";

export default function StickerMakerAI() {
    return (
        <main>
            <Head>
                <title>Smiley AI - Convert Your Photos into Cartoon GIFs, Caricatures & Animated Stickers for WhatsApp & Telegram</title>
                <meta
                    name="description"
                    content="Transform your photos into fun cartoon GIFs, personalized caricatures, and animated stickers for WhatsApp, Telegram, and more. Create unique digital expressions for every occasion!"
                    key="desc"
                />
                <meta property="og:title" content="Smiley AI" />
                <meta
                    property="og:description"
                    content="Transform your photos into fun cartoon GIFs, personalized caricatures, and animated stickers for WhatsApp, Telegram, and more. Create unique digital expressions for every occasion!"
                />
                <meta property="og:site_name" content="Smiley AI" />
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
