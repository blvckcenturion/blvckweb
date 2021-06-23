import React from 'react'
import { Div, H1 } from './GlobalComponents'
import { ReactComponent as Logo } from '../assets/images/logo.svg'



const PageLoader = () => {
    return (
        <Div height={"100vh"} width={"100vw"}>
            <Div width={"60%"} height={"40%"}>
                <Div height={"80%"} animate={{ scale: [0.7, 1, 0.7] }} transition={{ delay: 0, repeat: Infinity, repeatDelay: 1 }}>
                    <Logo />
                </Div>
                <H1>LOADING..</H1>
            </Div>
        </Div>
    )
}

export default PageLoader
