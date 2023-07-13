import * as React from "react"
import { Link } from "gatsby"
import { darken } from "polished"
import styled from "styled-components"
import { variant } from "styled-system"
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
 * PageLink
 */

interface PageLinkProps {
    children: React.ReactNode
    to: string
}

const PageLinkWrapper = styled(Link)`
    color: ${designTokens.colors.brandPrimary};
    text-decoration: none;
    &:hover {
        text-decoraton: underline;
        darken("0.15", designTokens.colors.brandPrimary)
    }
`

export const PageLink = ({ children, to }: PageLinkProps) => {
    return <PageLinkWrapper to={to}>{children}</PageLinkWrapper>
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
    variant?: "offWhite"
}

const SectionWrapper = styled.section<SectionProps>`
    padding: ${designTokens.spacing.medium} 0;
    backgroundcolor: designTokens.colors.brandLight;
    color: designTokens.colors.brandDark;
    ${variant({
        variants: {
            offWhite: {
                backgroundColor: darken(
                    "0.035",
                    designTokens.colors.brandLight
                ),
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
    variant?: "spacebetween" | "flexstart"
}

const FlexWrapper = styled.section<FlexContainerProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    ${variant({
        variants: {
            spacebetween: {
                justifyContent: "space-between",
            },
            flexstart: {
                justifyContent: "flex-start",
            },
        },
    })}
`

export const FlexContainer = ({ children, variant }: FlexContainerProps) => {
    return <FlexWrapper variant={variant}>{children}</FlexWrapper>
}

/**
 * Headings
 */

interface HeadingProps {
    children: React.ReactNode
    as?: React.ElementType | "h1"
    variant?: "heading1" | "heading2" | "heading3"
    id?: string
}

const HeadingWrapper = styled.text<HeadingProps>`
    font-size: ${designTokens.fontSizes.small};
    font-weight: ${designTokens.fontWeights.semibold};
    line-height: ${designTokens.lineHeights.heading};
    margin-bottom: 20px;
    ${variant({
        variants: {
            heading1: {
                fontSize: designTokens.fontSizes.large,
                fontWeight: designTokens.fontWeights.semibold,
                lineHeight: designTokens.lineHeights.heading,
            },
            heading2: {
                fontSize: designTokens.fontSizes.medium,
                fontWeight: designTokens.fontWeights.semibold,
                lineHeight: designTokens.lineHeights.heading,
            },
            heading3: {
                fontSize: designTokens.fontSizes.small,
                fontWeight: designTokens.fontWeights.semibold,
                lineHeight: designTokens.lineHeights.heading,
            },
        },
    })}
`

export const Heading = ({ children, variant, as }: HeadingProps) => {
    return (
        <HeadingWrapper as={as} variant={variant}>
            {children}
        </HeadingWrapper>
    )
}

/**
 * Text
 */

interface TextProps {
    children: React.ReactNode
    as?: React.ElementType | "p"
    variant?: "lead"
}

const TextWrapper = styled.text<TextProps>`
    font-size: ${designTokens.fontSizes.small};
    font-weight: ${designTokens.fontWeights.normal};
    line-height: ${designTokens.lineHeights.text};
    margin-bottom: 20px;
    margin-top: 0;
    ${variant({
        variants: {
            lead: {
                fontSize: designTokens.fontSizes.medium,
                fontWeight: designTokens.fontWeights.normal,
            },
        },
    })}
`

export const Text = ({ children, variant }: TextProps) => {
    return (
        <TextWrapper as="p" variant={variant}>
            {children}
        </TextWrapper>
    )
}

/**
 * Lists
 */

interface ListProps {
    children: React.ReactNode
}

interface ListItemProps {
    children: React.ReactNode
    variant?: "inline"
}

const ListWrapper = styled.ul<ListProps>`
    margin: 0;
    padding: 0;
`

const ListItemWrapper = styled.li<ListItemProps>`
    display: block;
    margin-right: 20px;
    ${variant({
        variants: {
            inline: {
                display: "inline",
            },
        },
    })}
`

export const List = ({ children }: ListProps) => {
    return <ListWrapper>{children}</ListWrapper>
}

export const ListItem = ({ children, variant }: ListItemProps) => {
    return <ListItemWrapper variant={variant}>{children}</ListItemWrapper>
}

/**
 * Column
 */

interface ColumnProps {
    children: React.ReactNode
}

const ColumnWrapper = styled.div<ColumnProps>`
    flex: 1 0 100%;
    @media screen and (min-width: 1200px) {
        flex: 0 1 calc(50% - 1em);
    }
`

export const Column = ({ children }: ColumnProps) => {
    return <ColumnWrapper>{children}</ColumnWrapper>
}
