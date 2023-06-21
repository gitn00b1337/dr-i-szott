import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { graphql, useStaticQuery, } from "gatsby";

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
            />
        </Box>
    )
}