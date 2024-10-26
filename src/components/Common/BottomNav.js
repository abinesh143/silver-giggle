import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SmileyAIBottomNav = () => {
  const pathname = usePathname();
  const [navPath, setNavPath] = useState('sticker-maker')

  useEffect(() => {
    if (pathname) {
      const actualPath = pathname.split("/");
      if (actualPath.length && actualPath[1]) {
        setNavPath(actualPath[1])
      }
    }
  }, [pathname]);
  return (
    <div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <Link
          href="/sticker-maker"
          className={`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-orange-50 group ${
            (pathname === "/sticker-maker" || navPath === 'sticker-maker')
              ? "bg-orange-50 text-orange-500"
              : "text-gray-500"
          } `}
        >
          <svg
            class={`w-5 h-5 mb-1 group-hover:text-orange-500`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="text-sm group-hover:text-orange-500 ">Home</span>
        </Link>
        <Link
          href="/dares"
          className={`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-orange-50 group ${
            (pathname === "/dares" || navPath === 'dares')
              ? "bg-orange-50 text-orange-500"
              : "text-gray-500"
          } `}
        >
          <svg
            className="w-5 h-5 mb-1 group-hover:text-orange-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 19"
          >
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
          </svg>
          <span className="text-sm group-hover:text-orange-500 ">Dares</span>
        </Link>
        <Link
          href="/games"
          className={`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-orange-50 group ${
            (pathname === "/games" || navPath === 'games')
              ? "bg-orange-50 text-orange-500"
              : "text-gray-500"
          } `}
        >
          <svg
            className="w-6 h-6 mb-1 group-hover:text-orange-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="text-sm group-hover:text-orange-500 ">Games</span>
        </Link>
        <Link
          href="/sticker-maker"
          className={`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-orange-50 group ${
            pathname === "/profile"
              ? "bg-orange-50 text-orange-500"
              : "text-gray-500"
          } `}
        >
          <svg
            class="w-6 h-6 mb-1 group-hover:text-orange-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7 12.5a.5.5 0 0 1 .495.43.762.762 0 0 0 .157.096c.213.106.553.208 1.005.295.896.173 2.111.262 3.343.262 1.232 0 2.447-.09 3.343-.262.452-.087.792-.19 1.006-.295a.764.764 0 0 0 .156-.096.5.5 0 0 1 .995.07c0 1.19-.644 2.438-1.618 3.375C14.9 17.319 13.531 18 12 18c-1.531 0-2.9-.681-3.882-1.625C7.144 15.438 6.5 14.19 6.5 13a.5.5 0 0 1 .5-.5Zm9.519.417.003-.004-.003.004Zm-9.038 0a.017.017 0 0 1-.003-.004l.003.004Zm.901-4.853L9 6.81l.619 1.253 1.381.2-1 .976.236 1.376-1.237-.65-1.235.65L8 9.239l-1-.975 1.382-.2Zm6 0L15 6.81l.619 1.253 1.381.2-1 .976.236 1.376-1.237-.65-1.235.65L14 9.239l-1-.975 1.382-.2Z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="text-sm group-hover:text-orange-500 ">Stickers</span>
        </Link>
      </div>
    </div>
  );
};

export default SmileyAIBottomNav;
