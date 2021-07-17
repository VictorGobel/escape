import styled from "styled-components"

export const Photography = () => {
    return (
        <PhotographyContainer>
            test
        </PhotographyContainer>
    )
}

const PhotographyContainer = styled.div`
    height: 100%;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
`