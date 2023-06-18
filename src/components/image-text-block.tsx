import { Box, BoxProps, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { ThemeColors } from "../theme"
import { TextBlock, TextBlockProps } from "./text-block"
import { TextBlockImage, TextBlockImageProps } from "./text-block-image"


export type ImageTextBlockProps = {
    image: TextBlockImageProps
    header: string
    text: TextBlockProps
} & BoxProps

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
    image,
    text,
    header,
    ...boxProps
}) => {
    return (
        <Flex
            flexDir='column'
            width='100%'
            pos='relative'
            alignItems='center'
            padding='1rem'
            margin='0.5rem'
            { ...boxProps }
        >
            <Box
                width='70%'
            >
                <TextBlockImage {...image} />
            </Box>
            <Box
                padding='0 1.5rem'
                margin='1rem 0 0 0'
                height='100%'
                background='#f7f7f7'
                borderRadius='1rem'
            >
                <Text 
                    as='h3'
                    textAlign='center'
                    fontWeight='bold'
                    padding='1.5rem 0'
                >
                { header }
                </Text>
                <TextBlock 
                    {...text} 
                />
            </Box>
        </Flex>
    )
}