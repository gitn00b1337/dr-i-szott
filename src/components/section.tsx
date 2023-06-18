import { Box } from "@chakra-ui/react"
import React from "react"

export type SectionProps = {
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
    children,
}) => {
    return (
        <Box as='section'
            width='100%'
            marginBottom='4rem'
        >
            <Box
                pos='relative'
                width='100%'
                maxWidth='1200px'
                margin='auto'
            >
            { children}
            </Box>
        </Box>
    )
}