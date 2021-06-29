import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { H1, H2, H3, Text, P, Div, CircularButton, SectionWrapper, PageContent } from '../components/GlobalComponents'
import { useAnimation } from 'framer-motion'
import useWindowDimensions from '../utils/WindowDimensions'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import MarcusRidingHorse from '../assets/images/marcus-on-horse.png'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Gif from '../assets/images/one.gif'
import Me from '../assets/images/me.jpg'


const Section = ({ primary }) => {
    const {width} = useWindowDimensions()
    const bigScreen = width >=1000;
    const controls = useAnimation();
    const [ref, inView] = useInView({ trackVisibility: false, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
    }

    const Grid = styled(Div)`
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 1fr;
        grid-template-areas: "a b";
        @media(max-width: 999px){
            grid-template-columns: ${primary ? "60% 40%" : "40% 60%" };
        }
    `
    const Img = styled.div`
        width: 70%;
        height: 80%;
        background:url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
        background-color: #0d0d0d;
        -webkit-box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.28); 
        box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.28);
        @media(max-width:999px){
            width: 100%;
            height: 70%;
        }

    `

    return (
        <SectionWrapper
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={variants}>
            <Div height={"20%"}>
                <Div height={"50%"} direction={"row"}>
                    <Div width={"60%"} style={{ borderTop: "3px solid var(--blvck)", order: `${primary ? "0": "2"}`, boxSizing: "border-box" }} />
                    <Div width={"40%"} justify={"flex-end"} align={primary ? "flex-start" : "flex-end"}>
                        <H2 style={{ margin: "0" }}>00-1/2021</H2>
                    </Div>
                </Div>
                <Div height={"50%"}>
                    <H3>+ WHO-AM-I®</H3>
                </Div>
            </Div>
            <Grid height={"80%"} >
                
                <Div justify={"flex-start"} style={{gridArea: `${primary ? "a" : "b"}`}}>
                    <Div width={"80%"} height={"60%"} >
                        <P>A dreamer, passionate, and a deep believer in technology, meet the incredible true story. meet the incredible true story.meet the incredible true story. meet the incredible true story.</P>
                    </Div>
                    <CircularButton >LEARN-MORE-ABOUT-ME-</CircularButton>
                </Div>
                <Div>
                    <Img/>
                </Div>
            </Grid>
        </SectionWrapper>
    );
}

const Home = () => {

    const { width, height } = useWindowDimensions()

    const Marcus = styled(motion.img)`
        position: absolute;
        top: 10%;
        padding-left: 3%;
        z-index: 10;
        width: 45vmin;
        @media(max-width:999px) and (min-width:501px){
            top: 20%;
        }
        @media(max-width: 500px){
            top: 25%;
            width: 60vmin;
            padding-left: 10%;
        }
    `

    const IntroText = styled(H1)`
        position: absolute;
        top: 9%;
        z-index: 1;
        margin: 0;
        color: var(--green);
        @media(max-width:999px) and (min-width:501px){
            top: 20%;
        }
        @media(max-width: 500px){
            top: 25%;
        }
    `
    const FirstText = styled(H1)`
        position: absolute;
        z-index: 1;
        margin: 0;
        top: 25%;
        right: 25%;
        font-size:4.5vmax;
        @media (min-width: 501px) and (max-width: 999px){
            font-size: 5vmax;
            top: 40%;
            right: 20%;
        }
        @media (max-width: 501px){
            font-size: 3.5vmax;
            top: 40%;
            right: 10%;
        }
        color: var(--green);
    `

    const SecondText = styled(H1)`
        position: absolute;
        z-index: 11;
        margin: 0;
        top: 45%;
        right: 40%;
        color: var(--green);
        @media (min-width: 501px) and (max-width: 999px){
            top: 50%;
            right: 40%;
        }
        @media(max-width: 500px){
            top: 52%;
            right: 30%;
        }

    `

    const ButtonWrapper = styled(Div)`
        position: absolute;
        left: 17%;
        top: 20%;
    `

    const Arrow = styled(FontAwesomeIcon)`
        font-size: 6vw;
        color: var(--green);
        @media (min-width: 501px) and (max-width: 999px){
            font-size: 10vw;
        }
        @media(max-width: 500px){
            font-size: 15vw;
        }
    `

    const ArrowWrapper = styled(Div)`
        position: absolute;
        bottom: 13%;
        right: 12%;
        @media (min-width: 501px) and (max-width: 999px){
            bottom: 7%;
        }
        @media(max-width: 500px){
            bottom: 4%;
        }
    `


    return (
        <PageContent>
            <SectionWrapper style={{ justifyContent: "center" }}>
                <Div width={"100%"} height={"100%"} >
                    <Marcus src={MarcusRidingHorse} alt="Marcus Aurelius Riding a horse" />
                    <IntroText>WELCOME</IntroText>
                    <FirstText>TO</FirstText>
                    <SecondText>BLVCK <br />CENTURION</SecondText>
                    <ButtonWrapper width={"15%"} height={"15%"}>
                    </ButtonWrapper>
                    <ArrowWrapper width={"10%"} height={"25%"}>
                        <Arrow icon={faAngleDoubleDown} />
                    </ArrowWrapper>
                </Div>
            </SectionWrapper>
            <Section>

            </Section>
            <Section primary>

            </Section>
        </PageContent>
    )
}

export default Home
