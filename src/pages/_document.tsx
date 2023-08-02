import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto+Mono:wght@300;400;500&display=swap"
            rel="stylesheet"
          />

          <title>WFOODS - Distribuidora de Bebidas e Alimentos</title>
          <meta
            name="description"
            content="Distribuidora de bebidas e alimentos - WFOODS"
          />
          <meta
            name="author"
            content="WFOODS Distribuidora de Bebidas e Alimentos Ltda."
          />
          <meta name="email" content="contato@distribuidorawfoods.com.br" />
          <meta name="telephone" content="011992964453" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
