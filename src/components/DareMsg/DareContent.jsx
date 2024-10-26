import { toastProvider } from "@/helpers/utils";

const DareContent = () => {
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
        `10. 50 rs. recharge on my number 🤑`
    );

    const handleCopyText = (shareText) => {
        navigator.clipboard.writeText(shareText)
            .then(() => {
                toastProvider("success", "Text copied to clipboard!");
            })
            .catch((err) => {
                toastProvider("error", "Failed to copy text");
            });
    };
    return <main>
        <h2 className="text-2xl font-semibold capitalize text-center">Dare Messages</h2>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Question:</h4>
            <div>Select a ❤️and I will give you a dare 😉<br />❤️1 ❤️2 ❤️3 ❤️4 ❤️5 ❤️6 ❤️7 ❤️8 ❤️9 ❤️10</div>
            <div className="flex justify-between gap-4 mt-6">
                <a href={`https://wa.me/?text=${shareQuestion1}`} className="bg-green-500 rounded-lg w-full p-2 text-white text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareQuestion1)}>Copy Question</button>
            </div>
        </div>
        <div className="rounded-lg bg-white my-4 shadow-xl border-gray-100 mx-2 p-3">
            <h4 className="text-lg font-semibold">Answer:</h4>
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
                    target="_blank" className="bg-green-500 rounded-lg w-full p-2 text-white text-sm">Share on Whatsapp</a>
                <button className="bg-orange-500 rounded-lg w-full p-2 py-1 text-white text-sm" onClick={() => handleCopyText(shareAnswer1)}>Copy Question</button>
            </div>
        </div>
    </main>
}

export default DareContent