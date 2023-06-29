import * as React from "react"
import Container from "./utilities/Container"
import { designTokens } from "./designTokens"
import { FlexRowSpaced } from "./utilities/FlexRow"
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
    h1 {
        margin: 0;
    }

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

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
    const [showNotifications, setShowNotifications] = useState(true)

    return (
        <HeaderWrapper>
            <Container>
                <FlexRowSpaced>
                    <h1>
                        <Link to="/">{siteTitle}</Link>
                    </h1>
                    <Avatar onClick={() => setShowNotifications(false)}>
                        <StaticImage alt="Avatar" src="../images/paw.svg" />
                        {showNotifications ? (
                            <Badge>
                                <span>1</span>
                            </Badge>
                        ) : null}
                    </Avatar>
                </FlexRowSpaced>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
