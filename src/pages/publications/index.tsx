import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Box, BoxProps, Button, Flex, Link, Text } from "@chakra-ui/react";
import { AppPage } from "../../components/app-page";
import { PageHeader } from "../../components/page-header";
import { Section } from "../../components/section";
import HeroImage from '../../images/publications_hero.jpeg'
import { ThemeColors } from "../../theme";

type ReferenceProps = {
    index: number
} & Reference

type Reference = {
    status: 'PUBLISHED' | 'IN_PREP'
    authors: string[]
    title: string
    citationCount?: number
    location: string    
    date?: string
    href?: string
}

const LinkOrBlock = ({
    href,
    children,
}: {
    href?: string
    children: React.ReactNode
} & BoxProps) => {
    if (href) {
        return (
            <Link
                href={href}
                target='_blank'
                _hover={{
                    textDecoration: 'none'
                }}
            >
                { children }
            </Link>
        )
    }

    return (
        <Box>
            { children }
        </Box>
    )
}

const Reference: React.FC<ReferenceProps> = ({
    index,
    status,
    authors,
    title,
    citationCount,
    location,
    date,
    href,
}) => {
    return (
        <LinkOrBlock href={href}>
            <Box
                display='block'
                width='100%'
                background='#f7f7f7'
                padding='1rem'
                marginBottom='1rem'
                color={ThemeColors.jet}
                cursor={ href ? 'pointer' : 'unset' }
                _hover={{
                    background: href ? ThemeColors.pine : '#f7f7f7',
                    color: href ? '#fff' : ThemeColors.jet,
                }}
            >
                {
                    authors.map((author, authorIndex) => {
                        const isLast = authorIndex === authors.length - 1;

                        return (
                            <Text
                                as='span'
                                fontWeight={author === IzzyID ? '700' : 'normal'}
                            >
                                { `${author}${ isLast ? ' ' : ', '}` }
                            </Text>
                        )
                    })
                }
                {
                    status === 'IN_PREP' && (
                        <Text 
                            as='span'
                        >
                            &nbsp;(in prep)
                        </Text>
                    )
                }
                { 
                    <Text 
                        as='span'
                        textDecor='underline'
                    >
                        &nbsp;{ title }
                    </Text>
                }
                {
                    location && (
                        <Text
                            as='span'
                        >
                            &nbsp;{ location} 
                            {
                                citationCount && (
                                    <Text
                                        as='span'
                                    >
                                        {` - ${citationCount} citations`}
                                    </Text>
                                )
                            }
                        </Text>
                    )
                }
            </Box>
        </LinkOrBlock>
    )
}

const IzzyID = 'Szott, I.D.'

const REFERENCES: Reference[] = [
    {
        status: 'IN_PREP',
        authors: [IzzyID, 'et. al'],
        title: 'Ratting on wildlife crime: Training African giant pouched rats to detect illegally smuggled wildlife.',
        location: 'Invited submission to Frontiers in Conservation Science',
    },
    {
        status: 'PUBLISHED',
        authors: ['Howarth, E.R.I.', 'Kemp, C.', 'Thatcher, H.R.', IzzyID],
        title: 'Developing and validating attention bias tools for assessing trait and state affect in animals: A worked example with Macaca mulatta.',
        location: 'Applied Animal Behaviour Science',
        citationCount: 16,
        date: '(2021)',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0168159120302860',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Pretorius, Y.', 'Ganswindt, A.','Koyama, N. '],
        title: 'Normalized Difference Vegetation Index, temperature, and age affect faecal thyroid hormone concentrations in free-ranging African elephants.',
        location: 'Conservation Physiology',
        citationCount: 5,
        date: '(2020)',
        href: 'https://academic.oup.com/conphys/article/8/1/coaa010/5815650?login=false',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID],
        title: 'The Impact of Wildlife Tourism on Elephants, Loxodonta Africana, in South Africa.',
        location: 'PhD Thesis, Liverpool John Moores University',
        href: 'http://researchonline.ljmu.ac.uk/id/eprint/13816/',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Pretorius, Y.','Ganswindt, A.','Koyama, N.'],
        title: 'Physiological stress response of African elephants to wildlife tourism in Madikwe Game Reserve, South Africa.',
        location: 'Wildlife Research',
        citationCount: 16,
        date: '(2019)',
        href: 'https://www.publish.csiro.au/wr/wr19045',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Pretorius, Y.','Koyama, N.'],
        title: 'Behavioural changes in African elephants in response to wildlife tourism.',
        location: 'Journal of Zoology',
        citationCount: 25,
        date: '(2019)',
        href: 'https://zslpublications.onlinelibrary.wiley.com/doi/abs/10.1111/jzo.12661',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Koyama, N.'],
        title: 'Safari tourism may make elephants more aggressive – but it’s still the best tool for conservation.',
        location: 'The Conversation (www.theconversation.com)',
        date: '(2019)',
        href: 'https://theconversation.com/safari-tourism-may-make-elephants-more-aggressive-but-its-still-the-best-tool-for-conservation-113611',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID],
        title: 'The Effect of Genotype on Attention Bias in Rhesus Macaques, Macaca mulatta, as a welfare indicator.',
        location: 'MPhil Thesis, Liverpool John Moores University',
        citationCount: 1,
        href: 'https://www.proquest.com/openview/98ce8cb6062c8a33e28045cec713de6d/1?pq-origsite=gscholar&cbl=18750&diss=y',
    },
]

const IndexPage: React.FC<PageProps> = () => {
    return (
        <AppPage
            hero={{
                src: HeroImage,
                alt: 'A safari vehicle with an approaching elephant.',
            }}
        >
            <Section>
                <PageHeader
                    title="Publications"
                    subtitle="Sharing findings with the scientific community"
                />
                <Flex
                    justifyContent='center'
                >
                    <Link
                        display='inline-block'
                        padding='1rem 2rem'
                        background={ThemeColors.pine}
                        marginBottom='2rem'
                        color='#fff'
                        _hover={{
                            textDecor: 'none',
                            background: ThemeColors.mint
                        }}
                        href='https://scholar.google.co.uk/citations?user=mRNzL2cAAAAJ&hl=en'
                        target='_blank'
                    >
                        Google Scholar
                    </Link>
                </Flex>
                <Box 
                    padding='1rem'
                >
                    {
                        REFERENCES.map((reference, index) => (
                            <Reference index={index} {...reference} />
                        ))
                    }
                </Box>
            </Section>
        </AppPage>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Publications</title>