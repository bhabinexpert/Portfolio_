import React, { useEffect, useState } from 'react'
import {cn} from "@/lib/utils";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contacts", href: "#contact"},    
]

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.screenY > 10)  
        }

        window.addEventListener("scroll", handleScroll);
        return()=> window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
    <nav className= {cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5"
    )}
    >
        <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                <span className='relative z-10'>
                    {" "}
                    <span className='text-glow text-foreground'> Bhabin </span> Portolio
                </span>
            </a>
            {/* Desktop nav */}
            <div className='hidden md:flex space-x-8 mr-6'>
                {navItems.map((items, key)=>(
                    <a href={items.href}>{items.name}</a>
                ))}
            </div>






            {/* Mobile Version  */}

        </div>


    </nav>
  )
}

export default Navbar
