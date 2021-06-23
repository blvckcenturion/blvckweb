import styled from '@emotion/styled'
import { Div } from '../GlobalComponents'
import { motion } from 'framer-motion'

export const Wrapper = styled(Div)`
width: 120px;
position: fixed;
top: 0;
opacity: 0;
border-right: 2px solid var(--blvck);
z-index: 100;
@media (min-width: 2000px){
    width: 7vw;
}
`
export const Name = styled(motion.h2)`
font-size: 1.8vw;
font-family: "Extended Main";
color: var(--blvck);
writing-mode: vertical-rl;
margin: 50px 0;
text-align: start;
`
export const Slogan = styled(Name)`
font-family: "SFProDisplay";
font-size: 1rem;
letter-spacing: 2px;
`