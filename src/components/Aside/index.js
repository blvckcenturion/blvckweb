import React from 'react'
import { useTranslation } from 'react-i18next'
import useWindowDimensions from '../../utils/WindowDimensions'
import { Div, AnimatedLogo } from '../GlobalComponents'
import { Slogan, Name, Wrapper } from './components'
import LanguageSelector from '../../utils/LanguageSelector'


const Aside = () => {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();
    return (
        width >= 1000 &&
        <Wrapper
            animate={{ scaleY: [0, 1], opacity: [0, 1] }} transition={{ delay: 0, duration: 0.7 }}>
            <Div
                animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5 }}
                height={"20%"} style={{ borderBottom: "2px solid var(--blvck)" }}
                justify={"center"}>
                <AnimatedLogo />
            </Div>
            <Div height={"65%"} direction={"row"} align={"start"}>
                <Slogan
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ delay: 2.8, duration: 0.3 }}
                    style={{ height: "55vh" }}>{t('slogan')}</Slogan>
                <Name
                    animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                    transition={{ delay: 2, duration: 0.8 }}>BLVCK CENTURION</Name>
            </Div>
            <Div
                animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5 }}
                height={"15%"}
                style={{ borderTop: "2px solid var(--blvck)" }}>
                <Div animate={{ x: [-120, 0], opacity: [0, 1] }} transition={{ delay: 3.1, duration: 0.5 }}>
                    <LanguageSelector />
                </Div>
            </Div>
        </Wrapper>
    )
}

export default Aside
