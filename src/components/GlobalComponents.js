import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { ReactComponent as logo } from '../assets/images/logo.svg'
import useWindowDimensions from "../utils/WindowDimensions"
const { width } = useWindowDimensions;

export const MediumScreen = width >= 768
export const BigScreen = width >= 1000

export const H1 = styled(motion.h1)`
font-size: 3.75vw; 
font-family: 'Extended Main';
color: ${props => props.color ? props.color : "var(--blvck)"};
@media (min-width: 768px) and (max-width: 1050px){
    font-size: 4vw;
}
@media (max-width: 767px){
    font-size: 7vw;
}
`

export const H2 = styled(motion.h2)`
    font-size: 1.75vw;
    font-family: 'Extended Main';
    color: ${props => props.color ? props.color : "var(--green)"};
    @media (min-width: 768px) and (max-width: 1050px){
        font-size: 2vw;
    }
    @media (max-width: 767px){
        font-size: 3.75vw;
    }
`
export const H3 = styled(motion.h3)`
    font-size: 2vw;
    font-family: 'Extended Main';
    color: ${props => props.color ? props.color : "var(--blvck)"};
    @media (min-width: 768px) and (max-width: 1050px){
        font-size: 2.5vw;
    }
    @media (max-width: 767px){
        font-size: 4.5vw;
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
font-size: 2.3vw;
font-family: 'SFProDisplay';
text-align: justify;
letter-spacing: 5px;
margin: 0;
@media (min-width: 768px) and (max-width: 1050px){
    font-size: 3.5vw;
}
@media (max-width: 767px){
    font-size: 4.5vw;
}
`

const Logo = motion(logo);

export const AnimatedLogo = () => {
    return (
        <Div
            animate={{ y: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.7 }}>
            <Logo
                animate={{ rotate: [-180, 0] }}
                transition={{ duration: 0.6, delay: 1.4 }} />
        </Div>
    )
}

export const defaultTransition = { stiffness: 1000, type: "tween" }

export const CircularButton = ({children, onClick}) => {
    const Button = styled(motion.button)`
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        width: 15vw;
        height: 15vw;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    `
    const ButtonText = styled.p`
        height: 15vw;
        position: absolute;
        color: ${props => props.color ? props.color : "var(--blvck)"};
        transform: rotate(${props => props.deg}deg);
        // transform-origin: 0 100%;
        margin: 0;
        
    `
    const deg = 360 / children.length
    return (
        <Button animate={{rotate:[0,-360]}} transition={{ duration: 6, repeatType: "loop", repeatDelay: 0, repeat: Infinity }} onClick={() => console.log('sapo')}>
            {children.split("").map((e,i) => {
                return <ButtonText key={i} deg={`${i*deg}`}>{e}</ButtonText>
            })}
        </Button>
    )
}