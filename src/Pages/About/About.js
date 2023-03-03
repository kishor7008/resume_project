import React from 'react'
import Header from '../../Shared_Component/Header'
import Inner_banner from './Inner_banner'
import AboutSection1 from './AboutSection1'
import Text_Button from './Text_Button'
import AboutSection2 from './AboutSection2'
import Qualification from './Qualification'
import Skills from '../../Shared_Component/Skills'
import Footer from '../../Shared_Component/Footer'

const About = () => {
  return (
    <>
    <Header />
    <Inner_banner />
    <AboutSection1 />
    <Text_Button />
    <AboutSection2 />
    <Qualification />
    <Skills />
    <Footer />
    </>
  )
}

export default About;

// import React from 'react'

// const About = () => {
//   return (
//     <div>About section</div>
//   )
// }

// export default About;