import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar = !["/"].includes(router.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
        <Component {...pageProps} />
    </div>
  );
}
