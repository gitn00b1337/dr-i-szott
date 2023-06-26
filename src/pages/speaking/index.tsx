import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Box, Text } from "@chakra-ui/react";
import { AppPage } from "../../components/app-page";
// import HeroImage from '../../images/tracking.jpg'
import { Section } from "../../components/section";
import { PageHeader } from "../../components/page-header";
import { RoleWithImage } from "../../components/role-with-image";
import { TextBlock } from "../../components/text-block";
import HeroImage from "../../images/speaking_hero.png";
import SpeakingPodcastImage from "../../images/speaking_podcast.png";
import SpeakingScentsImage from "../../images/speaking_scents.png";
import SpeakingTeachingImage from "../../images/speaking_teaching.jpeg";
import SpeakingStakeholdersImage from "../../images/speaking_stakeholders.png";

const IndexPage: React.FC<PageProps> = () => (
    <AppPage
        hero={{
            src: HeroImage,
            alt: 'Dr Szott doing field work with an elephant in the background.',
        }}
    >
        <Section>
            <PageHeader
                title="Speaking"
                subtitle="Sharing the wonders of conservation, science, and research" />
                <Box
                    background='#f7f7f7'
                    padding='3rem'
                    borderRadius='1rem'
                    margin='1rem'
                >
                    <TextBlock
                        text="I love to talk. In general, but especially about conservation, research and animals. I have delivered presentations across the world to a huge range of people and audiences and in a variety of settings. Whether it’s a classroom of 5-year olds I want to inspire, a lecture hall of university students to showcase what academic research involves, a scientific conference to share my latest findings, a meeting with government officials whose support is required, or at the field to upskill my team: outreach is integral to my work."
                    />
                </Box>
            <RoleWithImage
                imagePosition="left"
                alwaysShowImage={true}
                text={[
                    'I have given presentations in person and online at conferences such as the European Conference on Behavioural Biology (2018, UK), the ASAB Winter Conference (2021, online), The Power of Scents (2022, Tanzania), Noses for Nature (2022, online), LivLabs Meetings (2018, UK), and (in August 2023) the Behaviour Congress in Bielefeld.',
                ]}
                company=''
                role='Scientific Conferences'
                src={SpeakingScentsImage}
                alt='' 
            />
            <RoleWithImage
                imagePosition="right"
                alwaysShowImage={true}
                text={[
                 'Throughout my postgraduate degrees, I have delivered lectures to students at my university and for two years in a row, I have been invited as a guest lecturer to Bristol University to deliver presentations about my research at APOPO to psychology students. I have also mentored and supervised a range of undergraduate and postgraduate students, interns, and volunteers.',
                ]}
                company=''
                role='Scientific Teaching'
                src={SpeakingTeachingImage}
                alt='' 
            />
            <RoleWithImage
                imagePosition="left"
                alwaysShowImage={true}
                text={[
                 'Often, support of a range of agencies, governments, or others is needed to be able to carry out research. I have given presentations to government officials in South Africa, Germany, the UK, and Tanzania. In addition, I have recently worked closely with  Tanzanian wildlife, port, and revenue authorities. I regularly present my work in formal and informal settings to donors, either verbally, or through written reports.',
                ]}
                company=''
                role='Stakeholders'
                src={SpeakingStakeholdersImage}
                alt='' 
            />
            <RoleWithImage
                imagePosition="right"
                alwaysShowImage={true}
                text={[
                 'I have featured on a wide range of podcasts. These include Science Friction, BBC Earth Podcast, Logistics with Purpose, others. In 2022, a team of filmmakers came to visit me at the field to gather content for National Geographic & Disney’s ‘Team Sayari’.'
                ]}
                company=''
                role='Podcasts & TV'
                src={SpeakingPodcastImage}
                alt='' 
            />
        </Section>
    </AppPage>
)

export default IndexPage;

export const Head: HeadFC = () => <title>Speaking</title>