import React from 'react'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Footer from '../pages/Footer'
import Hero from './Hero'
import InfoSection from '../pages/InfoSection'
import SubFooter from './SubFooter'
import CopyRight from './CopyRight'


// IMPORT DATA
import { InfoData } from '../data/InfoData'
import { SliderData } from '../data/SliderData'
import { ContactData } from '../data/ContactData'
import { menuData } from '../data/MenuData'

const Home = () => {
    return (
        <>
            <Hero sliders={SliderData} />
            <InfoSection {...InfoData} />
            <About />
            <Services />
            <Contact />
            <SubFooter />
            <Footer ContactData={ContactData} menuData={menuData} />
            <CopyRight />
        </>
    )
}

export default Home
