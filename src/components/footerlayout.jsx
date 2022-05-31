import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const FooterLayout = ({}) => {
    return (
        <footer className="text-white  bg-gradient-to-t from-slate-900 to- via- via- fixed inset-x-0 bottom-0 flex justify-between items-center font-Cadillac_Sans_A font-light text-base sm:text-sm">
            <ul className="mx-11 my-4">
                <li className="hover:text-yellow-500"><a href="https://www.cadillac.com/contact-us">CONTACT</a></li>
            </ul>
            <ul className="">
                <li className="hover:text-yellow-500"><a href="https://www.cadillac.com/how-to">TUTORIALS</a></li>
            </ul>
            <ul className="mx-14">
        <li className="hover:text-yellow-500"><a href="https://www.cadillac.com/ownercenter/recalls">RECALLS</a></li>
            </ul>
        </footer>
    )
}


export default FooterLayout