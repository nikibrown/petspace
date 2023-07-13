import * as React from "react"
import { Link } from "gatsby"
import { darken } from "polished"
import styled from "styled-components"
import {
    compose,
    variant,
    flexbox,
    FlexProps,
    color,
    ColorProps,
} from "styled-system"
import { designTokens } from "./designTokens"

/**
 * ButtonCTA
 */

interface ButtonCTAProps {
    children: React.ReactNode
    to: string
    variant: "primary" | "secondary"
}

const ButtonCTAWrapper = styled(Link)<ButtonCTAProps>`
    padding: 4px 8px;
    border-radius: ${designTokens.borderRadius.default};
    text-decoration: none;
    transition: background-color 0.15s ease-in-out;
    &:hover {
        text-decoration: none;
    }
    ${variant({
        variants: {
            primary: {
                color: designTokens.colors.brandLight,
                backgroundColor: designTokens.colors.brandPrimary,
                "&:hover": {
                    backgroundColor: darken(
                        "0.15",
                        designTokens.colors.brandPrimary
                    ),
                },
            },
            secondary: {
                color: designTokens.colors.brandDark,
                backgroundColor: designTokens.colors.brandLight,
                "&:hover": {
                    backgroundColor: darken(
                        "0.15",
                        designTokens.colors.brandLight
                    ),
                },
            },
        },
    })}
`

export const ButtonCTA = ({ children, to, variant }: ButtonCTAProps) => {
    return (
        <ButtonCTAWrapper variant={variant} to={to}>
            {children}
        </ButtonCTAWrapper>
    )
}

/**
 * Container
 */

interface ContainerProps {
    children: React.ReactNode
    variant?: "fullwidth"
}

const ContainerWrapper = styled.div<ContainerProps>`
    margin: 0 auto;
    max-width: 80vw;

    @media screen and (min-width: 600px) {
        max-width: 80vw;
    }

    @media screen and (min-width: 1200px) {
        max-width: 70vw;
    }

    ${variant({
        variants: {
            fullwidth: {
                padding: "0 20px",
                maxWidth: "100vw",
                "@media(min-width: 600px)": {
                    maxWidth: "100vw",
                },
                "@media(min-width: 1200px)": {
                    maxWidth: "100vw",
                },
            },
        },
    })}
`

export const Container = ({ children, variant }: ContainerProps) => {
    return <ContainerWrapper variant={variant}>{children}</ContainerWrapper>
}

/**
 * Section
 */

interface SectionProps {
    children: React.ReactNode
    variant?: "dark"
}

const SectionWrapper = styled.section<SectionProps>`
    padding: ${designTokens.spacing.small} 0;
    backgroundcolor: designTokens.colors.brandLight;
    color: designTokens.colors.brandDark;
    ${variant({
        variants: {
            dark: {
                color: designTokens.colors.brandLight,
                backgroundColor: designTokens.colors.brandDark,
            },
        },
    })}
`

export const Section = ({ children, variant }: SectionProps) => {
    return <SectionWrapper variant={variant}>{children}</SectionWrapper>
}

/**
 * FlexContainer
 */

interface FlexContainerProps {
    children: React.ReactNode
    variant?: "jcSpaceBetween"
}

const FlexWrapper = styled.section<FlexContainerProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    ${variant({
        variants: {
            jcSpaceBetween: {
                justifyContent: "space-between",
            },
        },
    })}
`

export const FlexContainer = ({ children, variant }: FlexContainerProps) => {
    return <FlexWrapper variant={variant}>{children}</FlexWrapper>
}

// export function Box({ children, ...props }) {
//     return <BoxWrapper {...props}>{children}</BoxWrapper>
// }
