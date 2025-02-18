import { Modal, initFlowbite } from "flowbite";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
import LogoutModal from "./LogoutModal";

const Navbar = (props) => {
  const toggleModal = (type, id) => {
    const modalElement = document.getElementById(id);
    const modal = new Modal(modalElement, { closable: false });
    type === "show" ? modal.show() : modal.hide();
  };

  useEffect(() => {
    initFlowbite();
  }, [props.user]);
  return (
    <main>
      <section className="sticky top-0 z-50 md:z-40 bg-white">
        <nav className="sm:pb-8 lg:pt-4 px-4">
          <div className="max-w-screen flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                className="h-8 lg:h-10"
                alt="App Maker Pro"
              />
              <span className="ms-2 font-semibold text-[#FE5000] md:hidden xl:flex text-xl sm:text-3xl uppercase">
                Free App Maker Pro AI
              </span>
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
                    href="/pricing"
                    className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                  >
                    Pricing
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
                  <button
                    id="dropdownSmileyLink"
                    data-dropdown-toggle="dropdownSmiley"
                    class="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:text-[#FE5000] border-0 p-0 w-auto"
                  >
                    Smiley AI
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdownSmiley"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          href="/sticker-maker"
                          class="block px-4 py-2 hover:text-[#FE5000] hover:bg-orange-50 "
                        >
                          Cartoon Gif Maker
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dares"
                          class="block px-4 py-2 hover:bg-orange-50 hover:text-[#FE5000]"
                        >
                          Dare Games
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/games"
                          class="block px-4 py-2 hover:bg-orange-50 hover:text-[#FE5000]"
                        >
                          Smiley Games
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {props.user ? (
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
                        <span className="block text-sm">
                          {props.user.fullName}
                        </span>
                        <span className="block text-sm text-gray-500 truncate">
                          {props.user.userEmail}
                        </span>
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <Link
                            href="/account"
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
                      onClick={() => toggleModal("show", "auth-modal")}
                    >
                      Login
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Mobile Navbar */}
            <div
              id="main-menu-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full h-screen overflow-x-hidden overflow-y-auto"
            >
              <div className="relative bg-black text-white w-full h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between px-4 py-5 border-b border-[#3A3A3A] rounded-t">
                    <div className="flex gap-x-2 text-white">
                      <Image
                        src="/svg/profile-circle.svg"
                        className="w-8"
                        width={32}
                        height={32}
                        alt="profile"
                      />
                      {props.user ? (
                        <div className="px-2">
                          <span className="block text-sm">
                            {props.user.fullName}
                          </span>
                          <span className="block text-sm truncate">
                            {props.user.userEmail}
                          </span>
                        </div>
                      ) : (
                        <div>
                          <button
                            id="login"
                            type="button"
                            className="text-white font-medium capitalize px-2 pt-1.5"
                            data-modal-hide="main-menu-modal"
                            onClick={() => toggleModal("show", "auth-modal")}
                          >
                            Log in
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                      data-modal-hide="main-menu-modal"
                    >
                      <Image
                        src="/svg/close-circle-black.svg"
                        height="24"
                        width="24"
                        alt="close-circle"
                      />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="pt-5 flex flex-col gap-y-5">
                    <Link
                      href="/"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Home
                    </Link>
                    <Link
                      href="/showcase"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Showcase
                    </Link>
                    <Link
                      href="/#discover"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Features
                    </Link>
                    <Link
                      href="/reseller"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Reseller
                    </Link>
                    <Link
                      href="/sticker-maker"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Cartoon Gif Maker (AI)
                    </Link>
                    <Link
                      href="/dares"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Dare Games
                    </Link>
                    <Link
                      href="/games"
                      className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Smiley Games
                    </Link>
                    {props.user && (
                      <Link
                        href="/account"
                        data-modal-hide="main-menu-modal"
                        className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      >
                        Dashboard
                      </Link>
                    )}
                    {props.user && (
                      <div
                        v-if="userStore.user"
                        data-modal-hide="main-menu-modal"
                        className="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      >
                        <div
                          data-modal-target="logout-modal"
                          data-modal-toggle="logout-modal"
                        >
                          Logout
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <AuthModal closeModal={() => toggleModal("hide", "auth-modal")} />
      <LogoutModal />
    </main>
  );
};

export default Navbar;
