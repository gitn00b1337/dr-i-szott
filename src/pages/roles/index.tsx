import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { AppPage } from "../../components/app-page";
import { Section } from "../../components/section";
import { QuoteWithImage } from "../../components/quote-with-image";
import HeroImage from '../../images/tracking.jpg'
import { RoleWithImage } from "../../components/role-with-image";
import { PageHeader } from "../../components/page-header";
import RolesApopoImage from "../../images/roles_apopo.png";
import RolesNkwichiImage from "../../images/roles_nkwichi.jpg";
import RolesEcoWiceImage from "../../images/roles_ecowice.jpg";
import RolesPHDImage from "../../images/roles_phd.png";
import RolesBSCImage from "../../images/roles_bsc.png";
import RolesMSCImage from "../../images/roles_msc.png";
import RolesPMImage from "../../images/roles_pm.png";
import RolesDanceImage from "../../images/roles_dance.png";
import RolesWavesOfActionImage from "../../images/wavesofaction.jpeg";

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
                    title="Roles"
                    subtitle="Research&nbsp;&nbsp;&nbsp;&nbsp;Leadership&nbsp;&nbsp;&nbsp;&nbsp;Teamwork"
                />
                <RoleWithImage
                    imagePosition="right"
                    alwaysShowImage={true}
                    text={[
                        'At Okeanos, I work with a small team focused on ocean conservation. I evaluate funding requests, communicate and coordinate with partners, and arrange events and workshops. The largest project supported by the foundation is our own youth initiative \'Waves of Action\' where we support and engage young adults to find their own path towards ocean conservation. Our initiative is centered on marine ecology, inner development, and sustainable development. Aside from conceptualising, organising, and running so-called OceanCamps in France and Sweden for young adults, I also work with individual groups on realising their projects such as a documentary, an educational booklet and stakeholder engagement work, communication and peer-to-peer learning of topics, or development of workshops.'
                    ]}
                    company='Okeanos Foundation for the Sea'
                    role='Project & Community Manager'
                    src={RolesWavesOfActionImage}
                    alt='Izzy Szott, Okeanos'
                />
                <RoleWithImage
                    imagePosition="left"
                    alwaysShowImage={true}
                    text={[
                        'Since 2022, I have been functioning as a scientific advisor to ECOWICE, a small Tanzanian NGO working out of Morogoro. ECOWICE conduct fantastic work on the ground with local communities to create sustainable livelihoods and foster human-wildlife coexistence in southern Tanzania, especially around Mikumi National Park. Due to my expertise on elephant behaviour and ecology, I am able to advise on the human-elephant-conflict solutions such as chili farming and establishment of beehive fences.'
                    ]}
                    company='ECOWICE - Tanzania'
                    role='Scientific Advisor'
                    src={RolesEcoWiceImage}
                    alt='Izzy Szott, ECOWICE'
                />
                <RoleWithImage
                    imagePosition="right"
                    alwaysShowImage={true}
                    text={[
                        'I worked as a senior behavioural research scientist at APOPO between February 2021-August 2024. At APOPO, I trained African giant pouched rats for scent detection purposes. I was the lead scientist training rats to detect illegally trafficked wildlife in shipping containers. This project was, at the time, funded by UNDP, USAID, and GIZ, amongst others. In addition, I was involved in a range of other research projects to support APOPO’s work. I directly supervised a team of Tanzanian researchers and animal trainers for my project, as well as visiting volunteers and students.',
                        'Aside from planning, monitoring, and evaluating research, I continuously provided capacity building to my team, engaged in scientific conferences and publications, and gave talks and interviews to TV, radio, and podcasts. In 2022, I organised an international week-long scent detection workshop across multidisciplinary fields hosted in Tanzania: ‘The Power of Scents: Olfactory Research from Innovation to Application & Validation’. This not only brought together leading experts across a variety of fields, but also showcased the outstanding scientific work coming from the Global South.',
                    ]}
                    company='APOPO - Tanzania'
                    role='Behavioural Research Scientist'
                    src={RolesApopoImage}
                    alt='Izzy Szott, APOPO'
                />
                <RoleWithImage
                    imagePosition="left"
                    alwaysShowImage={true}
                    text={[
                        'In 2020, I was hired as the general manager of Nkwichi Lodge and Manda Wilderness Community Trust, Mozambique. Whilst waiting for my visa, COVID-19 brought the world to a standstill, resulting in the lodge not surviving this hit. Therefore, my work pivoted and focused on remotely managing the 40 employees in Mozambique, preparing detailed inventories, the sale of lodge assets, and coordinating and executing the termination of contracts. This involved close work with the stakeholders, Mozambican lawyers and Ministries, and the staff on the ground. We then re-employed a number of short-term staff to ensure the continued protection and upkeep of assets on the ground and operational management such as firebreaks. In addition, a new model of self-catered tourism in line with health and safety regulations allowed us to maintain some income for the remaining employees. Unfortunately, it did not create a sustainable position for myself, especially with continued lockdowns preventing travel. If you are looking for an incredible experience on the shore of Lake Niassa, do reach out to the Nkwichi team!'
                    ]}
                    company='Nkwichi - Mozambique'
                    role='General Manager'
                    src={RolesNkwichiImage}
                    alt=''
                />
                <Grid gridTemplateColumns={{
                    base: 'repeat(1,1fr)',
                    sm: 'repeat(1,1fr)',
                    md: 'repeat(2,1fr)',
                    lg: 'repeat(3,1fr)'
                }}>
                    <Flex>
                        <RoleWithImage
                            imagePosition="top"
                            alwaysShowImage={true}
                            text={[
                                'My PhD assessed the effect of wildlife tourism on free-ranging African elephants in SA under supervision of the brilliant Dr  Koyama. I obtained competitive funding from an Erasmus scheme, as well as from my university, and raised thousands of additional pounds to facilitate the collaring of three elephants as well as hormone analyses. My research included behavioural data collection in the field, sampling faecal matter for glucocorticoids and thyroid hormones, recording elephant vocalisations, and tracking movement of three herds across the reserve to conduct spatial analyses.'
                            ]}
                            company='PHD'
                            role=''
                            src={RolesPHDImage}
                            alt=''
                        />
                    </Flex>
                    <Flex>
                        <RoleWithImage
                            imagePosition="top"
                            alwaysShowImage={true}
                            text={[
                                'I obtained an MPhil under supervision of Dr Emily Bethell in 2015. For this, I investigated the effect of underlying genotypes on cognitive biases in ex-Situ Rhesus macaques. Here, we used positive reinforcement and clicker training to get monkeys to sit still enough to look at some images whilst we recorded their eye gaze. Your underlying emotional state can affect what you pay attention to (or what you avoid) and my research formed a small steppingstone towards developing a tool for the assessment of welfare of captive primates.'
                            ]}
                            company='MPhil'
                            role=''
                            src={RolesMSCImage}
                            alt=''
                        />
                    </Flex>
                    <Flex>
                        <RoleWithImage
                            imagePosition="top"
                            alwaysShowImage={true}
                            text={[
                                'From 2011-2014, I studied Animal Behaviour and obtained a 1st Class degree. My final year project investigated whether artificial feeding was related to increased aggression in a herd of semi-captive African elephants in South Africa. In addition, I gained a broad background on how to sample animal behaviour, statistical analyses, wildlife forensics, ecology and evolution, cognition, primate behaviour, and animal welfare.'
                            ]}
                            company='BSc (Hons)'
                            role=''
                            src={RolesBSCImage}
                            alt=''
                        />
                    </Flex>
                    <Flex>
                        <RoleWithImage
                            imagePosition="top"
                            alwaysShowImage={true}
                            text={[
                                'I have been involved in a variety of project management roles since the age of 17. Many of these were related to my part-time work as a dance teacher at a community centre in my hometown, Heidelberg. In 2007 and 2011 I acted as assistant project manager for city exchange projects, first to the Ukraine and then to France. I managed a group of dancers, organised performances and workshops. This then led to additional roles at the Theater of Heidelberg for a special project bringing together professionals and laymen actors, musicians, and dancers. In 2014, I led a summer program for 8-14 year old children at the Heidelberg Zoo, where we conducted behavioural studies and analyses of a variety of species.'
                            ]}
                            company='Project Management'
                            role=''
                            src={RolesPMImage}
                            alt=''
                        />
                    </Flex>
                    <Flex>
                        <RoleWithImage
                            imagePosition="top"
                            alwaysShowImage={true}
                            text={[
                                'I have been working as a dance teacher for children and adults since I was 13 years old. In addition, I have over ten years of experience as a waitress, barrista, and restaurant line manager in various countries. I also conducted internships with a German radio station and at a hotel, as well as volunteering with a range of animal organisations such as ARCAS (Guatemala), the RSPCA and The Society for Abandoned Animals (UK), and The African Elephant Research Unit (South Africa).'
                            ]}
                            company='Other Roles'
                            role=''
                            src={RolesDanceImage}
                            alt=''
                        />
                    </Flex>
                </Grid>
            </Section>
        </AppPage>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Roles</title>