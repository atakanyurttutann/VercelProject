import Document, {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script'

class CWDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
            </Head>
            <body onLoad='script' className="">
            <Main/>
            <NextScript/>
            </body>
         </Html>
      );
   }
}

export default CWDocument;