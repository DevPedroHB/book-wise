import SidebarContextProvider from "@/contexts/SidebarContext";
import { globalStyles } from "@/styles/global";
import { Nunito } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

globalStyles();

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: false,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <SidebarContextProvider>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      </SidebarContextProvider>
    </SessionProvider>
  );
}
