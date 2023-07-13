import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// components & ui
import { designTokens } from "./designTokens"
import { GlobalStyles } from "../globalStyles"
import Footer from "./Footer"
import Header from "./Header"
import styled from "styled-components"

interface LayoutProps {
    children: React.ReactNode
}

const Main = styled.main`
    padding: ${designTokens.spacing.small} 0 0 0;
`

const Layout = ({ children }: LayoutProps) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <GlobalStyles />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>{children}</Main>
            <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    )
}

export default Layout
