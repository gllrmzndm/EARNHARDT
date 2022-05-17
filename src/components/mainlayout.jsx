import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const MainLayout = ({ children }) => {
    return (
        <main className="h-screen mb-auto">
        {children}
        </main>
    )
}


export default MainLayout