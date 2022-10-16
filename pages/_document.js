import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Loader from "../components/utility/Loader";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }
  render() {
    return (
      <Html  
      dir={this.props.locale === "ar" ? "rtl" : "ltr"}
      lang={this.props.locale}
      >
        <Head />
        <head>
          <style>{Loader}</style>
        </head>
        <body>
          <div id={"globalLoader"}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
