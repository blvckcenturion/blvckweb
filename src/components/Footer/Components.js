import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterWrapper = styled(motion.footer)`
width:calc(100% - 120px);
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
@media(max-width: 999px){
    height: 30vh;
    width: 100%;
}
`

export const Socials = styled.a`
width: 4vmax;
height: 4vmax;
display: flex;
align-items: center;
justify-content: center;
color: var(--green);
border-radius: 50%;
border: 2px solid var(--green);
font-size: 1.8vmax;
@media(max-width: 999px){
    width: 8vmin;
    height: 8vmin;
    font-size: 4vmin;
}
`

export const Icon = ({ icon, href }) => {
    return <Socials href={href} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={icon} /></Socials>
}

