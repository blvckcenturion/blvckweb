import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { ReactComponent as logo } from '../assets/images/logo.svg'
import useWindowDimensions from "../utils/WindowDimensions"
const { width } = useWindowDimensions;

export const MediumScreen = width >= 768
export const BigScreen = width >= 1000

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
    font-size: 2vmax;
    font-family: 'Extended Main';
    color: ${props => props.color ? props.color : "var(--blvck)"};
    @media (max-width: 1050px){
        font-size: 2.5vmax;
    }
    @media (max-width: 767px){
        font-size: 2vmax;
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
@media (min-width: 768px) and (max-width: 1050px){
    font-size: 2.8vmax;
}
@media (max-width: 767px){
    font-size: 2.5vmax;
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

export const CircularButton = ({children, onClick, color}) => {
    const Button = styled(motion.button)`
        border: none;
        background-color: transparent;
        width: 12vmax;
        height: 12vmax;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px){
            width: 16vmax;
            height: 16vmax;
        }
        @media (max-width: 1050px) and (min-width: 768px){
            width: 12vmax;
            height: 12vmax;
        }
    `
    const ButtonText = styled(motion.p)`
        height: 12vmax;
        position: absolute;
        font-size: 2vmax;
        color: ${props => props.color ? props.color : "var(--green)"};
        transform: rotate(${props => props.deg}deg);
        margin: 0;
        @media (max-width: 767px){
            height: 16vmax;
            font-size: 2.5vmax;

        }
        @media (max-width: 1050px) and (min-width: 768px){
            height: 12vmax;
            font-size: 1.2rem;
        }
    `
    
    const H4 = styled.h4`
        font-size: 1.3vmax;
        font-family: 'Extended Main';
        color: ${props => props.color ? props.color : "var(--green)"};
        @media (max-width: 767px){
            font-size: 2vmax;
        }
    `

    const deg = 360 / children.length
    return (
        <Button onClick={() => console.log('sapo')}>
            <Div height={"1%"} width={"1%"} animate={{rotate:[0,-360]}} transition={{ duration: 6, repeatType: "loop", repeatDelay: 0, repeat: Infinity }}  style={{position: "absolute"}}>
            {children.split("").map((e,i) => {
                return <ButtonText color={color} key={i} deg={`${i*deg}`}>{e}</ButtonText>
            })}
            </Div>
            <H4  color={color} >Toca<br/> Aqui</H4>
        </Button>
    )
}