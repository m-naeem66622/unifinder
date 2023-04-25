import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Github from '../assets/github.svg'

function Header() {
    const location = useLocation();
    console.log()
    return (
        <header className="mb-auto">
            <div>
                <h3 className="float-start mb-0">Uni<span className='text-warning'>Finder</span></h3>
                <nav className="nav nav-masthead justify-content-center float-end">
                    <a href="https://github.com/m-naeem66622" rel="noreferrer" target='_blank' className='mx-3 mt-2'><img id='github-logo' width="27px" src={Github} alt="github-logo" /></a>
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header