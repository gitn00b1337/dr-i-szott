import { Box, Flex, Image, } from "@chakra-ui/react";
import React from "react";
import { ThemeColors } from "../theme";
import { TextBlock } from "./text-block";

export type RoleWithImageProps = {
    company: string
    role: string
    text: string[]
    imagePosition: 'left' | 'right' | 'top'
    src: string
    alt: string
    alwaysShowImage?: boolean
}

export const RoleWithImage: React.FC<RoleWithImageProps> = ({
    text,
    company,
    role,
    imagePosition,
    src,
    alt,
    alwaysShowImage,
}) => {
    const imageOrder = imagePosition === 'left' || imagePosition === 'top' 
        ? 0 
        : 2;

    const getImagePadding = () => {
        switch (imagePosition) {
            case 'top': 
                return {
                    base: alwaysShowImage ? '1.5rem 0 0 0' : '0',
                    md: '1.5rem 0 0 0',
                };
            case 'left': 
                return {
                    base: alwaysShowImage ? '1.5rem 0 0 0' : '0',
                    md: '0 0 0 1.5rem',
                };
            case 'right': 
                return {
                    base: alwaysShowImage ? '1.5rem 0 0 0' : '0',
                    md: '0 1.5rem 0 0',
                };
            default: return 0;
        }
    }

    const isVertical = (imagePosition === 'top');

    return (
        <Flex
            width='100%'
            pos='relative'
            flexGrow={1}
            padding='1rem'
            flexDir={{
                base: 'column',
                md: isVertical ? 'column' : 'row'
            }}
        >
            <Box
                order={{
                    base: isVertical ? imageOrder : 0,
                    md: imageOrder,
                }}
                display={{
                    base: alwaysShowImage ? 'block' : 'none',
                    md: 'block',
                }}
                width={{
                    base: '100%',
                    md: isVertical ? '100%' : '50%',
                }}
                paddingBottom={{
                    base: '100%',
                    md: isVertical ? '100%' : '50%'
                }}
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
                    md: isVertical ? '100%' : '50%',
                }}
                display={{
                    base: isVertical ? 'flex': 'block' ,
                }}
                order={{
                    base: 1,
                    md: 1,
                }}
                padding={getImagePadding()}
                flexGrow={isVertical ? '1' : undefined}
            >
                <Flex
                    padding='2rem'
                    textAlign='center'
                    alignItems='center'
                    flexDir='column'
                    justifyContent='flex-start'
                    background='#f7f7f7'
                    height='100%'
                    overflow='hidden'
                    borderRadius='1rem'
                    width={{
                        base: '100%',
                    }}
                >
                    
                   <Box
                    fontWeight='700'
                    fontSize='1.5rem'
                    color={ThemeColors.jet}
                   >
                    { company }
                    </Box>
                    <Box
                        color={ThemeColors.pine}
                        padding='0 0 2rem 0'
                    >
                        { role }
                    </Box>
                    <Box
                        paddingBottom='2em'
                    >
                        {
                            text.map((t, i) => (
                                <TextBlock 
                                    key={`tb-${i}`}
                                    text={t}
                                />
                            ))
                        }
                    </Box>
                </Flex>
            </Box>
            
        </Flex>
    )
}