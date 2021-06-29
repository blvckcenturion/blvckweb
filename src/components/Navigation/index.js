import React, { useState } from 'react'
import { Div, H1, Text, defaultTransition } from '../GlobalComponents'
import useWindowDimensions from '../../utils/WindowDimensions'
import { Icon, NavButton, Nav, Links, Quote, Social, Number, H4, headingVariants, socialVariants, scaleYvariants, downFadeVariants, wrapperVariants } from './components'
import { Global, css } from '@emotion/react'
import { contact } from '../../utils/data'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { useTranslation } from 'react-i18next'


const Navigation = () => {
    const { width } = useWindowDimensions();
    const mediumScreen = width >= 768
    const bigScreen = width >= 1000
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [timerDone, setTimerDone] = useState(true)
    const sections = [{ text: t("navigation.titles.about"), to: "/about" }, { text: t("navigation.titles.metrics"), to: "/metrics" }, { text: t("navigation.titles.blog"), to: "/blog" }]
    const animate = isOpen ? "open" : "closed"
    const triggerNav = (e) => {
        if (timerDone) {
            setIsOpen(!isOpen)
            setTimerDone(false)
            setTimeout(() => setTimerDone(true), mediumScreen ? 3500 : 100)
        }
    }
    const opacity = [0, 1]
    return (
        <>
            {
                bigScreen
                    ? <NavButton
                        animate={{ opacity, scale: [0.5, 1] }}
                        transition={{ delay: 4, duration: 0.5, ...defaultTransition }}
                        isOpen={isOpen}
                        onClick={() => triggerNav()}>{isOpen ? "close" : "menu"}</NavButton>
                    : <NavBar isOpen={isOpen} triggerNav={triggerNav} />
            }
            <Div
                style={{ position: "fixed" }}
                animate={animate} initial={false}
                variants={wrapperVariants}
                transition={{ duration: .4, delay: mediumScreen ? isOpen ? 0 : 3.2 : isOpen ? 0 : 1.9, ...defaultTransition }}>
                <Global styles={css`body{overflow:${isOpen ? "hidden" : "initial"}}`} />
                <Nav width={"100vw"} direction={"row"} align={bigScreen ? "space-evenly" : "flex-end"}>
                    <Links
                        animate={animate}
                        variants={scaleYvariants}
                        transition={{ delay: isOpen ? .4 : 2.7, duration: .4, ...defaultTransition }}
                        width={mediumScreen ? "70%" : "100%"}
                        align={mediumScreen ? "stretch" : "center"}
                        height={bigScreen ? "100%" : width >= 700 ? "90%" : "88%"}>
                        <Div
                            align={mediumScreen ? "start" : "center"}
                            height={bigScreen ? "100%" : "80%"}>
                            {
                                sections
                                    .map((e, i) =>
                                        <Link
                                            onClick={() => { setIsOpen(!isOpen) }}
                                            style={{ textDecoration: "none"}}
                                            to={e.to}
                                            key={i}>
                                            <H1
                                                initial={false}
                                                transition={{ duration: .4, delay: ((isOpen ? .7 : 0) + (i * .4)), ...defaultTransition }}
                                                animate={animate}
                                                color={"var(--white)"}
                                                variants={headingVariants}>{e.text}</H1>
                                        </Link>)
                            }
                        </Div>
                        {
                            !mediumScreen &&
                            <Div
                                initial={false}
                                animate={animate}
                                variants={wrapperVariants}
                                transition={{ duration: .7, delay: isOpen ? 1.9 : 1.2, ...defaultTransition }}
                                height={"20%"}
                                width={"80%"}
                                style={{ borderTop: "2px solid var(--white)" }}
                                direction={"row"}>
                                {contact.map((e, i) => <Icon icon={e.icon} key={i} href={e.href} />)}
                            </Div>}
                    </Links>
                    {mediumScreen && <Div width={"35%"} align={"stretch"} height={bigScreen ? "100%" : "92%"}>
                        <Quote
                            initial={false}
                            animate={animate}
                            variants={downFadeVariants}
                            transition={{ duration: .5, delay: isOpen ? 1.9 : 1.2, ...defaultTransition }}
                            height={"50%"}>
                            <Text style={{ padding: "30px 10px 0 10px" }}>“ceaseless work, brilliant strategy, unrelenting optimism, and ruthless determination.”</Text>
                            <Text><i>Larry Ellison</i></Text>
                        </Quote>
                        <Div height={"50%"}>
                            {contact.map((e, i) => {
                                return (
                                    <Social
                                        initial={false}
                                        animate={animate}
                                        variants={socialVariants}
                                        transition={{ duration: .3, delay: (isOpen ? 2.4 : 1.7) + (i * .2), ...defaultTransition }}
                                        key={i} href={e.href}
                                        target="_blank"
                                        rel="noreferrer">
                                        <Number>0{i + 1}</Number>
                                        <H4>{e.name}</H4>
                                    </Social>
                                )
                            }
                            )
                            }
                        </Div>
                    </Div>}
                </Nav>
            </Div>
        </>
    )
}

export default Navigation
