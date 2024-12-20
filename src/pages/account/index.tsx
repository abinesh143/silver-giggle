/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Premium from "@/components/Premium";
import General from "@/components/General";
import Design from "@/components/Design";
import Setting from "@/components/Setting";
import Notification from "@/components/Notification";
import Monetization from "@/components/Monetization";
import Download from "@/components/Download";
import Publish from "@/components/Publish";
import FreeRating from "@/components/FreeRating";
import Promotion from "@/components/Promotion";
import EditApp from "@/components/AppMaker/EditApp";
import TutorialVideo from "@/components/AppMaker/Tutorial";
import Help from "@/components/Help";
import LogoutModal from "@/components/LogoutModal";
import PageLoader from "@/components/PageLoader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Account = () => {
  const [activeTab, setActiveTab] = useState("edit");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("tab");

  // const getDashboardData = async (userEmail: string) => {
  //   try {
  //     const response = await fetch(`/api/metadata?email=${userEmail}`, {
  //       method: "GET",
  //     });
  //     const appDetails = await response.json();
  //     if (response.status === 200) {
  //       localStorage.setItem("appMakerPro", JSON.stringify(appDetails));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (query) {
      setActiveTab(query);
    }
  }, [query]);

  useEffect(() => {
    initFlowbite();
  }, [isLoading]);

  useEffect(() => {
    const userData = localStorage.getItem("appMaker");
    if (userData) {
      const parsedData = JSON.parse(userData);
      userData ? setUser(parsedData) : null;
      setIsLoading(false);
      // getDashboardData(parsedData["userEmail"]);
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <PageLoader />
        </div>
      ) : (
        <>
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full xl:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-6 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <Link href="/" className="flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  className="h-8 lg:h-10"
                  alt="App Maker Pro"
                />
                <span className="ms-1 text-2xl text-[#FE5000] font-semibold">
                  APP AI PRO
                </span>
              </Link>
              <ul className="space-y-4 font-medium pt-6 text-xl">
                {/* <li>
                  <div
                    className={`${
                      activeTab === "info" ? "bg-blue-500" : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    onClick={() => setActiveTab("info")}
                    data-drawer-hide="logo-sidebar"
                  >
                    <svg
                      className={`${
                        activeTab === "info" ? "text-gray-900" : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">App Info</span>
                  </div>
                </li> */}
                <li>
                  <div
                    className={`${
                      activeTab === "edit" ? "bg-blue-500" : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    onClick={() => setActiveTab("edit")}
                    data-drawer-hide="logo-sidebar"
                  >
                    <svg
                      className={`${
                        activeTab === "edit" ? "text-gray-900" : "text-gray-500"
                      } w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Edit App
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className={`${
                      activeTab === "tutorial"
                        ? "bg-blue-500"
                        : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    onClick={() => setActiveTab("tutorial")}
                    data-drawer-hide="logo-sidebar"
                  >
                    <svg
                      className={`${
                        activeTab === "tutorial"
                          ? "text-gray-900"
                          : "text-gray-500"
                      } w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Tutorial Video
                    </span>
                  </div>
                </li>
                {/* <li>
                  <div
                    className={`${
                      activeTab === "design"
                        ? "bg-blue-500"
                        : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    onClick={() => setActiveTab("design")}
                    data-drawer-hide="logo-sidebar"
                  >
                    <svg
                      className={`${
                        activeTab === "design"
                          ? "text-gray-900"
                          : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Design
                    </span>
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div
                    className={`${
                      activeTab === "setting"
                        ? "bg-blue-500"
                        : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    data-drawer-hide="logo-sidebar"
                    onClick={() => setActiveTab("setting")}
                  >
                    <svg
                      className={`${
                        activeTab === "setting"
                          ? "text-gray-900"
                          : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Settings
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div
                    className={`${
                      activeTab === "push" ? "bg-blue-500" : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    data-drawer-hide="logo-sidebar"
                    onClick={() => setActiveTab("push")}
                  >
                    <svg
                      className={`${
                        activeTab === "push" ? "text-gray-900" : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Notification
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div
                    className={`${
                      activeTab === "ads" ? "bg-blue-500" : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    data-drawer-hide="logo-sidebar"
                    onClick={() => setActiveTab("ads")}
                  >
                    <svg
                      className={`${
                        activeTab === "ads" ? "text-gray-900" : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Monetization
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div
                    className={`${
                      activeTab === "download"
                        ? "bg-blue-500"
                        : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    data-drawer-hide="logo-sidebar"
                    onClick={() => setActiveTab("download")}
                  >
                    <svg
                      className={`${
                        activeTab === "download"
                          ? "text-gray-900"
                          : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Download
                    </span>
                  </div>
                </li> */}
                {/* <li>
                  <div
                    className={`${
                      activeTab === "publish"
                        ? "bg-blue-500"
                        : "hover:bg-gray-100"
                    } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                    data-drawer-hide="logo-sidebar"
                    onClick={() => setActiveTab("publish")}
                  >
                    <svg
                      className={`${
                        activeTab === "publish"
                          ? "text-gray-900"
                          : "text-gray-500"
                      } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Publish
                    </span>
                  </div>
                </li> */}
                <ul className="pt-20  space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                  <li>
                    <div
                      className={`${
                        activeTab === "pro"
                          ? "bg-blue-500"
                          : "hover:bg-gray-100"
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                      data-drawer-hide="logo-sidebar"
                      onClick={() => setActiveTab("pro")}
                    >
                      <svg
                        className={`${
                          activeTab === "pro"
                            ? "text-gray-900"
                            : "text-gray-500"
                        } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 17 20"
                      >
                        <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                      </svg>
                      <span className="ms-3">Upgrade to Pro</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${
                        activeTab === "review"
                          ? "bg-blue-500"
                          : "hover:bg-gray-100"
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                      data-drawer-hide="logo-sidebar"
                      onClick={() => setActiveTab("review")}
                    >
                      <svg
                        className={`${
                          activeTab === "review"
                            ? "text-gray-900"
                            : "text-gray-500"
                        } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                      </svg>
                      <span className="ms-3">Free Reviews</span>
                    </div>
                  </li>
                  {/* <li>
                    <div
                      className={`${
                        activeTab === "promote"
                          ? "bg-blue-500"
                          : "hover:bg-gray-100"
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                      data-drawer-hide="logo-sidebar"
                      onClick={() => setActiveTab("promote")}
                    >
                      <svg
                        className={`${
                          activeTab === "promote"
                            ? "text-gray-900"
                            : "text-gray-500"
                        } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                        <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                      </svg>
                      <span className="ms-3">Promotion</span>
                    </div>
                  </li> */}
                  <li>
                    <div
                      className={`${
                        activeTab === "help"
                          ? "bg-blue-500"
                          : "hover:bg-gray-100"
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                      data-drawer-hide="logo-sidebar"
                      onClick={() => setActiveTab("help")}
                    >
                      <svg
                        className={`${
                          activeTab === "help"
                            ? "text-gray-900"
                            : "text-gray-500"
                        } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 21 21"
                      >
                        <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                      </svg>
                      <span className="ms-3">Help</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${
                        activeTab === "logout"
                          ? "bg-blue-500"
                          : "hover:bg-gray-100"
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                      data-modal-target="logout-modal"
                      data-modal-toggle="logout-modal"
                      data-drawer-hide="logo-sidebar"
                    >
                      <svg
                        className={`${
                          activeTab === "logout"
                            ? "text-gray-900"
                            : "text-gray-500"
                        } w-5 h-5 transition -rotate-90 duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
                        />
                      </svg>
                      <span className="ms-3">Logout</span>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </aside>

          <div className="sm:p-8 xl:ml-64">
            {activeTab === "info" ? (
              <div>
                <General user={user} setTab={() => setActiveTab("download")} />
              </div>
            ) : activeTab === "edit" ? (
              <div>
                <EditApp
                  user={user}
                  setTab={(value: string) => setActiveTab(value)}
                />
              </div>
            ) : activeTab === "tutorial" ? (
              <div>
                <TutorialVideo />
              </div>
            ) : activeTab === "design" ? (
              <div>
                <Design />
              </div>
            ) : activeTab === "setting" ? (
              <div>
                <Setting />
              </div>
            ) : activeTab === "push" ? (
              <div>
                <Notification />
              </div>
            ) : activeTab === "ads" ? (
              <div>
                <Monetization />
              </div>
            ) : activeTab === "download" ? (
              <div>
                <Download user={user} setTab={() => setActiveTab("pro")} />
              </div>
            ) : activeTab === "publish" ? (
              <div>
                <Publish
                  user={user}
                  setTab={(value: string) => setActiveTab(value)}
                />
              </div>
            ) : activeTab === "pro" ? (
              <div>
                <Premium setTab={() => setActiveTab("help")} user={user} />
              </div>
            ) : activeTab === "review" ? (
              <div>
                <FreeRating />
              </div>
            ) : activeTab === "promote" ? (
              <div>
                <Promotion />
              </div>
            ) : activeTab === "help" ? (
              <div>
                <Help />
              </div>
            ) : null}
          </div>
          <LogoutModal />
        </>
      )}
    </main>
  );
};

export default Account;
