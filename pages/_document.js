import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.pathname === "/it" ? "it" : "de";
    return { ...initialProps, locale };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="stylesheet" href="/uikit.min.css" />
          <link rel="stylesheet" href="/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
