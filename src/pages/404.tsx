import * as React from "react"
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

export const Head = () => (
    <>
        <title>404 not found: PetSpace</title>
        <meta
            name="description"
            content="Your place to learn about various pet species and breeds"
        />
    </>
)

const FourOhFour = () => {
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
