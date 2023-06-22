import { Flex, Text, Box, Link } from "@chakra-ui/react"
import React from "react"
import { ThemeColors } from "../theme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faInstagram, faInstagramSquare, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type FooterProps = {

}

export const Footer: React.FC<FooterProps> = ({

}) => (
    <Box
        marginTop='2rem'
        width='100%'
    >
        <Flex
            width='100%'
            background={ThemeColors.brunswick}
            justifyContent='center'
            padding='3rem 0'
            color='#fff'
        >
            <Box
                textAlign='center'
            >
                <Text
                    textStyle='smHeader'
                >
                    Get in touch and connect via
                </Text>
                <Flex
                    justifyContent='center'
                    margin='0'
                >
                    <FooterIcon
                        text='Twitter'
                        icon={faTwitter} 
                        href='https://twitter.com/izzyszott?lang=en'
                    />
                    <FooterIcon
                        text='LinkedIn' 
                        icon={faLinkedin} 
                        href='https://www.linkedin.com/in/isabelle-szott-53b2174b/'   
                    />
                    <FooterIcon
                        text='Instagram' 
                        icon={faInstagram}    
                        href='https://www.instagram.com/izzyszott/'
                    />
                </Flex>
            </Box>
        </Flex>

    </Box>
)

type FooterIconProps = {
    text: string
    icon: IconProp
    href: string
}

const FooterIcon: React.FC<FooterIconProps> = ({
    text,
    icon,
    href,
}) => {
    return (
        <Link 
            href={href}
            target='_blank'
            color='#fff'
            _hover={{
                color: ThemeColors.yellow,
                textDecoration: 'none',
            }}
        >
            <Flex
                flexDir='column'
                padding='1rem'
                justifyContent='center'
                cursor='pointer'
            >
                <Box
                    padding={{
                        base: '0.5rem',
                    }}
                    fontSize={{
                        base: '2rem',
                        md: '2rem'
                    }}
                >
                    <FontAwesomeIcon 
                        icon={icon} 
                        color='inherit'
                    />
                </Box>
                <Box>
                    <Text 
                        textStyle='smFocused'
                        textDecoration='none'
                        color='inherit'
                        fontSize={{
                            base: '0.8rem',
                            md: '1rem'
                        }}
                    >
                        { text }
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}