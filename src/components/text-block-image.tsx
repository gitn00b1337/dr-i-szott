import { Box, BoxProps, Flex, Image } from "@chakra-ui/react"
import React from "react"
import { ThemeColors } from "../theme"

export type TextBlockImageProps = {
    src: string
    alt: string
}

export const TextBlockImage: React.FC<TextBlockImageProps> = ({
    src,
    alt,
}) => {

    return (
        <Box
            width='100%'
            display='block'
        >
            <Flex
                width='100%'
                paddingBottom='100%'
                borderRadius='50%'
                overflow='hidden'
                background={ThemeColors.yellow}
                pos='relative'
            >
                <Box
                    width='100%'
                    height='100%'
                    pos={'absolute'}
                    top='0'
                    left='0'
                    backgroundImage={src}
                    backgroundPosition='center'
                    backgroundRepeat='no-repeat'
                    backgroundSize='cover'
                >

                </Box>
            </Flex>
        </Box>
    )
}    