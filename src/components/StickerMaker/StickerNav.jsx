import Link from "next/link";

const StickerNavbar = () => {
    return (
        <main>
            <section className="sticky top-0 z-50 md:z-40 bg-white">
                <nav className="sm:pb-8 lg:pt-4 px-4">
                    <div className="max-w-screen flex flex-wrap items-center justify-between">
                        <Link href="/sticker-maker" className="flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/logo.png"
                                className="h-8 lg:h-10"
                                alt="App Maker Pro"
                            />
                            <span className="ms-2 font-semibold text-[#FE5000] md:hidden xl:flex text-xl sm:text-3xl">
                                WASticker Maker AI
                            </span>
                        </Link>
                    </div>
                </nav>
            </section>
        </main>
    );
};

export default StickerNavbar;
