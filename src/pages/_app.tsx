import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SlidingFooter from "@/components/scrolling-footer";
import FindSettlement from "@/components/settlement/search";
import Head from "next/head";
// import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar = !["/"].includes(router.pathname);
  const showFindSettlement = [
    "/settlement/user",
    "/settlement/master",
  ].includes(router.pathname);

  // useEffect(() => {
  //   const disableRightClick = (event: MouseEvent) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);

  //   const disableDevTools = (event: KeyboardEvent) => {
  //     if (
  //       (event.ctrlKey && ["u", "U", "i", "I", "p", "P"].includes(event.key)) ||
  //       event.key === "F12" || (event.shiftKey && event.key === "F12")
  //     ) {
  //       event.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", disableDevTools);

  //   const detectDevTools = () => {
  //     const threshold = 160;
  //     if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
  //       window.close();
  //     }
  //   };
  //   window.addEventListener("resize", detectDevTools);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableDevTools);
  //     window.removeEventListener("resize", detectDevTools);
  //   };
  // }, []);
  const messages = [
    "1️⃣ Welcome To Our Exchange...",
    "2️⃣ ICC Champions Trophy Cup TOURNAMENT WINNER Bet Started in Our Exchange....💫💫💫",
  ];
  // 📢
  return (
    <>
      <Head>
        <title>Gajanand | Admin - Award Winning Exchange</title>
      </Head>
      <ToastContainer />
      <div className="flex flex-col h-screen">
        {showNavbar && <Navbar className={"fixed top-0 left-0 w-full z-50"} />}
        <main className="overflow-y-auto">
          <Component {...pageProps} />
        </main>
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-white">
          {showFindSettlement && <FindSettlement />}
          {showNavbar && <SlidingFooter messages={messages} />}
        </footer>
      </div>
    </>
  );
}
