import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Achievements from './sections/Achievements'
import GithubContributions from './sections/GithubContributions'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SEO from './components/SEO'
import Analytics from './components/Analytics'

const App = () => {
  return (
    <Analytics>
      <SEO />
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Achievements />
        <GithubContributions />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </Analytics>
  )
}

export default App