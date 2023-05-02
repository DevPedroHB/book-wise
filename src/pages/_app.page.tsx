import SidebarContextProvider from "@/contexts/SidebarContext";
import { queryClient } from "@/lib/react-query";
import { globalStyles } from "@/styles/global";
import { Nunito } from "@next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

globalStyles();

export const nunito = Nunito({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <SidebarContextProvider>
          <div className={nunito.className}>
            {getLayout(<Component {...pageProps} />)}
          </div>
        </SidebarContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
