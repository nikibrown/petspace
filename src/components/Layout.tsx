import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyles } from "../globalStyles"
import Container from "./utilities/Container"
import styled from "styled-components"

interface LayoutProps {
    children: React.ReactNode
}

const Main = styled.main`
    padding: 50px 0;
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
            <Main>
                <Container>{children}</Container>
            </Main>
            <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    )
}

export default Layout
