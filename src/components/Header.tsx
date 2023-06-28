import * as React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "./utilities/Container"
import FlexRow from "./utilities/FlexRow"

interface HeaderProps {
    siteTitle: string
}

const PageHeader = styled.header`
    background-color: #2e89ff;
    color: green;
    padding: 20px 0;
    h1 {
        margin: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: color 0.15s ease-in-out;
        &:hover {
            color: #e9e8e8;
        }
    }
`

const Avatar = styled.div`
    position: relative;
    &:hover {
        cursor: pointer;
    }
`

const Badge = styled.span`
    display: block;
    color: #fff;
    background-color: #ce4141;
    border-radius: 50%;
    line-height: 0.5;
    font-size: 12px;
    padding: 10px;
    width: 4px;
    height: 4px;
    text-align: center;
    position: absolute;
    top: -6px;
    right: -15px;
`

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
    const [showNotifications, setShowNotifications] = useState(true)

    return (
        <PageHeader>
            <Container>
                <FlexRow>
                    <h1>
                        <Link to="/">{siteTitle}</Link>
                    </h1>
                    <Avatar onClick={() => setShowNotifications(false)}>
                        <StaticImage alt="Avatar" src="../images/paw.svg" />
                        {showNotifications ? <Badge>1</Badge> : null}
                    </Avatar>
                </FlexRow>
            </Container>
        </PageHeader>
    )
}

export default Header
