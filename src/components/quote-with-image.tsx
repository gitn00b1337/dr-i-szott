import { Box, Flex, Image, } from "@chakra-ui/react";
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
    src: string
    alt: string
}

export const QuoteWithImage: React.FC<QuoteWithImageProps> = ({
    text,
    author,
    role,
    imagePosition,
    src,
    alt,
}) => {
    const imageOrder = imagePosition === 'left' ? 0 : 2;

    return (
        <Flex
            width='100%'
            pos='relative'
            flexGrow={1}
            padding='1rem'
        >
            <Box
                order={imageOrder}
                display={{
                    base: 'none',
                    md: 'block',
                }}
                width={{
                    base: '100%',
                    md: '50%'
                }}
                paddingBottom='50%'
                overflow='hidden'
                borderRadius='1rem'
                pos='relative'
            >
                <Box
                    pos='absolute'
                    top='0'
                    left='0'
                    right='0'
                    bottom='0'
                    backgroundImage={`url('${src}')`}
                    backgroundPosition='center center'
                    backgroundRepeat='no-repeat'
                    backgroundSize='cover'
                    overflow='hidden'
                >

                </Box>
            </Box>
            <Box
                width={{
                    base: '100%',
                    md: '50%'
                }}
                order='1'
                padding={{
                    base: 0,
                    md: '0 1.5rem 0 0'
                }}
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