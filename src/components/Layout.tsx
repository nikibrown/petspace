import * as React from "react"
import { designTokens } from "./designTokens"
import Footer from "./Footer"
import { GlobalStyles } from "../globalStyles"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import styled from "styled-components"

interface LayoutProps {
    children: React.ReactNode
}

const Main = styled.main`
    padding: ${designTokens.spacing.small} 0;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
