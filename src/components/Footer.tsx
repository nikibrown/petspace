import * as React from "react"
import { Container, FlexContainer } from "./ui"
import { designTokens } from "./designTokens"
import styled from "styled-components"

interface FooterProps {
    siteTitle: string
}

const FooterWrapper = styled.footer`
    background-color: ${designTokens.colors.brandDark};
    color: ${designTokens.colors.brandLight};
    padding: 50px 0 20px 0;
    a {
        color: ${designTokens.colors.brandLight};
        text-decoration: none;
    }

    p {
        margin: 0;
    }
`

const FooterEmoji = styled.span`
    font-size: 20px;
    padding: 4px;
    position: relative;
    &:hover {
        cursor: pointer;
        top: -2px;
        .tooltip {
            display: block;
        }
    }
`

const ToolTip = styled.span`
    display: none;
    background-color: ${designTokens.colors.brandLight};
    border-radius: 6px;
    color: ${designTokens.colors.brandDark};
    font-size: 10px;
    line-height: 0.5;
    padding: 6px;
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    &:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 3px 0 3px;
        border-color: #ffffff transparent transparent transparent;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const Footer = ({ siteTitle }: FooterProps) => {
    return (
        <FooterWrapper>
            <Container>
                <FlexContainer variant="spacebetween">
                    <p>&copy; {siteTitle} 2023</p>
                    <p>
                        <FooterEmoji>
                            🐱 <ToolTip className="tooltip">meow</ToolTip>
                        </FooterEmoji>{" "}
                        <FooterEmoji>
                            🐶<ToolTip className="tooltip">woof</ToolTip>
                        </FooterEmoji>{" "}
                        <FooterEmoji>
                            🐸<ToolTip className="tooltip">ribbit</ToolTip>
                        </FooterEmoji>
                        <FooterEmoji>
                            🐦<ToolTip className="tooltip">chirp</ToolTip>
                        </FooterEmoji>
                    </p>
                </FlexContainer>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
