import * as React from "react"
import Layout from "../components/Layout"
import PageLink from "../components/PageLink"
import Section from "../components/utilities/Section"

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
                    Try going back to the{" "}
                    <PageLink url={`/`}>homepage</PageLink>
                </p>
            </Section>
        </Layout>
    )
}

export default FourOhFour
