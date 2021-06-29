import styled from "@emotion/styled"
import { motion } from "framer-motion"
import {H1, Div, Section, CircularButton, P} from '../../components/GlobalComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainImage = styled(motion.img)`
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

export const WelcomeText = styled(H1)`
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
export const ToText = styled(H1)`
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

export const BlvckCenturionText = styled(H1)`
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

export const Arrow = styled(FontAwesomeIcon)`
font-size: 6vw;
color: var(--green);
@media (min-width: 501px) and (max-width: 999px){
    font-size: 10vw;
}
@media(max-width: 500px){
    font-size: 15vw;
}
`

export const ArrowWrapper = styled(Div)`
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

const Grid = styled(Div)`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: 1fr;
grid-template-areas: "a b";
@media(max-width: 999px){
    grid-template-columns: ${ props => props.primary ? "60% 40%" : "40% 60%"};
}
`
const Img = styled(motion.div)`
width: 70%;
height: 80%;
background:url(${props => props.src});
background-color: #0d0d0d;
-webkit-box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.28); 
box-shadow: 0px 0px 27px 6px rgba(0,0,0,0.28);
@media(max-width:999px){
    width: 100%;
    height: 70%;
}

`

export const HomeSection = ({primary, title, id, parragraph, to,src, btnText}) => {
    return (
        <Section primary={primary} title={title} id={id}> 
            <Grid height={"80%"} primary={primary}>
                <Div justify={"flex-start"} style={{ gridArea: `${primary ? "a" : "b"}` }}>
                    <Div width={"80%"} height={"60%"} >
                        <P>{parragraph}</P>
                    </Div>
                    <CircularButton>{btnText}</CircularButton>
                </Div>
                <Div>
                    <Img src={src} />
                </Div>
            </Grid>
        </Section>
    )
}