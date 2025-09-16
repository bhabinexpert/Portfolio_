import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import{StarBackground} from '@/components/StarBackground';
import Navbar from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { About } from '../components/AboutSection';
import { Skills } from '../components/SkillsSection';
import { Project } from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';



export const Home = ()=> {
  return <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
    <ThemeToggle/>

    <StarBackground/>

    <Navbar/>

    {/* main componennt */}

    <main>
      <HeroSection/>
      <About/>
      <Skills/>
      <Project/>
      <ContactSection/>
    </main>

    <Footer/>
    

    
    
    
      
    </div>
  
}


