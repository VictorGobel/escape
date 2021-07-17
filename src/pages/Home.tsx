import styled from "styled-components"

export const Home = () => {
    return (
        <HomeContainer>
            test
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    height: 100%;
    background: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.background};
`