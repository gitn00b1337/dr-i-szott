import { Box } from "@chakra-ui/react"
import React from "react"
import { TextBlock } from "./text-block"


export type QuoteProps = {
    text: string
    author?: string
}

export const Quote: React.FC<QuoteProps> = ({
    text,
    author,
}) => {
    return (
        <Box>
            <TextBlock
                italic
                text={`"${text}"`}
            />
            {
                author && (
                    <TextBlock
                        focused
                        text={`― ${author}`}
                    />
                )
            }
        </Box>
    )
}