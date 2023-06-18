import * as React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { NavbarLinkProps, NavbarLink } from "./navbar-link"
import { ThemeColors } from "../theme";

export type NavbarProps = {

}

const LINKS: NavbarLinkProps[] = [
    { text: 'About', to: '/', },
    { text: 'Roles', to: '/roles', },
    { text: 'Speaking', to: '/speaking', },
    { text: 'Publications', to: '/publications', },
    { text: 'Contact', to: '/contact', },
];

export const Navbar: React.FC<NavbarProps> = () => {

    return (
        <Box 
            as='nav'
            padding='1.5rem'
            pos='fixed'
            top='0'
            left='0'
            width='100%'
            height={{
                "base": '50px',
                "md": '100px',
                "lg": '100px',
            }}
            zIndex='100'
        >
            <Box 
                background={ThemeColors.pine}
                width='100%'
                height='100%'
                pos='absolute'
                opacity='0.9'
                top='0'
                left='0'
            >

            </Box>
            <Flex 
                width='100%'
                height='100%'
                alignItems='center'
                pos='relative'
            >
                <Box
                    flexGrow={1}
                >
                    Logo
                </Box>
                <Flex 
                    justifySelf='flex-end'
                >
                {
                    LINKS.map((props) => (
                        <NavbarLink key={`navbarlink-${props.to}`} {...props} />
                    ))
                }
                </Flex>
            </Flex>
        </Box>
    )
}