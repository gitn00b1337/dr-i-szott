import * as React from "react"
import type { HeadFC, PageProps, } from "gatsby"
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { AppPage } from "../components/app-page";
import { PageHeader } from "../components/page-header";
import { TextBlock } from "../components/text-block";
import { Quote } from "../components/quote";
import { ImageTextBlock } from "../components/image-text-block";
import { QuoteWithImage } from "../components/quote-with-image";
import HeroImage from '../images/about-hero3.png';
import { Section } from "../components/section";
import ConservationImage from '../images/tracking.jpg';
import { ImageDivider } from "../components/image-divider";
import CommunitiesImage from '../images/communities.jpg';
import ResilienceImage from '../images/resilience.jpg';
import ResearchImage from '../images/research.jpg';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <AppPage
            hero={{
                src: HeroImage,
                alt: 'Dr Szott doing field work with an elephant in the background.',
            }}
        >
            <Section>
                <PageHeader
                    title="Dr Isabelle Szott"
                    subtitle="My passion is conservation and welfare - of all living beings."
                />
                <Box
                    background='#f7f7f7'
                    padding='3rem'
                    borderRadius='1rem'
                >
                    <TextBlock
                        focused
                        text="I love research and project management for wildlife conservation and animal behaviour. There is nothing more meaningful than protecting nature through sustainable solutions that involve local communities and strive for human-wildlife coexistence."
                    />
                    <Quote
                        text='Their rumbles rolled through the air like distant thunder approaching, vibrating through the undulating ground and the roots of trees, rallying families and friends from the hills and rivers, sending among themselves greetings and recognitions and news of where they had been; sending to us a sign of something coming.'
                        author='Carl Safina, Beyond Words: What Animals Think and Feel'
                    />
                </Box>
                
            </Section>
            <ImageDivider
                src={ConservationImage}
                alt='A game drive vehicle at sunset with guests watching an elephant'
            />
            <Section>
                <Box
                    margin='2rem 0 1rem 0'
                >
                    <Text 
                        textStyle='sectionHeader'
                        textAlign='center'
                    >
                    To me, working in conservation is...
                    </Text>
                </Box> 
                <Flex 
                    margin='2rem 0 0 0'
                >

                    <ImageTextBlock
                        image={{
                            src: CommunitiesImage,
                            alt: '',
                        }}
                        header='Communities'
                        text={{
                            text: 'Working with local communities is the key to creating sustainable solutions. Education is the first step but this goes two ways: wherever we go, we can learn from each other. I believe in empowering people, providing opportunities, and in appreciating cultural differences as an advantage to fostering symbiotic relationships.',
                        }}
                    />
                    <ImageTextBlock
                        image={{
                            src: ResearchImage,
                            alt: '',
                        }}
                        header='Research'
                        text={{
                            text: 'Whether it’s collecting data in the field or sitting at a desk and screaming at R, research is an integral part of my work. And I love it. Creating ways to explore new ideas and ask questions of species who don’t speak our language are incredibly satisfying. Without research to achieve credible and sound results and guide policies and decisions, the world would end in chaos.',
                        }}
                    />
                    <ImageTextBlock
                        image={{
                            src: ResilienceImage,
                            alt: '',
                        }}
                        header='Resilience'
                        text={{
                            text: 'The world is a multitude of things, often frustrating or even disheartening. Appreciating the beauty in everything around me, like an African sunset or colleagues becoming friends, are what fuels me to continue my work. Tupo Pamoja: we are together! By making meaningful connections, I not only find resilience but also hope for the future. ',
                        }}
                    />
                </Flex>
                <Box
                    margin='2rem 0 1rem 0'
                >
                    <Text 
                        color='gray.500'
                        textAlign='center'
                    >
                    And so much more.
                    </Text>
                </Box> 
            </Section>
            <Section>
                <QuoteWithImage
                    imagePosition="left"
                    text='It was a real pleasure for me to work with Izzy as my supervisor during my internship at APOPO! Although it was not planned at first that she would be taking on this role, she did an excellent job. She guided me through my project and was always ready to provide useful advice, all while enhancing my self-reflection and leaving me a lot of autonomy. Thanks to her dedication, my internship was a great and very instructive experience.'
                    author='Sylvie Jadoul'
                    role='Student, Vives College'
                />
            </Section>
        </AppPage>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Dr Isabelle Szott</title>