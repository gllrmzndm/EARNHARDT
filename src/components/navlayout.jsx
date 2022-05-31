import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Hamburger from '../assets/hamburger_64_w_2.svg'
import CadillacLogo from '../assets/cadillac_logo_w.svg'



const NavLayout = ({ pageTitle }) => {

  const data = useStaticQuery(graphql`
      query MyQueryandMyQuery {
    site {
      id
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header></header>
      <nav className='top-0 z-10 bg-gradient-to-b from-slate-900 to- via- via- fixed w-full font-Cadillac_Sans_A font-light'>
        <ul className="hidden sm:flex items-center lg:text-sm justify-between mx-14">
          {/* <li className='text-center py-2 px-4 text-white hover:bg-zinc-600'><Link to="/"><img src={CadillacLogo} width="30px" /></Link></li> */}
          <li className='text-center py-4 px-4 text-white hover:text-yellow-500 '><Link to="/evlife">EV LIFE</Link></li>
          <li className='ml-16 text-center py-4 px-4 text-white  animate-pulse hover:text-yellow-500 hover:border-b'><Link to="/"><img src={CadillacLogo} width="50px" /></Link></li>
          <li className='text-center py-4 px-4 text-white hover:text-yellow-500'><Link to="/blog">EARNHARD CADILLAC</Link></li>

        </ul>
        <ul className="sm:hidden text-center bg-opacity-50 text-white flex justify-between">
          <li className='text-center py-2 px-4'> <img src={Hamburger} width="30px" /></li>
          <li className='text-center py-2 px-4'> <img src={CadillacLogo} width="30px" /> </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavLayout