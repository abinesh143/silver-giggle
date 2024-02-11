import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <main className="sticky top-0 z-50 bg-white">
      <nav className="sm:pb-8 lg:pt-4 px-4">
        <div className="max-w-screen flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              className="h-8 lg:h-10"
              alt="App Maker Pro"
            />
            <span className="ms-2 font-semibold text-[#FE5000] text-xl sm:text-3xl">Free App Maker Pro AI</span>
          </Link>
          <div className="flex md:hidden items-center md:order-2">
            <button
              data-modal-target="main-menu-modal"
              data-modal-toggle="main-menu-modal"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Image src="/svg/menu.svg" width="28" height="28" alt="menu" />
            </button>
          </div>
          <div
            id="navbar"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-[#FE5000] sm:hover:border-b-2 uppercase border-black pb-2"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/#discover"
                  className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/reseller"
                  className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                >
                  Reseller
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                >
                  Faqs
                </Link>
              </li>
              {user ? (
                <li>
                  <button
                    type="button"
                    className="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    Account
                  </button>
                  <div
                    id="user-dropdown"
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm">Abinesh</span>
                      <span className="block text-sm text-gray-500 truncate">
                        abiceabi123@gmail.com
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          data-modal-target="logout-modal"
                          data-modal-toggle="logout-modal"
                        >
                          Logout
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li>
                  <button
                    id="login"
                    type="button"
                    className="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
