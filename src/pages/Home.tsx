import styled from 'styled-components';
import { LaserComponent } from '../components/laser/LaserComponent';

export const Home = () => {
    return (
        <HomeContainer>
            <LaserComponent pageIndex={0} />
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    flex-grow: 1;
`;
