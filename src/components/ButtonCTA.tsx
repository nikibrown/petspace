import * as React from "react"
import styled from "styled-components"
import { Link as LinkButton } from "gatsby"
import { designTokens } from "./designTokens"

interface ButtonCTAProps {
    children: React.ReactNode
    url: string
}

const PageButtonCTA = styled(LinkButton)`
    background-color: ${designTokens.colors.brandPrimary};
    color: ${designTokens.colors.brandLight};
    padding: 4px 8px;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.15s ease-in-out;
    &:hover {
        background-color: ${designTokens.colors.brandPrimaryDarker};
        text-decoration: none;
    }
`

const ButtonCTA: React.FC<ButtonCTAProps> = ({ children, url }) => {
    return <PageButtonCTA to={url}>{children}</PageButtonCTA>
}

export default ButtonCTA
