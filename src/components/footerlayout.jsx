import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const FooterLayout = ({}) => {
    return (
        <footer className="text-white bg-black bg-opacity-80 fixed inset-x-0 bottom-0 flex justify-between items-center font-Cadillac_Sans_A font-light text-base sm:text-sm">
            <ul className="mx-14 my-4">
                <li><a href="https://www.cadillac.com/contact-us">Contact</a></li>
            </ul>
            <ul className="">
                <li><a href="https://www.cadillac.com/how-to">Tutorials</a></li>
            </ul>
            <ul className="mx-14">
                <li><a href="https://www.cadillac.com/ownercenter/recalls">Recall</a></li>
            </ul>
        </footer>
    )
}


export default FooterLayout