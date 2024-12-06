import { toastProvider } from "@/helpers/utils";

const shareQuestion1 = encodeURIComponent(
    `Select a ❤️ and I will give you a dare 😉\n\n❤️1 ❤️2 ❤️3 ❤️4 ❤️5 ❤️6 ❤️7 ❤️8 ❤️9 ❤️10`
);
const shareAnswer1 = encodeURIComponent(
    `1. Use my pic as your WhatsApp story for one day 😎\n\n` +
    `2. Purpose me 😍\n\n` +
    `3. Tell me your biggest secret 😱\n\n` +
    `4. Tell me the name of your crush ❤️\n\n` +
    `5. Write “getting married” in your WhatsApp status 👰👨‍💼\n\n` +
    `6. Send me your funniest pic 🤣\n\n` +
    `7. First thing you notice in me when you meet me first 🤗\n\n` +
    `8. Tell me the name of your BF/GF. 💑\n\n` +
    `9. What is your memorable day 😇\n\n` +
    `10. 50 rs. recharge on my number 🤑\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareQuestion2 = encodeURIComponent(
    `Select a number between 1-10. Then I will send you a dare that you will have to complete.`
);
const shareAnswer2 = encodeURIComponent(
    `1. Your relationship with me. 😇\n\n` +
    `2. Rate me as a friend from 5 to 10. 🤝\n\n` +
    `3. Write my name on your WhatsApp status for 24 hours. 📝\n\n` +
    `4. Tell me about your relationship status. 💑\n\n` +
    `5. Tell me your GF/BF name. 💖\n\n` +
    `6. Tell me your crush's name. ❤️\n\n` +
    `7. Send me a voice record and sing a song. 🎤\n\n` +
    `8. Chat with me for 30 minutes. 🕒\n\n` +
    `9. Make a collage of our pic and make it your DP. 🖼️\n\n` +
    `10. Recharge. (Rs 50) 🤑\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareQuestion3 = encodeURIComponent(
    `Select a triple number between 000, 111, 222 to 999 and I will tell you about your personality.`
);

const shareAnswer3 = encodeURIComponent(
    `000 – Lovely & Caring. ❤️\n\n` +
    `111 – Silent Killer. 😶\n\n` +
    `222 – Cheater. 😅\n\n` +
    `333 – Handsome. 😎\n\n` +
    `444 – True Lover. 💕\n\n` +
    `555 – Lazy In Bed. 🛌\n\n` +
    `666 – Addict. 🍻\n\n` +
    `777 – Proud And Sweet. 😇\n\n` +
    `888 – Hard Worker. 💪\n\n` +
    `999 – Proud And Sweet. 🌟\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareQuestion4 = encodeURIComponent(
    `Choose any one alphabet from A to Z. I will give you a dare to complete. Try it, it's going to be really interesting.`
);

const shareAnswer4 = encodeURIComponent(
    `A = Write my name on your story. 📝\n\n` +
    `B = Do a favor on me. 🤝\n\n` +
    `C = Give me a treat. 🍔\n\n` +
    `D = Send me your cutest pic. 📸\n\n` +
    `E = What would you want our relation to be? 💕\n\n` +
    `F = Send me your crush pic. 😍\n\n` +
    `G = What change would you want in me? 🔄\n\n` +
    `H = Send me your favorite chaddi (shorts) pic? 😂\n\n` +
    `I = Ask me out. 💌\n\n` +
    `K = Send me a pic of your hair. ✂️\n\n` +
    `L = What am I to you? 🤔\n\n` +
    `M = What favor do you want from me? 🙋\n\n` +
    `N = Call me now. 📞\n\n` +
    `O = Send me a voice clip saying “I Love You.” 🎙️\n\n` +
    `P = Delete my number. 😢\n\n` +
    `Q = Tell your deepest secret. 🤐\n\n` +
    `R = Write my name. 🖊️\n\n` +
    `S = Your wild fantasy. 🔥\n\n` +
    `T = Make a pic of us together and put it on your DP for one day. 🖼️\n\n` +
    `U = Tell me something you always wanted to say but couldn’t. 💭\n\n` +
    `V = Your feelings about me. ❤️\n\n` +
    `W = Your crush's name? 😘\n\n` +
    `X = What do you think should change in my attitude? 🌟\n\n` +
    `Y = Can I share it on my story? 🤔\n\n` +
    `Z = Your relationship status. 💑\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareQuestion5 = encodeURIComponent(
    `Let’s play the Naughty Emoji Game! Choose from one of these emojis and I'll give you a naughty dare: 🤤, 😇, 🤭, 😈, 💦, 🎆, ❤️, 🍑, 🍆, 👅, 🔥, 💥.`
);

const shareAnswer5 = encodeURIComponent(
    `1. 🤤 Seduce me with your words.\n\n` +
    `2. 😇 Playing it safe, are we? Answer this: what's the hottest fantasy you have?\n\n` +
    `3. 🤭 I'm curious, what do you like most about me?\n\n` +
    `4. 😈 Tell me, what’s your wildest sexual desire?\n\n` +
    `5. 💦 What’s your naughtiest secret?\n\n` +
    `6. 🎆 Kiss me the next time we meet.\n\n` +
    `7. 🍑 Bottoms up! Write my name on your WhatsApp status for 6 hours.\n\n` +
    `8. 🍆 Interesting choice, now tell me… How big is it / are they?\n\n` +
    `9. 👅 How do you feel about me?\n\n` +
    `10. 🔥 I will ask you three questions and you have to answer each honestly.\n\n` +
    `11. 💥 Call me and say, “I love you.”\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareQuestion6 = encodeURIComponent(
    `Which Character would you like to play in my life if you get a chance to be born again? Share your answer with me and ask the same question to others to get interesting answers. You can also ask the same question to me. If you want you can share the different answers you get on your story.`
);

const shareAnswer6 = encodeURIComponent(
    `1. Lover\n\n` +
    `2. Baby\n\n` +
    `3. Brother\n\n` +
    `4. Enemy\n\n` +
    `5. Sister\n\n` +
    `6. Best Friend\n\n` +
    `7. Father\n\n` +
    `8. Only Friend\n\n` +
    `9. Crush\n\n` +
    `10. Husband\n\n` +
    `11. Wife\n\n` +
    `12. Boyfriend\n\n` +
    `13. Girlfriend\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);


const shareQuestion7 = encodeURIComponent(
    `ith this next game predict your friend's future. So what is going to happen in 2025 will be decided when they choose the number between 1-15.`
);

const shareAnswer7 = encodeURIComponent(
    `1. Your ex will be back\n\n` +
    `2. You will meet your childhood love\n\n` +
    `3. Your best friend will ditch you\n\n` +
    `4. You will get your dream job\n\n` +
    `5. You will get a chance to work in a Bhojpuri song video\n\n` +
    `6. You will buy your dream car\n\n` +
    `7. You will get your love of life\n\n` +
    `8. You will get a new pet\n\n` +
    `9. People will get to know your top most secret\n\n` +
    `10. You will get a big surprise from your family\n\n` +
    `11. You will win a jackpot\n\n` +
    `12. You will get a hug from your enemy\n\n` +
    `13. You will have a foreign trip\n\n` +
    `14. You will get ditched by your GF/BF\n\n` +
    `15. You will get married\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);


const shareQuestion8 = encodeURIComponent(
    `Select a fruit and I will tell you what you will get in 2025\n\n` +
    `Apple 🍎\n\n` +
    `Watermelon 🍉\n\n` +
    `Mango 🍋\n\n` +
    `Orange 🍊\n\n` +
    `Banana 🍌\n\n` +
    `Guava 🍈\n\n` +
    `Grapes 🍇\n\n`
);


const shareAnswer8 = encodeURIComponent(
    `Apple : Love 💓\n\n` +
    `Watermelon : Happiness 😇\n\n` +
    `Mango : Money 💰\n\n` +
    `Orange : Engagement 💍\n\n` +
    `Banana : Marriage 👫\n\n` +
    `Guava : Friend 👭\n\n` +
    `Grapes : Romance 💑\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);


const shareQuestion9 = encodeURIComponent(
    `Select your favorite color and get ready for the dare.\n\n` +
    `Red\n\n` +
    `Blue\n\n` +
    `Green\n\n` +
    `Yellow\n\n` +
    `Purple\n\n` +
    `Black\n\n` +
    `White\n\n` +
    `Pink\n\n` +
    `Orange\n\n` +
    `Brown\n\n` +
    `Gray\n\n` +
    `Gold\n\n` +
    `Silver\n\n` +
    `Violet\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);

const shareAnswer9 = encodeURIComponent(
    `Red : Purpose me in the cutest way. 💏💏💏💏\n\n` +
    `Blue : Go for a long drive with me 👫👫👫\n\n` +
    `Green : Go for a date with me 💏💏💏\n\n` +
    `Yellow : Give me an ice cream treat. 🍨🍨🍨\n\n` +
    `Purple : Kiss me. 😚😚😚\n\n` +
    `Black : Send me your cutest picture. 💃💃💃\n\n` +
    `White : Pay for my shopping bills. 😅😅😅\n\n` +
    `Pink : Hug me whenever you meet.\n\n` +
    `Orange : Give me Cadbury silk. 🍫\n\n` +
    `Brown : Call me every morning. 🌻\n\n` +
    `Gray : Give me a big party when we meet next time 🍺\n\n` +
    `Gold : Plan a surprise for my birthday. 🍷\n\n` +
    `Silver : Present me my favorite dress. 🎁\n\n` +
    `Violet : Make a video call right now. 📱\n\n` +
    `More Dare Games : https://www.freeappmaker.pro/dares`
);


const DareContent = () => {

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
    return <main className="pb-16">
        <h2 className="text-2xl font-semibold capitalize text-center">Dare Messages</h2>
        {/* Dare 1 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 1:</h4>
            <div>Select a ❤️and I will give you a dare 😉<br />❤️1 ❤️2 ❤️3 ❤️4 ❤️5 ❤️6 ❤️7 ❤️8 ❤️9 ❤️10</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion1}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 1:</h4>
            <div>1. Use my pic as your WhatsApp story for one day 😎<br /><br />

                2. purpose me 😍<br /><br />

                3. Tell me your biggest secret 😱<br /><br />

                4. Tell me the name of your crush ❤️<br /><br />

                5. Write “getting married” in your WhatsApp status 👰👨‍💼<br /><br />

                6. Send me your funniest pic 🤣<br /><br />

                7. First thing you notice in me when you meet me first 🤗<br /><br />

                8. Tell me the name of your BF/GF. 💑<br /><br />

                9.  What is your memorable day 😇<br /><br />

                10.  50 rs. recharge on my number 🤑</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer1}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 2 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 2:</h4>
            <div>Select a number between 1-10. Then I will send you a dare that you will have to complete. </div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion2}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 2:</h4>
            <div>1. Your relationship with me.<br /><br />

                2. Rate me as a friend from 5 to 10.<br /><br />

                3. Write my name on your WhatsApp status for 24 hours.<br /><br />

                4. Tell me about your relationship status.<br /><br />

                5. Tell me your GF/BF name.<br /><br />

                6. Tell me your crushs name.<br /><br />

                7. Send me a voice record and sing a song.<br /><br />

                8. Chat with me for 30 minutes.<br /><br />

                9.  Make a collage of our pic and make your Dp.<br /><br />

                10.  Recharge. (Rs 50)</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer2}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 3 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 3:</h4>
            <div>Select a triple number between 000, 111, 222 to 999 and I will tell you about your personality.</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion3}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 3:</h4>
            <div>000 – Lovely & Caring.<br /><br />

                111 – Silent Killer<br /><br />

                222 – Cheater.<br /><br />

                333 – Handsome<br /><br />

                444 – True Lover.<br /><br />

                555 – Lazy In Bed.<br /><br />

                666 – Addict.<br /><br />

                777 – Proud And Sweet.<br /><br />

                888 – Hard Worker<br /><br />

                999 – Proud And Sweet.</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer3}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 4 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 4:</h4>
            <div>Choose any one alphabet from A to Z. I will give you a dare to complete. Try it, it's going to be really interesting. </div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion4}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 4:</h4>
            <div>A = Write my name on your story.<br /><br />

                B = Do a favor on me.<br /><br />

                C = Give me a treat.<br /><br />

                D = Send me your cutest pic.<br /><br />

                E = What would u want our relation to be?<br /><br />

                F = Send me your crush pic.<br /><br />

                G = What change would you want me?<br /><br />

                H = Send me your favorite chaddi (shorts) pic?<br /><br />

                I = Ask me out. <br /><br />

                K = Send me a pic of your hair. <br /><br />

                L = What I am to yours?  <br /><br />

                M = What favor do you want from me? <br /><br />

                N = Call me now. <br /><br />

                O = Voice clip sends me and asks “I Love You “ <br /><br />

                P = Delete my number. <br /><br />

                Q = Tell your deepest secret <br /><br />

                R = Write my name. <br /><br />

                S = Your wild fantasy. <br /><br />

                T = Make our one together pic and put it on your DP for one day. <br /><br />

                U = Tell me something that you always wanted to say but you couldn't…  <br /><br />

                V = Your felling about me. <br /><br />

                W = Your crush name? <br /><br />

                X = What think do you change in my attitude?  <br /><br />

                Y = Can I share it with my story? <br /><br />

                Z = Your relation status</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer4}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 5 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 5:</h4>
            <div>Let’s play the Naughty Emoji Game! Choose from one of these emojis and I'll give you a naughty dare: 🤤, 😇, 🤭, 😈, 💦, 🎆, ❤️, 🍑, 🍆, 👅, 🔥, 💥.</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion5}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 5:</h4>
            <div>1. 🤤 Seduce me with your words.<br /><br />

                2. 😇 Playing it safe, are we? Answer this: what's the hottest fantasy you have?<br /><br />

                3. 🤭 I'm curious, what do you like most about me?<br /><br />

                4. 😈 Tell me, what’s your wildest sexual desire?<br /><br />

                5. 💦 What’s your naughtiest secret?<br /><br />

                6. 🎆 Kiss me the next time we meet.<br /><br />

                7. 🍑 Bottoms up! Write my name on your WhatsApp status for 6 hours.<br /><br />

                8. 🍆 Interesting choice, now tell me… How big is it / are they?<br /><br />

                9.  👅 How do you feel about me? <br /><br />

                10. 🔥 I will ask you three questions and you have to answer each honestly. <br /><br />

                11. 💥 Call me and say, “I love you”.</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer5}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 6 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 6:</h4>
            <div>Which Character would you like to play in my life if you get a chance to be born again? Share your answer with me and ask the same question to others to get interesting answers. You can also ask the same question to me. If you want you can share the different answers you get on your story. </div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion6}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 6:</h4>
            <div>1. Lover<br /><br />

                2. Baby<br /><br />

                3. Brother<br /><br />

                4. Enemy<br /><br />

                5. Sister<br /><br />

                6. Best Friend<br /><br />

                7. Father<br /><br />

                8. Only Friend<br /><br />

                9.  Crush<br /><br />

                10.  Husband<br /><br />

                11.  Wife<br /><br />

                12.  Boyfriend<br /><br />

                13.  Girlfriend</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer6}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 7 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 7:</h4>
            <div>With this next game predict your friend's future. So what is going to happen in 2025 will be decided when they choose the number between 1-15.</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion7}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 7:</h4>
            <div>1. Your ex will be back<br /><br />

                2. You will meet your childhood love<br /><br />

                3. Your best friend will ditch you<br /><br />

                4. You will get your dream job<br /><br />

                5. You will get a chance to work in a Bhojpuri song video<br /><br />

                6. You will buy your dream car<br /><br />

                7. You will get your love of life<br /><br />

                8. You will get a new pet<br /><br />

                9.  People will get to know your top most secret<br /><br />

                10. You will get a big surprise from your family<br /><br />

                11. You will win a jackpot<br /><br />

                12. You will get a hug from your enemy<br /><br />

                13. You will have a foreign trip<br /><br />

                14.  You will get ditched by your GF/bf<br /><br />

                15.  You will get married</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer7}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 8 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 8:</h4>
            <div>Select a fruit and i will tell you what will you get in 2025</div><br />
            <div>Apple🍎<br /><br />

                Water Melon🍉<br /><br />

                Mango🍋<br /><br />

                Orange🍊<br /><br />

                Banana🍌<br /><br />

                Guava🍈<br /><br />

                Grapes🍇</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion8}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 8:</h4>
            <div>Apple : Love  💓<br /><br />

                water Melon : Happiness😇<br /><br />

                Mango :Money💰<br /><br />

                Orange : Engagement💍<br /><br />

                Banana : Marriage 👫<br /><br />

                Guava : Friend👭<br /><br />

                Grapes : Romance💑</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer8}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
        {/* Dare 9 */}
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question 9:</h4>
            <div>Select your favorite color and get ready for the dare.</div><br />
            <div>Red<br /><br />

                Blue<br /><br />

                Green<br /><br />

                Yellow<br /><br />

                Purple<br /><br />

                Black<br /><br />

                White<br /><br />

                Pink<br /><br />

                Orange<br /><br />

                Brown<br /><br />

                Gray<br /><br />

                Gold<br /><br />

                Silver<br /><br />

                Violet</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion9}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer 9:</h4>
            <div>Red : Purpose me in the cutest way.💏💏💏💏<br /><br />

                Blue : Go for a long drive with me 👫👫👫<br /><br />

                Green : Go for a date with me💏💏💏<br /><br />

                Yellow : Give me an ice cream treat.🍨🍨🍨<br /><br />

                Purple : Kiss me.😚😚😚<br /><br />

                Black : Send me your cutest picture.💃💃💃<br /><br />

                White : Pay for my shopping bills.😅😅😅<br /><br />

                Pink : Hug me whenever you meet.<br /><br />

                Orange : Give me cadbury silk.🍫<br /><br />

                Brown : Call me every morning.🌻<br /><br />

                Gray : Give me a big party when we meet next time🍺<br /><br />

                Gold : Plan a surprise for my birthday.🍷<br /><br />

                Silver : Present me my favorite dress.🎁<br /><br />

                Violet : Make a video call right now.📱

            </div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareAnswer9}`}
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-center text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
    </main>
}

export default DareContent