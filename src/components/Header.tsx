import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

// components & ui
import { PageLink, Container, FlexContainer } from "./ui"
import { designTokens } from "./designTokens"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.brandPrimary};
    color: green;
    padding: 20px 0;
`

const Logo = styled.h1`
    font-size: ${designTokens.fontSizes.xlarge};
    margin: 0;

    a {
        color: ${designTokens.colors.brandLight};
        text-decoration: none;
        transition: color 0.15s ease-in-out;
    }
`

const Avatar = styled.div`
    position: relative;
    &:hover {
        cursor: pointer;
    }
`

const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: ${designTokens.colors.brandWarning};
    border-radius: 50%;
    line-height: 0;
    font-size: 12px;
    padding: 10px;
    width: 4px;
    height: 4px;
    text-align: center;
    position: absolute;
    top: -6px;
    right: -6px;
`

interface HeaderProps {
    siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
    const [showNotifications, setShowNotifications] = useState(true)

    return (
        <HeaderWrapper>
            <Container>
                <FlexContainer variant="spacebetween">
                    <Logo>
                        <PageLink to="/">{siteTitle}</PageLink>
                    </Logo>
                    <Avatar onClick={() => setShowNotifications(false)}>
                        <StaticImage alt="Avatar" src="../images/paw.svg" />
                        {showNotifications ? (
                            <Badge>
                                <span>1</span>
                            </Badge>
                        ) : null}
                    </Avatar>
                </FlexContainer>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
