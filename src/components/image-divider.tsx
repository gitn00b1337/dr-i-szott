import { Box, Image } from "@chakra-ui/react"
import React from "react"


export type ImageDividerProps = {
    src: string
    alt: string
}

export const ImageDivider: React.FC<ImageDividerProps> = ({
    src,
    alt,
}) => {
    return (
        <Box
            width='100%'
            height='500px'
            pos='relative'
            overflow='hidden'
            backgroundImage={src}
            backgroundAttachment='fixed'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            marginTop='1.5rem'
        >
        </Box>
    )
}