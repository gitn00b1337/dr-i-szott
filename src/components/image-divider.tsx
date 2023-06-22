import { Box, Image } from "@chakra-ui/react"
import React from "react"
import { Parallax, Background } from 'react-parallax';
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export type ImageDividerProps = {
    src: string
    alt: string
}

export const ImageDivider: React.FC<ImageDividerProps> = ({
    src,
    alt,
}) => {
    const background: BannerLayer = {
        image:
        src,
        translateY: [0, 50],
        shouldAlwaysCompleteAnimation: true,
      };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 0.5],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <Box background='#000' width='100%' height='100%' />
        ),
        rootMargin: { bottom: 200, top: -750, left: 0, right: 0 }
    }
    return (
        <Box 
            pos='relative'
            height={{
                base: '250px',
                lg: '650px'
            }}
        >

            <ParallaxBanner
                layers={[background, gradientOverlay]}
                
                style={{
                    height: '100%'
                }}
            />
        </Box>
        // <Box width='100%' height='300px'>
        //     <Parallax
        //         blur={10}
        //         bgImage={src}
        //         strength={0}
        //         style={{
                    
        //         }}
        //     >

        //     </Parallax>        
        // </Box>
        // <Box
            
        //     pos='relative'
        //     overflow='hidden'
        //     backgroundImage={src}
        //     backgroundAttachment='fixed'
        //     backgroundPosition='center'
        //     backgroundRepeat='no-repeat'
        //     backgroundSize='cover'
        //     marginTop='1.5rem'
        // >
    )
}