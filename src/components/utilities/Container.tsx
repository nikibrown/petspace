import * as React from "react"
import styled from "styled-components"

interface ContainerProps {
    children: React.ReactNode
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 80vw;

    @media screen and (min-width: 600px) {
        max-width: 70vw;
    }

    @media screen and (min-width: 1200px) {
        max-width: 60vw;
    }
`

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default Container
