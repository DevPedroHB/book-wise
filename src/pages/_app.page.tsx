import { globalStyles } from "@/styles/global";
import { Nunito } from "@next/font/google";
import type { AppProps } from "next/app";

globalStyles();

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}
