import * as React from 'react'
import { Link } from 'gatsby'
import Hamburger from './hamburger.png'
import CadillacLogo from './cadillac_logo_w.svg'



const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav className='top-0 z-10 bg-opacity-50 fixed w-full'>
                <ul className="hidden sm:flex items-center lg:text-sm justify-between mx-14">
                    {/* <li className='text-center py-2 px-4 text-white hover:bg-zinc-600'><Link to="/"><img src={CadillacLogo} width="30px" /></Link></li> */}
                    <li className='text-center py-4 px-4 text-white hover:bg-zinc-600'><Link to="/">Vehicles</Link></li>
                    <li className='text-center py-4 px-4 text-white hover:bg-zinc-600'><Link to="/"><img src={CadillacLogo} width="30px" /></Link></li>
                    <li className='text-center py-4 px-4 text-white hover:bg-zinc-600'><Link to="/about">EARNHARD CADILLAC</Link></li>

                </ul>
                <ul className="sm:hidden text-center bg-opacity-50 text-white flex justify-between">
                    <li className='text-center py-2 px-4'> <img src={Hamburger} width="30px" /></li>
                    <li className='text-center py-2 px-4'> <img src={CadillacLogo} width="30px" /> </li>
                </ul>
            </nav>
            <main className="-top-0">
                {/* <h1>{pageTitle}</h1> */}
                {children}
            </main>
        </div>
    )
}
export default Layout