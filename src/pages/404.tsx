import * as React from "react"
import Layout from "../components/Layout"
import PageLink from "../components/PageLink"
import { Section, Container } from "../components/ui"

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
                <Container>
                    <h1>404: Not Found</h1>
                    <h1>🐱 🐶 🐸 🐦</h1>
                    <p>
                        Try going back to the{" "}
                        <PageLink url={`/`}>homepage</PageLink>
                    </p>
                </Container>
            </Section>
        </Layout>
    )
}

export default FourOhFour
