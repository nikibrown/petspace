import * as React from "react"
import { Container, Flex } from "./ui"
import { designTokens } from "./designTokens"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useState } from "react"

interface HeaderProps {
    siteTitle: string
}

const HeaderWrapper = styled.header`
    background-color: ${designTokens.colors.brandPrimary};
    color: green;
    padding: 20px 0;

    a {
        color: ${designTokens.colors.brandLight};
        text-decoration: none;
        transition: color 0.15s ease-in-out;
    }
`

const Logo = styled.h1`
    font-size: ${designTokens.fontSizes.xlarge};
    margin: 0;
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

const Header = ({ siteTitle }: HeaderProps) => {
    const [showNotifications, setShowNotifications] = useState(true)

    return (
        <HeaderWrapper>
            <Container>
                <Flex variant="justifySpaceBetween">
                    <Logo>
                        <Link to="/">{siteTitle}</Link>
                    </Logo>
                    <Avatar onClick={() => setShowNotifications(false)}>
                        <StaticImage alt="Avatar" src="../images/paw.svg" />
                        {showNotifications ? (
                            <Badge>
                                <span>1</span>
                            </Badge>
                        ) : null}
                    </Avatar>
                </Flex>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
