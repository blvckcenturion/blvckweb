import React, {useState, useEffect} from 'react'
import { Div, SectionWrapper, PageContent } from '../../components/GlobalComponents'
import MarcusRidingHorse from '../../assets/images/marcus-on-horse.png'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { homeSections } from '../../utils/data'
import Footer from '../../components/Footer'
import { MainImage, ToText, BlvckCenturionText, WelcomeText, ArrowWrapper, Arrow, HomeSection } from './Components'
import { useLocation } from 'react-router'
import { Global, css } from '@emotion/react'
const Home = () => {
    const location = useLocation()
    const [timeLock, setTimeLock] = useState(false)
    useEffect(() => {
        if (location.pathname === "/"){
            setTimeLock(true)
            setTimeout(() => setTimeLock(false), 4200)
        }
    }, [location.pathname])
    
    return (
        <PageContent>
            <Global styles={css`html,body{overflow: ${timeLock ? "hidden" : "initial"};}`}/>
            <SectionWrapper>
                <Div width={"100%"} height={"100%"} >
                    <MainImage src={MarcusRidingHorse} alt="Statue of Marcus Aurelius riding a horse" animate={{y: [100,0], opacity: 1, scale: [0,1]}} transition={{delay: 3.1, duration: 0.5}}/>
                    <WelcomeText animate={{y: [-200,0], opacity: 1, scale: [0.5, 1]}} transition={{delay: 2.4, duration: 0.5}}>WELCOME</WelcomeText>
                    <ToText animate={{x: [-200,0], opacity: 1, scale: [0.5, 1]}} transition={{delay: 3.6, duration: 0.3}}>TO</ToText>
                    <BlvckCenturionText animate={{x: [300,0], opacity: 1,scale: [0.5, 1]}} transition={{delay: 3.9, duration: 0.3}}>BLVCK <br />CENTURION</BlvckCenturionText>
                    <ArrowWrapper animate={{ scale: [0.7, 1, 0.7], opacity: [0,1,0], y: [-70,0,-70]}} transition={{ delay: 4.2, repeat: Infinity}}  width={"10%"} height={"25%"}>
                        <Arrow icon={faAngleDoubleDown} />
                    </ArrowWrapper>
                </Div>
            </SectionWrapper>
            {
                homeSections
                    .map(
                        (e, i) => <HomeSection key={i} id={i + 1} src={e.src} title={e.title} btnText={e.btnText} parragraph={e.parragraph} primary={i % 2 !== 0} />
                    )
            }
            <Footer />
        </PageContent>
    )
}

export default Home
