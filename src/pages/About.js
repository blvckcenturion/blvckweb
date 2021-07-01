import React from 'react'
import { PageContent, SectionWrapper, Section, Div, P, H2, H1 } from '../components/GlobalComponents'
import useWindowDimensions from '../utils/WindowDimensions'
import styled from '@emotion/styled'
import Footer from '../components/Footer'
import Me from '../assets/images/me.jpg'
import { motion } from 'framer-motion'
import Leonardo from '../assets/images/leonardo.png'

const About = () => {
    const Grid = styled(Div)`
        display: grid;
        grid-template-rows: ${props => props.rows ? props.rows : "1fr"};
        grid-template-columns:  ${props => props.columns ? props.columns : "50% 50%"};
        align-items: center;
        justify-items: center;
    `
    const Parragraph = styled(P)`
        font-size: 1.8vmax;
        @media (min-width: 768px) and (max-width: 1050px){
            font-size: 2vmax;
        }
        @media (max-width: 767px){
            font-size: 1.3vmax;
        }
    `

    const Img = styled.div`
        width: 100%;
        height: 100%;
        background: center/cover no-repeat url("${Me}");
        -webkit-box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.10); 
        box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.10);
    `
    const GridElement = styled(Div)`
        grid-area: ${props => props.area};
        width: 90%;
        border: 2px solid var(--green);
        box-shadow: 10px -10px 0 -2px #F5F5F5, 10px -10px var(--green),
        20px -20px 0 -2px #F5F5F5;
        box-sizing: border-box;
    `

    const GridText = styled(H2)`
        margin: 0 10%;
        letter-spacing: 5px;
        font-size: 1.4vmax;
        @media (min-width: 768px) and (max-width: 1050px){
            font-size: 1.5vmax;
        }
        @media (max-width: 767px){
            font-size: 1.2vmax;
        }
    `

    const Skill = styled(Div)`
        border: 2px solid var(--blvck);
        box-shadow: 10px -10px 0 -2px #F5F5F5, 10px -10px var(--green),
        20px -20px 0 -2px #F5F5F5, 20px -20px var(--blvck),
        30px -30px 0 -2px #F5F5F5;
        width: 70%;
        height: 60%;
        text-align: center;
        @media (max-width: 768px){
            height: 70%;
            width: 80%;
            box-shadow: 10px -10px 0 -2px #F5F5F5, 10px -10px var(--green),
        20px -20px 0 -2px #F5F5F5;
        }
    `
    const MainImage = styled(motion.img)`
        position: absolute;
        width: 70vmax;
        top: 10%;
        left: 20%;
        z-index: 2;
        @media(max-width: 999px){
            width: 90vmax;
            left: 0%;
            top: 20%;
        }

    `
    const WelcomeText = styled(H1)`
        position: absolute;
        top: 10%;
        left: 56%;
        z-index: 1;
        color: var(--green);
    `
    const IamText = styled(H1)`
        position: absolute;
        color: var(--green);
        font-size: 5vmax; 
        top: 20%;
        left: 30%;
        @media (min-width: 768px) and (max-width: 1050px){
            font-size: 6vmax;
        }
        @media (max-width: 767px){
            font-size: 4.5vmax;
        }
    `
    const SantiagoText = styled(IamText)`
        top: 35%;
        left: 55%;
        z-index: 3;
        color: var(--blvck)
    `
    const Desc = styled(H2)`
        position: absolute;
        top: 50%;
        text-align: end;
        color: var(--blvck);
        left: 15%;
        z-index: 3;
    `
    const Desc2 = styled(Desc)`
        top: 70%;
        left: 65%;
        text-align: start;
        color: var(--green);
    `
    const { width } = useWindowDimensions()
    const mediumScreen = width >= 768
    return (
        <PageContent>
            <SectionWrapper>
                <Div width={"100%"} height={"100%"} style={{overflowX: "hidden"}}>
                    <MainImage src={Leonardo} alt="Statue of Leonardo Da Vinci"/>
                    <WelcomeText>HELLO.</WelcomeText>
                    <IamText>I AM</IamText>
                    <SantiagoText>SANTIAGO.</SantiagoText>
                    <Desc>MAINLY A <br/>SOFTWARE DEVELOPER</Desc>
                    <Desc2>WILLING TO LEARN <br/>ABOUT EVERYTHING</Desc2>
                </Div>
            </SectionWrapper>
            <Section primary title={"WHO-AM-I"} id={1}>
                <Grid>
                    <Div width={"80%"} height={"80%"}>
                        <Parragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Parragraph>
                    </Div>
                    <Div width={mediumScreen ? "80%" : "100%"} height={mediumScreen ? "80%" : "60%"}>
                        <Img />
                    </Div>
                </Grid>
            </Section>
            <Section title={"WHAT-AM-I"} id={2}>
                <Grid rows={"repeat(4,1fr)"} width={mediumScreen ? "80%" : "90%"} height={mediumScreen ? "80%" : "80%"} style={{ gridTemplateAreas: "'a b' 'c d' 'e f' 'h g'", gap: "20px"}}>
                    <GridElement area={"a"} primary>
                        <GridText>001/<br />SOFTWARE DEVELOPER</GridText>
                    </GridElement>
                    <GridElement area={"d"}>
                        <GridText>002/<br />CREATIVE ENGINEER</GridText>
                    </GridElement>
                    <GridElement area={"e"} primary>
                        <GridText style={{ wordBreak: `${mediumScreen ? "initial" : "break-all"}` }}>003/<br />ENTREPRENEUR</GridText>
                    </GridElement>
                    <GridElement area={"g"}>
                        <GridText>004/<br />SOFTWARE DESIGNER</GridText>
                    </GridElement>
                </Grid>
            </Section>
            <Section primary title={"WHAT-I-DO"} id={3}>
                <Div width={"80%"} height={"80%"}>

                    <Div height={"20%"} direction={"row"} style={{ borderBottom: "2px solid var(--blvck)" }}>
                        <Div width={"20%"}>
                            <H2>01</H2>
                        </Div>
                        <Div width={"85%"} align={"flex-start"}>
                            <P style={{ textAlign: "start" }}>FULL STACK WEB DEVELOPMENT</P>
                        </Div>
                    </Div>
                    <Div height={"20%"} direction={"row"} style={{ borderBottom: "2px solid var(--blvck)" }}>
                        <Div width={"20%"}>
                            <H2>02</H2>
                        </Div>
                        <Div width={"85%"} align={"flex-start"}>
                            <P style={{ textAlign: "start" }}>MOBILE APP DEVELOPMENT</P>
                        </Div>
                    </Div>
                    <Div height={"20%"} direction={"row"} style={{ borderBottom: "2px solid var(--blvck)" }}>
                        <Div width={"20%"}>
                            <H2>03</H2>
                        </Div>
                        <Div width={"85%"} align={"flex-start"}>
                            <P style={{ textAlign: "start" }}>BLOCKCHAIN DEVELOPMENT</P>
                        </Div>
                    </Div>
                    <Div height={"20%"} direction={"row"} style={{ borderBottom: "2px solid var(--blvck)" }}>
                        <Div width={"20%"}>
                            <H2>04</H2>
                        </Div>
                        <Div width={"85%"} align={"flex-start"}>
                            <P style={{ textAlign: "start" }}>SOFTWARE ARCHITECTURE & DESIGN</P>
                        </Div>
                    </Div>
                    <Div height={"20%"} direction={"row"} style={{ borderBottom: "2px solid var(--blvck)" }}>
                        <Div width={"20%"}>
                            <H2>05</H2>
                        </Div>
                        <Div width={"85%"} align={"flex-start"}>
                            <P style={{ textAlign: "start" }}>DIGITAL BUSINESS</P>
                        </Div>
                    </Div>
                </Div>
            </Section>
            <Section title={"MY-SKILLS"} id={4} height={mediumScreen ? "170vh" : "280vh"} divHeight={ mediumScreen ? "10%" : "8%"}>
                <Div width={mediumScreen ? "95%" : "95%"} height={ mediumScreen ? "90%" : "100%"} direction={mediumScreen ? "row" : "column"}>
                    <Div width={mediumScreen ? "45%" : "95%"}  height={mediumScreen ? "100%" : "65%"} align={"flex-start"}>
                        <Div height={"15%"}>
                            <H2 style={{ textAlign: "center" }}>SOFTWARE <br />SKILLS</H2>
                        </Div>
                        <Grid rows={"repeat(8, 1fr)"}>
                            <Skill>JAVASCRIPT</Skill>
                            <Skill>DART</Skill>
                            <Skill>PYTHON</Skill>
                            <Skill>HTML</Skill>
                            <Skill>CSS</Skill>
                            <Skill>REACT NATIVE</Skill>
                            <Skill>C#</Skill>
                            <Skill>SOLIDITY</Skill>
                            <Skill>POSTGRESQL</Skill>
                            <Skill>JEST</Skill>
                            <Skill>DJANGO</Skill>
                            <Skill>GIT</Skill>
                            <Skill>REACT</Skill>
                            <Skill>FLUTTER</Skill>
                            <Skill>MONGODB</Skill>
                            <Skill>NGINX</Skill>
                        </Grid>
                    </Div>
                    <Div width={mediumScreen ? "45%" : "95%"}  height={mediumScreen ? "100%" : "35%"}>
                        <Div height={"15%"}>
                            <H2 style={{ textAlign: "center" }}>OTHER <br />SKILLS</H2>
                        </Div>
                        <Grid rows={mediumScreen ? "repeat(8, 1fr)" : "repeat(6,1fr)"}>
                            <Skill>WIREFRAMING</Skill>
                            <Skill>PREMIERE PRO</Skill>
                            <Skill>ILLUSTRATOR </Skill>
                            <Skill>PHOTOSHOP</Skill>
                            <Skill>PROTOTYPING</Skill>
                            <Skill>WRITING</Skill>
                            <Skill>PUBLIC SPEAKING</Skill>
                            <Skill>CRITICAL THINKING</Skill>
                            <Skill>PROBLEM SOLVING</Skill>
                            <Skill>SALES</Skill>
                        </Grid>
                    </Div>
                </Div>
            </Section>
            <Footer />
        </PageContent>
    )
}

export default About
