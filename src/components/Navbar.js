import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <main className="sticky top-0 z-50 bg-white">
      <nav className="sm:pb-8 sm:pt-4">
        <div class="max-w-screen flex flex-wrap items-center justify-between">
          <Link href="/" class="flex items-center">
            <img src="/svg/logo.svg" class="h-8 lg:h-10" alt="App Maker Pro" />
          </Link>
          <div class="flex md:hidden items-center md:order-2">
            <button
              data-modal-target="main-menu-modal"
              data-modal-toggle="main-menu-modal"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span class="sr-only">Open main menu</span>
              <Image src="/svg/menu.svg" width="28" height="28" alt="menu" />
            </button>
          </div>
          <div
            id="navbar"
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  class="uppercase border-black pb-2 hover:font-semibold sm:hover:border-b-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  class="hover:font-semibold sm:hover:border-b-2 uppercase border-black pb-2"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="#discover"
                  class="uppercase border-black pb-2 hover:font-semibold sm:hover:border-b-2"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/reseller"
                  class="uppercase border-black pb-2 hover:font-semibold sm:hover:border-b-2"
                >
                  Reseller
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  class="uppercase border-black pb-2 hover:font-semibold sm:hover:border-b-2"
                >
                  Faqs
                </Link>
              </li>
              {user ? (
                <li>
                  <button
                    type="button"
                    class="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    Account
                  </button>
                  <div
                    id="user-dropdown"
                    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                  >
                    <div class="px-4 py-3">
                      <span class="block text-sm">Abinesh</span>
                      <span class="block text-sm text-gray-500 truncate">
                        abiceabi123@gmail.com
                      </span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          to="/account/dashboard"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li>
                  <button
                    id="login"
                    type="button"
                    class="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
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
