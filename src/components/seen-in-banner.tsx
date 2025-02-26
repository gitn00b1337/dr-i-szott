import { Box, Image } from "@chakra-ui/react"
import React from "react"
import BBCLogo from "../images/bbcnewslogo.png"
import ScienceNewsLogo from "../images/sciencenewslogo.png"

export type SeenInBannerProps = {
}

export const SeenInBanner: React.FC<SeenInBannerProps> = ({

}) => {
    return (
        <Box display='flex' flex={1} paddingBottom="3rem">
            <Box 
                display='flex' 
                flex={1}
                gap='1rem'
                justifyContent='space-between'
            >
                <a 
                    href="https://www.bbc.com/reel/video/p0k45mgc/how-giant-rats-in-mini-vests-help-sniff-out-crime" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                >
                <Image
                    height={'100px'}
                    src={BBCLogo}
                />
                </a>
                <a 
                    href="https://www.sciencenews.org/article/giant-rats-sniff-smuggled-goods" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                >
                <Image
                    height={'100px'}
                    src={ScienceNewsLogo}
                />
                </a>
            </Box>
        </Box>
    );
}