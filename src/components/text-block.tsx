import { Box, TextProps, Text, Flex, } from "@chakra-ui/react"
import React from "react"
import { TextBlockImageProps } from "./text-block-image"


export type TextBlockProps = {
    text: string
    focused?: true
    italic?: true
    fontSize?: string
} 

export const TextBlock: React.FC<TextBlockProps> = ({
    text,
    focused,
    italic,
    fontSize,
}) => {
    const fontStyle = (italic && 'italic')
        || 'normal';
    const fontWeight = (focused && 'bold') 
    || 'normal';

    return (
        <Flex
            padding='0 0 1rem 0'
            justifyContent='center'
        >
            <Box
                maxWidth='80vw'
            >
                <Text 
                    textAlign='center'
                    fontStyle={fontStyle}
                    fontWeight={fontWeight}
                    fontSize={fontSize}
                >
                { text }
                </Text>
            </Box>
        </Flex>
    )
}