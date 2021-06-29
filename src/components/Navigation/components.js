import styled from "@emotion/styled"
import { Div } from "../GlobalComponents"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export const NavButton = styled(motion.button)`
width: 80px;
height: 80px;
position: fixed;
top: 20px;
right: 20px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
background-color: transparent;
border: 2px solid var(--blvck);
font-family: 'SFProDisplay';
opacity: 0;
z-index: 100;
`
export const Social = styled(motion.a)`
width: 100%;
height: 20%;
border-bottom: 2px solid var(--blvck);
display: flex;
flex-direction: row;
:last-child{
    border-bottom: none;
}
box-sizing: border-box;
text-decoration: none;
color: var(--white);
`

export const Number = styled(motion.h5)`
width: 15%;

font-family: 'Extended Main';
font-size: 1rem;
padding: 20px;
margin: 0;
`

export const H4 = styled(motion.h4)`
font-family: "SFProDisplay";
font-size: 2vw;
width: 80%;
margin: 0;
padding: 0 0 0 30px;
align-self: center;
letter-spacing: 0.1em;
`

export const Links = styled(Div)`
border-right: 2px solid var(--blvck);
box-sizing: border-box;
padding-left: 5%;
@media (max-width: 767px) {
    border: none;
    padding: 0;
}
`

export const Nav = styled(Div)`
background-color: var(--green);
color: var(--white);
z-index: 99;
padding-left:120px;
box-sizing: border-box;
@media(max-width: 767px){
    padding: 0;
}
@media (min-width: 768px) and (max-width: 1000px){
    padding-left:0;
}
`

export const Quote = styled(Div)`
border-bottom: 2px solid var(--blvck);
`


export const Icon = ({ icon, href }) => {
    return <motion.a style={{ textDecoration: "none", color: "var(--white)" }} href={href} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={icon} size="lg" /></motion.a>
}

export const NavDiv = styled(Div)`
position: fixed;
box-sizing: border-box;
z-index: 100;
background-color: var(--white);
`

export const Title = styled(motion.h2)`
font-size: 3vw;
font-family: 'Extended Main';
`

export const NavVariants = {
    open: {
        backgroundColor: 'transparent',
    },
    closed: {
        backgroundColor: 'var(--white)'
    }
}
export const headingVariants = {
    open: {
        x: 0,
        opacity: 1,
    },
    closed: {
        opacity: 0,
        x: -100
    }
}
export const socialVariants = {
    open: {
        x: 0,
        opacity: 1
    },
    closed: {
        opacity: 0,
        x: 600
    }
}

export const scaleYvariants = {
    open: {
        scaleY: 1,
        opacity: 1,
    },
    closed: {
        scaleY: 0,
        opacity: 0
    }
}

export const downFadeVariants = {
    open: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0,
        y: -200
    }
}


export const wrapperVariants = {
    open: {
        zIndex: 99,
        opacity: 1,
        scale: 1,
        x: 0,

    },
    closed: {
        zIndex: -1,
        opacity: 0,
        scale: 0,
        x: -200
    }
}