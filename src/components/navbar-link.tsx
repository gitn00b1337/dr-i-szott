import * as React from "react"
import { Box } from "@chakra-ui/react"
import { Link } from "gatsby"
import { ThemeColors } from "../theme"

export type NavbarLinkProps = {
    text: string
    to: string
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
    text,   
    to,
}) => {
    return (
        <Link to={to}>
            <Box
                fontSize='1rem'
                fontWeight='700'
                letterSpacing='4px'
                padding='0 1rem'
                textTransform='lowercase'
                color='#fff'
                _hover={{
                    color: ThemeColors.yellow,
                }}
            >{ text }
            </Box>
        </Link>
    )
}