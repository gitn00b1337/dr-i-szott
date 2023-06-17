import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '../theme';

const IndexPage: React.FC<PageProps> = () => {
  return (
   <ChakraBaseProvider theme={theme}>
     <main>
      Izzys website
     </main>
   </ChakraBaseProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
