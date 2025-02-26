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
        status: 'PUBLISHED',
        authors: [IzzyID, 'Webb, E.K.', 'Mshana, S.', 'Mshigeni, A.', 'Magesa, W.S.', 'Iyungu, A.', 'Saidi, M.', 'Van de Laak, D.', 'Schneider, M.', 'Dore, A.', 'Brebner, K.', 'Davies-Mostert, H.', 'Cox, C.','Fast, C.D.'],
        title: 'Ratting on wildlife crime: training African giant pouched rats to detect illegally trafficked wildlife.',
        location: 'Frontiers in Conservation Science',
        href: 'https://www.frontiersin.org/journals/conservation-science/articles/10.3389/fcosc.2024.1444126/full?utm_source=archives.internationalintrigue.io&utm_medium=newsletter&utm_campaign=what-s-happening-at-this-year-s-davos-in-the-desert&_bhlid=11f340181f40b48cc5cc6dbc88e6631da07b9366',
    },
    {
        status: 'PUBLISHED',
        authors: ['ERI Howarth', IzzyID, 'CL Witham', 'CS Wilding', 'EJ Bethell'],
        title: 'Genetic polymorphisms in the serotonin, dopamine and opioid pathways influence social attention in rhesus macaques (Macaca mulatta)',
        location: 'Plos one 18 (8), e0288108',
        date: '(2023)',
        href: 'https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=mRNzL2cAAAAJ&citation_for_view=mRNzL2cAAAAJ:Tyk-4Ss8FVUC'
    },
    {
        status: 'PUBLISHED',
        authors: ['Howarth, E.R.I.', 'Kemp, C.', 'Thatcher, H.R.', IzzyID],
        title: 'Developing and validating attention bias tools for assessing trait and state affect in animals: A worked example with Macaca mulatta.',
        location: 'Applied Animal Behaviour Science',
        citationCount: 20,
        date: '(2021)',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0168159120302860',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Pretorius, Y.', 'Ganswindt, A.','Koyama, N. '],
        title: 'Normalized difference vegetation index, temperature and age affect faecal thyroid hormone concentrations in free-ranging African elephants.',
        location: 'Conservation Physiology',
        citationCount: 6,
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
        citationCount: 20,
        date: '(2019)',
        href: 'https://www.publish.csiro.au/wr/wr19045',
    },
    {
        status: 'PUBLISHED',
        authors: [IzzyID, 'Pretorius, Y.','Koyama, N.'],
        title: 'Behavioural changes in African elephants in response to wildlife tourism.',
        location: 'Journal of Zoology',
        citationCount: 27,
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
        citationCount: 2,
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