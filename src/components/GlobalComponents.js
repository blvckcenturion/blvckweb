import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import { ReactComponent as logo } from '../assets/images/logo.svg'
import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer'

export const H1 = styled(motion.h1)`
font-size: 3.75vmax; 
font-family: 'Extended Main';
color: ${props => props.color ? props.color : "var(--blvck)"};
@media (min-width: 768px) and (max-width: 1050px){
    font-size: 4.5vmax;
}
@media (max-width: 767px){
    font-size: 3.5vmax;
}
`

export const H2 = styled(motion.h2)`
    font-size: 1.75vmax;
    font-family: 'Extended Main';
    color: ${props => props.color ? props.color : "var(--green)"};
    @media (max-width: 1050px){
        font-size: 2vmax;
    }
    @media (max-width: 767px){
        font-size: 1.75vmax;
    }
`
export const H3 = styled(motion.h3)`
    font-size: 2.5vmax;
    font-family: 'Extended Main';
    color: ${props => props.color ? props.color : "var(--blvck)"};
    @media (max-width: 1050px){
        font-size: 3vmax;
    }
    @media (max-width: 767px){
        font-size: 2.5vmax;
    }
`

export const Div = styled(motion.div)`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "column"};
    justify-content: ${props => props.justify ? props.justify : "space-evenly"};
    align-items: ${props => props.align ? props.align : "center"};
`

export const Text = styled.p`
font-size: 2.5vh;
font-family: 'SFProDisplay';
text-align: justify;
letter-spacing: 2px;
margin: 0;
`
export const P = styled.p`
font-size: 2.3vmax;
font-family: 'SFProDisplay';
text-align: justify;
letter-spacing: 5px;
margin: 0;
text-overflow: ellipsis;

@media (min-width: 768px) and (max-width: 1050px){
    font-size: 2.5vmax;
}
@media (max-width: 767px){
    font-size: 1.8vmax;
}
`

const Logo = motion(logo);

export const AnimatedLogo = () => {
    return (
        <Div
            animate={{ y: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Logo
                animate={{ rotate: [-180, 0] }}
                transition={{ duration: 0.4, delay: 1 }} />
        </Div>
    )
}

export const defaultTransition = { stiffness: 1000, type: "tween" }

export const CircularButton = ({ children, onClick, color }) => {
    const Button = styled(motion.button)`
        border: none;
        background-color: transparent;
        width: 14vmax;
        height: 14vmax;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 999px){
            width: 18vmax;
            height: 18vmax;
        }

    `
    const ButtonText = styled(motion.p)`
        height: 14vmax;
        position: absolute;
        font-size: 2.3vmax;
        color: ${props => props.color ? props.color : "var(--green)"};
        transform: rotate(${props => props.deg}deg);
        margin: 0;
        @media (max-width: 999px){
            height: 18vmax;
            font-size: 3vmax;

        }
        
    `

    const H4 = styled.h4`
        font-size: 1.3vmax;
        font-family: 'Extended Main';
        color: ${props => props.color ? props.color : "var(--green)"};
        @media (max-width: 999px){
            font-size: 2.3vmax;
        }
    `

    const deg = 360 / children.length
    return (
        <Button onClick={() => console.log('sapo')}>
            <Div height={"1%"} width={"1%"} animate={{ rotate: [0, -360] }} transition={{ duration: 6, repeatType: "loop", repeatDelay: 0, repeat: Infinity }} style={{ position: "absolute" }}>
                {children.split("").map((e, i) => {
                    return <ButtonText color={color} key={i} deg={`${i * deg}`}>{e}</ButtonText>
                })}
            </Div>
            <H4 color={color} >Click<br /> Here</H4>
        </Button>
    )
}

export const PageContent = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: flex-end;
@media(max-width: 999px){
    padding-top: 11vh;
}
`

export const SectionWrapper = styled(motion.section)`
width:calc(100% - 120px);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
background-color: ${props => props.bgColor};
@media(max-width: 999px){
    height: 89vh;
    width: 100%;
}
@media (min-width: 2000px){
    width: 93%;
}
`

export const generalVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
}

export const Section = ({ primary, title, id, children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ trackVisibility: false, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    return (
        <SectionWrapper
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.7 }}
            variants={generalVariants}>
            <Div height={"20%"}>
                <Div height={"50%"} direction={"row"}>
                    <Div width={"60%"} style={{ borderTop: "3px solid var(--blvck)", order: `${primary ? "0" : "2"}`, boxSizing: "border-box" }} />
                    <Div width={"40%"} justify={"flex-end"} align={primary ? "flex-start" : "flex-end"}>
                        <H2 style={{ margin: "0" }}>00-{id}/{new Date().getFullYear()}</H2>
                    </Div>
                </Div>
                <Div height={"50%"}>
                    <H3>+ {title}®</H3>
                </Div>
            </Div>
            <Div height={"80%"}>
                {children}
            </Div>
        </SectionWrapper>
    );
}
