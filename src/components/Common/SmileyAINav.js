const SmileyAINavbar = ({title}) => {
  return (
    <nav className="bg-gray-900 border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="/sticker-maker" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/gif/emogi1.webp" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Smiley AI {title}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://play.google.com/store/apps/details?id=funny.cricket.animated.sticker"
            target="_blank"
            type="button"
            className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm flex items-center justify-center px-2 sm:px-4 sm:py-2 text-center max-sm:hidden"
          >
            <span className="">Download App</span>
          </a>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SmileyAINavbar;
