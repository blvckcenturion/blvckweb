import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import useWindowDimensions from "../../utils/WindowDimensions";
import { useInView } from "react-intersection-observer";
import { Div } from "../GlobalComponents";
import { FooterWrapper, Icon } from "./Components";
import { H2, generalVariants } from '../GlobalComponents';
import { contact } from "../../utils/data";

const Footer = () => {
    const { width } = useWindowDimensions()
    const bigScreen = width >= 1000;
    const controls = useAnimation();
    const [ref, inView] = useInView({ trackVisibility: false, triggerOnce: true });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <FooterWrapper
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.7 }}
            variants={generalVariants}>
            <Div height={"5%"} justify={"flex-start"} align={"flex-start"}>
                <Div style={{ backgroundColor: "var(--blvck)" }} width={"60%"} height={"3px"} />
            </Div>
            <Div height={"95%"} direction={bigScreen ? "row" : "column"}>
                <Div width={bigScreen ? "50%" : "100%"} height={bigScreen ? "100%" : "50%"}>
                    <Div width={"90%"} height={"80%"} direction={"row"}>
                        {contact.map((e, i) => <Icon icon={e.icon} key={i} href={e.href} />)}
                    </Div>
                </Div>
                <Div width={bigScreen ? "50%" : "100%"} height={bigScreen ? "100%" : "50%"}>
                    <H2 color={"var(--blvck)"}>SANTIAGO @ {new Date().getFullYear()}</H2>
                </Div>
            </Div>
        </FooterWrapper>
    )
}
export default Footer