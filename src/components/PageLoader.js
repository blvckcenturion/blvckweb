import React from 'react'
import { Div, H1 } from './GlobalComponents'
import { ReactComponent as Logo } from '../assets/images/logo.svg'



const PageLoader = () => {
    return (
        <Div height={"100vh"} width={"100vw"} animate={{opacity:1}} style={{opacity:0}} transition={{delay:1, duration:1}}>
            <Div width={"80%"} height={"60%"}>
                <Div height={"60%"} animate={{ scale: [0.7, 1, 0.7], opacity: [0.6,1] }} transition={{ delay: 2, repeat: Infinity, repeatDelay: 1 }}>
                    <Logo />
                </Div>
                <H1>LOADING</H1>
            </Div>
        </Div>
    )
}

export default PageLoader
