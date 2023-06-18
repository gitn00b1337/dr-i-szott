import { Box, Text, } from '@chakra-ui/react';
import * as React from 'react';

export type PageHeaderProps = {
    title: string
    subtitle: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle
}) => {
    return (
        <Box as='header'
            textAlign='center'
        >
            <Box 
                as='h1'
                textStyle='pageHeader'
                padding='2rem 0 0.25rem 0'
            >
                <Text>
                { title }
                </Text>
            </Box>
            <Box 
                as='h2'
                textStyle='pageSubHeader'
                padding='0 0 3rem 0'
            >
                { subtitle }
            </Box>
        </Box>
    )
}