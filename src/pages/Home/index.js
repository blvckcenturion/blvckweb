import React from 'react'
import { Div, SectionWrapper, PageContent } from '../../components/GlobalComponents'
import MarcusRidingHorse from '../../assets/images/marcus-on-horse.png'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { homeSections } from '../../utils/data'
import Footer from '../../components/Footer'
import { MainImage, ToText, BlvckCenturionText, WelcomeText, ArrowWrapper, Arrow, HomeSection} from './Components'

const Home = () => {
    return (
        <PageContent>
            <SectionWrapper style={{ justifyContent: "center" }}>
                <Div width={"100%"} height={"100%"} >
                    <MainImage src={MarcusRidingHorse} alt="Marcus Aurelius Riding a horse" />
                    <WelcomeText>WELCOME</WelcomeText>
                    <ToText>TO</ToText>
                    <BlvckCenturionText>BLVCK <br />CENTURION</BlvckCenturionText>
                    <ArrowWrapper width={"10%"} height={"25%"}>
                        <Arrow icon={faAngleDoubleDown} />
                    </ArrowWrapper>
                </Div>
            </SectionWrapper>
            {homeSections.map((e,i) => <HomeSection key={i} id={i+1} src={e.src} title={e.title} btnText={e.btnText} parragraph={e.parragraph} primary={i%2 !== 0}></HomeSection>)}            
            <Footer/>
        </PageContent>
    )
}

export default Home
