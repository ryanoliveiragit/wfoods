import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import { PrimeReactProvider } from "primereact/api";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </PrimeReactProvider>
  );
}
