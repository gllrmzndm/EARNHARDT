import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const FooterLayout = ({}) => {
    return (
        <footer className="text-white bg-gradient-to-b from-bg-neutral-600 to- bg-opacity-20 bg-black fixed inset-x-0 bottom-0 flex justify-between items-center font-Cadillac_Sans_A font-light text-base sm:text-sm">
            <ul className="mx-11 my-4">
                <li><a href="https://www.cadillac.com/contact-us">CONTACT</a></li>
            </ul>
            <ul className="">
                <li><a href="https://www.cadillac.com/how-to">TUTORIALS</a></li>
            </ul>
            <ul className="mx-14">
                <li><a href="https://www.cadillac.com/ownercenter/recalls">RECALLS</a></li>
            </ul>
        </footer>
    )
}


export default FooterLayout