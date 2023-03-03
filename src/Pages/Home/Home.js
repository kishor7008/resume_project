import React from 'react'
import Banner from '../../Shared_Component/Banner.js';
import Header from '../../Shared_Component/Header.js';
import Logo from './Logo.js';
import Grid from './Grid_Section';
import Profile from './PersonalDetails';
import Qualification from './Qualification';
import Skills from '../../Shared_Component/Skills.js';
import Project from './Project';
import Service from './Services';
import Testimonial from './Testimonials';
import Footer from '../../Shared_Component/Footer';

const Home = () => {
  return (
    <>
    <Header />
    <Banner />
    <Logo />
    <Grid />
    <Profile />
    <Qualification />
    <Skills />
    <Project />
    <Service />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Home;