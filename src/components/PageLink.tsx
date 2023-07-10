import * as React from "react"
import { Link as TextPageLink } from "gatsby"
import { designTokens } from "./designTokens"
import styled from "styled-components"

interface PageLinkProps {
    url: string
    children: React.ReactNode
}

const Link = styled(TextPageLink)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
    }
`

const PageLink = ({ url, children }: PageLinkProps) => {
    return <Link to={url}>{children}</Link>
}

export default PageLink
