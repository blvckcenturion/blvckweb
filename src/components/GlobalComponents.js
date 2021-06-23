import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { ReactComponent as logo } from '../assets/images/logo.svg'
import useWindowDimensions from "../utils/WindowDimensions"
const { width } = useWindowDimensions;

export const MediumScreen = width >= 768
export const BigScreen = width >= 1000

export const H1 = styled(motion.h1)`
font-size: 3vw; 
font-family: 'Extended Main';
color: ${props => props.color ? props.color : "var(--blvck)"};
@media (min-width: 768px) and (max-width: 1050px){
    font-size: 4vw;
}
@media (max-width: 767px){
    font-size: 5vw;
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
font-size: 2vh;
font-family: 'Roboto Mono';
text-align: justify;
margin: 0;
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
