import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const FooterLayout = ({}) => {
    return (
        <footer className="text-yellow-500 bg-black bg-opacity-50 fixed inset-x-0 bottom-0 flex justify-between items-center">
            <ul className="mx-14">
                <li>Adres</li>
                <li>Phone</li>
            </ul>
            <ul className="">
                <li>Adres2</li>
                <li>Phone2</li>
            </ul>
            <ul className="mx-14">
                <li>Adres333333333333333333333</li>
                <li>Phone3333333333333333333333333</li>
            </ul>
        </footer>
    )
}


export default FooterLayout