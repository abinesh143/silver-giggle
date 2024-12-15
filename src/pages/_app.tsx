import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [navPath, setNavPath] = useState("");

  useEffect(() => {
    if (pathname) {
      const actualPath = pathname.split("/");
      if (actualPath.length && actualPath[1]) {
        setNavPath(actualPath[1]);
      }
    }
  }, [pathname]);

  // useEffect(() => {
  //   const includedRoutes = ["account"];
  //   if (navPath && includedRoutes.includes(navPath)) {
  //     if (!window.$crisp) {
  //       window.$crisp = [];
  //       window.CRISP_WEBSITE_ID = "eaeab107-6392-4b9e-bec8-4d0e9d694752";

  //       const d = document;
  //       const s = d.createElement("script");
  //       s.src = "https://client.crisp.chat/l.js";
  //       s.async = true;
  //       d.getElementsByTagName("head")[0].appendChild(s);
  //       window.$crisp.push(["do", "chat:open"]);
  //     }
  //   } else {
  //     if (window.$crisp) {
  //       delete window.$crisp;
  //       const crispScript = document.querySelector(
  //         'script[src="https://client.crisp.chat/l.js"]'
  //       );
  //       if (crispScript) crispScript.remove();
  //     }
  //   }
  // }, [navPath]);
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-JN14QBYGMC" />
    </Layout>
  );
}
