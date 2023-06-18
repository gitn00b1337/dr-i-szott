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
            height='42.86vw'
            width='100vw'
            pos='relative'
            overflow='hidden'
            backgroundImage={src}
            backgroundAttachment='fixed'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >
        </Box>
    )
}