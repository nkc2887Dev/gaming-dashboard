import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar = !["/"].includes(router.pathname);

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
  
  return (
    <div>
      {showNavbar && <Navbar />}
        <Component {...pageProps} />
    </div>
  );
}
