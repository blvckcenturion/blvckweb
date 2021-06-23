import React from 'react'
import useWindowDimensions from '../../utils/WindowDimensions'
import { Div, AnimatedLogo } from '../GlobalComponents'
import { HamburgerSpin } from "react-animated-burgers"
import { NavDiv, Title, NavVariants } from './components'


const NavBar = ({ isOpen, triggerNav }) => {
    const { width } = useWindowDimensions()
    const MediumScreen = width >= 768
    return (
        <NavDiv
            initial={false}
            height={width >= 700 ? "10%" : "12%"}
            animate={isOpen ? "open" : "closed"}
            variants={NavVariants}
            transition={{ delay: MediumScreen ? isOpen ? 0.2 : 4.6 : isOpen ? 0.3 : 1.95 }}>
            <Div
                animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ borderBottom: "var(--border)", opacity: 0 }}
                direction={"row"} >
                <Div
                    animate={{ y: [-100, 0] }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    width={"20%"}
                    style={{ borderRight: "var(--border)" }}>
                    <Div
                        animate={{ y: [-100, 0] }}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                        <AnimatedLogo />
                    </Div>
                </Div>
                <Div
                    width={"60%"}
                    animate={{ y: [-100, 0] }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    style={{ borderRight: "var(--border)" }}>
                    <Title
                        animate={{ x: [-30, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8, delay: 1.8 }}>BLVCK CENTURION</Title>
                </Div>
                <Div
                    animate={{ x: [-30, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.3, delay: 2.6 }}
                    width={"20%"}>
                    <HamburgerSpin isActive={isOpen} toggleButton={() => triggerNav()} />
                </Div>
            </Div>
        </NavDiv>
    )
}
export default NavBar
