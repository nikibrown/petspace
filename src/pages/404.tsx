import * as React from "react"

// components & ui
import Layout from "../components/Layout"
import { Section, Container, PageLink, Heading, Text } from "../components/ui"

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
                    <Heading variant="heading1" as="h1">
                        404: Not Found
                    </Heading>
                    <Heading variant="heading1" as="h1">
                        🐱 🐶 🐸 🐦
                    </Heading>
                    <Text>
                        Try going back to the{" "}
                        <PageLink to={`/`}>homepage</PageLink>
                    </Text>
                </Container>
            </Section>
        </Layout>
    )
}

export default FourOhFour
