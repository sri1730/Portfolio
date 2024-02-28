import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import '../App.css';
import SriImg from '../assets/srivardhan.jpg';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-header ">
        <div className="flex items-center w-1/4">
            <img className='md:w-1/5 mr-4 rounded-full headerimg' src={SriImg} alt="Srivardhan Vasudevan" />
            <a className="font-bold text-black" href="#">Srivardhan Vasudevan</a>
        </div>
        <nav className="hidden md:block">
            <ul className="flex text-white ">
                <li><a href="/">Home</a></li>
                <li><a href="Portfolio/#about">About</a></li>

                <li><a href={process.env.PUBLIC_URL + '/Portfolio/#resume'}>Resume</a></li>

                

                <li><a href="/#about">Technical Skills</a></li>
                <li><a href="/#projects">Professional Experience</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#about">Technical Skills</a></li>
                <li><a href="/#projects">Professional Experience</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
}
