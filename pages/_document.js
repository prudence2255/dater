import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="/default-plugins/jquery/jquery.min.js" />
          <script src="/default-plugins/bootstrap/js/bootstrap.bundle.min.js" />
          <script src="/default-plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" />
          <script src="/dist/js/adminlte.js" />
          <script src="/dist/js/jstz.min.js" />
          <meta name="theme-color" content="#009b72" />
        </Head>
        <body className="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
