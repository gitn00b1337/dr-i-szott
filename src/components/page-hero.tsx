import { Box, Flex, Image, Text, } from "@chakra-ui/react";
import React from "react";
import { graphql, useStaticQuery, } from "gatsby";
import { ThemeColors } from "../theme";

export type PageHeroProps = {
    src: string
    alt: string
}

export const PageHero: React.FC<PageHeroProps> = ({
    src,
    alt,
}) => {
    // images are scaled at 21:9
    return (
        <Box
            // _before={{
            //     content: "''",
            //     position: 'absolute',
            //     top: 0,
            //     left: 0,
            //     width: '100%',
            //     height: '100%',
            // }}
            width='100vw'
            // height={{
            //     md: '100vh',
            //     sm: '56.28vw',
                
            // }}
            // height='100vh'
            pos='relative'
            overflow='hidden'
            // backgroundImage={src}
            // backgroundAttachment='fixed'
            // backgroundPosition='center center'
            // backgroundRepeat='no-repeat'
            // backgroundSize={'cover'}
            // filter='brightness(60%)'
        >
            <Image
                width='100vw'
                src={src}
                filter='brightness(60%)'
            />
            <Flex
                position='absolute'
                bottom='0'
                width='100%'
                padding={{
                    base: '2rem 1.5rem',
                    sm: '3rem 1.5rem',
                    md: '4rem 1.5rem',
                    lg: '8rem 1.5rem',
                }}
            >
                <Flex
                    width='100%'
                    justifyContent='center'
                    alignItems='center'
                    color='#fff'
                    flexDir='column'
                    fontWeight='700'
                    fontSize={{
                        base: '1.5rem',
                        sm: '2rem',
                        md: '4rem',
                        lg: '5rem',
                    }}
                >
                    <Text>
                        Research
                    </Text>
                    <Flex>
                        <Text>With&nbsp;</Text><Text>Purpose</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}