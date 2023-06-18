import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { TextBlock } from "./text-block";

export type QuoteWithImageProps = {
    text: string
    author: string
    role: string
    imagePosition: 'left' | 'right'
    actionButton?: {
        text: string
        link: string
    }
}

export const QuoteWithImage: React.FC<QuoteWithImageProps> = ({
    text,
    author,
    role,
    imagePosition,
}) => {
    const imageOrder = (imagePosition === 'left' && 0)
        || 2;

    return (
        <Flex
            width='100%'
            pos='relative'
            flexGrow={1}
        >
            <Box
                order={imageOrder}
                width='50%'
                paddingBottom='50%'
                background='gray.600'
                overflow='hidden'
                borderRadius='1rem'
            >
                
            </Box>
            <Box
                width='50%'
                order='1'
                padding='0 1.5rem 0 0'
            >
                <Flex
                    padding='2rem'
                    textAlign='center'
                    alignItems='center'
                    flexDir='column'
                    justifyContent='center'
                    background='#f7f7f7'
                    height='100%'
                    overflow='hidden'
                    borderRadius='1rem'
                >
                    <Box
                        paddingBottom='2em'
                    >
                        <TextBlock
                            text={`"${text}"`}
                            italic    
                        />
                    </Box>
                    <Box>
                        {`― ${author}`}
                    </Box>
                    <Box>{ role }</Box>
                </Flex>
            </Box>
            
        </Flex>
    )
}