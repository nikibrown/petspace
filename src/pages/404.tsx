import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Link as TextPageLink } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/utilities/Section"
import styled from "styled-components"
import { designTokens } from "../components/designTokens"

const PageLink = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`

export const Head: HeadFC = () => <title>FourOhFour not found! Oh No!</title>

const FourOhFour: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Section>
                <h1>404: Not Found</h1>
                <h1>🐱 🐶 🐸 🐦</h1>
                <p>
                    Try going back to the <PageLink to="/">homepage</PageLink>
                </p>
            </Section>
        </Layout>
    )
}

export default FourOhFour
