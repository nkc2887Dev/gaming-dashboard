import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollingFooter from "@/components/scrolling-footer";
import FindSettlement from "@/components/settlement/search";
// import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar = !["/"].includes(router.pathname);
  const showFindSettlement = ["/settlement/user", "/settlement/master"].includes(router.pathname);

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
    <div className="flex flex-col h-screen">
      {showNavbar && <Navbar />}
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <footer className="overflow-hidden fixed bottom-0 w-full">
        {showFindSettlement && <FindSettlement />}
        {showNavbar && <ScrollingFooter messages={messages} />}
      </footer>
    </div>
  );
}
