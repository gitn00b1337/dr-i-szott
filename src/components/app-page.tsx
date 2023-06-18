
import * as React from "react"
import { Box, ChakraBaseProvider, ChakraProvider, Flex } from "@chakra-ui/react";
import { Navbar } from "./navbar";
import theme from '../theme';
import { PageHero, PageHeroProps } from "./page-hero";
import { Footer } from "./footer";
import '@fontsource/lato/100-italic.css';
import '@fontsource/lato/300-italic.css';
import '@fontsource/lato/400-italic.css';
import '@fontsource/lato/700-italic.css';
import '@fontsource/lato/900-italic.css';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

export type AppPageProps = {
    children: React.ReactNode
    hero?: PageHeroProps
}

export const AppPage: React.FC<AppPageProps> = ({
    children,
    hero,
}) => {
    return (
        <ChakraProvider theme={theme}>
            <Box 
                width='100%'
                fontFamily="'Lato', sans-serif"
            >
                <Navbar />
                {
                    hero && <PageHero {...hero}  />
                }
                <Box
                    pos='relative' 
                    width='100%'
                >
                    <Box 
                        as='main'
                        margin='auto'
                    >
                        {
                            children
                        }
                    </Box>
                    <Footer />
                </Box>
            </Box>
    </ChakraProvider>
        
    )
}