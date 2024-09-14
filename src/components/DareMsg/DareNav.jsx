import Link from "next/link";

const DareNavbar = () => {
  return (
    <main>
      <section className="sticky top-0 z-50 md:z-40 bg-gray-900">
        <nav className="sm:pb-8 lg:pt-4 px-4">
          <div className="max-w-screen flex flex-wrap items-center justify-between py-3">
            <Link href="/dares" className="flex justify-center no-underline">
              <img
                src="/gif/emogi1.webp"
                className="me-2"
                width={40}
                height={40}
                alt="Emoji"
              ></img>
              <div className="text-2xl text-white font-bolder px-2">Dare Games</div>
            </Link>
          </div>
        </nav>
      </section>
    </main>
  );
};

export default DareNavbar;
