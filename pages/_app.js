import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import styled from "@emotion/styled";
// import "@fontsource/fontname"


// set custom color, font , etc here
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })


// CustomFont:
// Find fonts, install and import it: https://fontsource.org/fonts
// const AppContainer = styled.div`
//   font-family: "fontname";
// `;


function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>

  )
}

export default MyApp
