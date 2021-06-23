import styled from '@emotion/styled'
import React from 'react'
import {H1,H2,H3, Text, P} from '../components/GlobalComponents'

const Home = () => {
    const TestDiv = styled.div`
        margin: auto;
        width: 50%;
        border: 2px solid green;
        text-align:center;
        font-size: 30px;
        padding-top: 100px
    `
    return (
        <TestDiv>
            <H1>WELCOME</H1>
            <H2>00-1 / 2021</H2>
            <H3>+ ABOUT-ME®</H3>
            <P>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the </P>
            
        </TestDiv>
    )
}

export default Home
