import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'




class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {


    return (
      <Html>

        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
        
        <Footer />

      </Html>
    )
  }
}




export default MyDocument