import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Container from "./utilities/Container"
import FlexRow from "./utilities/FlexRow"

interface FooterProps {
    siteTitle: string
}

const PageFooter = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    a {
        color: #fff;
        text-decoration: none;
        transition: color 0.15s ease-in-out;
        &:hover {
            color: #e9e8e8;
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
