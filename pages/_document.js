import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <script src="/default-plugins/jquery/jquery.min.js" />
            <script src="/default-plugins/bootstrap/js/bootstrap.bundle.min.js" />
            <script src="/default-plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" />
            <script src="/dist/js/adminlte.js" />
        </Head>
        <body className="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument