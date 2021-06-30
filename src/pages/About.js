import React from 'react'
import { PageContent, SectionWrapper, Section, Div} from '../components/GlobalComponents'
import styled from '@emotion/styled'
import Footer from '../components/Footer'
const About = () => {
    const Grid = styled(Div)`
        display: grid;
        
    `
    return (
        <PageContent>
            <SectionWrapper>
                <Div width={"100%"} height={"100%"}>
                    
                </Div>
            </SectionWrapper>
                <Section primary title={"WHO-AM-I"} id={1}>

                </Section>
                <Section  title={"WHAT-AM-I"} id={1}>
                    
                </Section>
                <Section primary title={"WHAT-I-DO"} id={1}>
                    
                </Section>
                <Section  title={"MY-SKILLS"} id={1}>
                    
                </Section>
            <Footer/>
        </PageContent>
    )
}

export default About
