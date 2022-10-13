import { SessionProvider } from 'next-auth/react'
import "../styles/globals.css";

// Import types
// import type { AppType } from "next/dist/shared/lib/utils";
import type { AppProps /*, AppContext */ } from "next/app";
//@ts-ignore
import type { Session } from "next-auth";


const MyApp = ({ 
    Component,
    pageProps: { session, ...pageProps }
 }: AppProps<{ session: Session}>) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp


// const MyApp: AppType = ({ 
//     Component,
//     pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;
