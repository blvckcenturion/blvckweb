import React from 'react'
import styled from "@emotion/styled"
import { useTranslation } from 'react-i18next'
import { Div } from '../components/GlobalComponents'

const LanguageSelector = ({ width, color }) => {
    const { i18n } = useTranslation();
    const LanguageSelector = styled.button`
        font-family: "Extended Main";
        border: ${props => props.primary ? `2px solid var(--blvck)` : 'none'};
        padding: 10px;
        border-radius: 10px;
        background-color: transparent;
        color: ${props => props.color};
        :last-child{
            margin-right: ${props => props.primary ? '10px' : '0'};
        }
        :first-of-type{
            margin-left: ${props => props.primary ? '10px' : '0'};
        } 
    `
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <Div direction={"row"} >
            <LanguageSelector type="button" onClick={() => changeLanguage('es')} primary={i18n.language.split("-")[0] === "es"}>ES</LanguageSelector>
            <LanguageSelector type="button" onClick={() => changeLanguage('en')} primary={i18n.language.split("-")[0] !== "es"}>EN</LanguageSelector>
        </Div>
    )
}

export default LanguageSelector
