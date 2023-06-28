import * as React from "react"
import styled from "styled-components"
import { designTokens } from "./designTokens"

import { Link } from "gatsby"
import Container from "./utilities/Container"
import FlexRow from "./utilities/FlexRow"

interface FooterProps {
    siteTitle: string
}

const PageFooter = styled.footer`
    background-color: ${designTokens.colors.brandDark};
    color: ${designTokens.colors.brandLight};
    padding: 20px 0;
    a {
        color: ${designTokens.colors.brandLight};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    p {
        margin: 0;
    }
`

const Footer: React.FC<FooterProps> = ({ siteTitle }) => {
    return (
        <PageFooter>
            <Container>
                <FlexRow>
                    <p>
                        &copy; <Link to="/">{siteTitle}</Link> 2023
                    </p>
                    <p>Woof, Meow, Ribbit, Squeak</p>
                </FlexRow>
            </Container>
        </PageFooter>
    )
}

export default Footer
