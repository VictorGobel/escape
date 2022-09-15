import { matchPath, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getNavBarPages } from './pages';

export const NavBar = () => {
    const location = useLocation();

    const navBarPages = getNavBarPages();
    const selectedIndex = navBarPages.findIndex((page) => matchPath(location.pathname, page.path)?.isExact);

    return (
        <NavBarContainer>
            {selectedIndex !== -1 && (
                <SelectedBackground selectedIndex={selectedIndex} numberOfLink={navBarPages.length} />
            )}
            {navBarPages.map(({ label, path }) => (
                <LinkContainer key={path}>
                    <Link exact to={path} activeClassName="active">
                        {label}
                    </Link>
                </LinkContainer>
            ))}
        </NavBarContainer>
    );
};

const LINK_WIDTH = '13%';
const LINK_MARGIN = '10px';

const NavBarContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px -4px black;
    z-index: 1;
`;

const LinkContainer = styled.div`
    width: ${LINK_WIDTH};
    margin: ${LINK_MARGIN};
`;

const Link = styled(NavLink)`
    display: block;
    text-align: center;
    padding: 10px;
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
    font-weight: bold;
`;

const SelectedBackground = styled.div`
    position: absolute;
    z-index: -1;
    top: ${LINK_MARGIN};
    bottom: ${LINK_MARGIN};
    left: calc(
        ${({ numberOfLink, selectedIndex }: { selectedIndex: number; numberOfLink: number }) =>
                selectedIndex - (numberOfLink - 1) / 2} * (${LINK_WIDTH} + (2 * ${LINK_MARGIN})) + 50% - ${LINK_WIDTH} /
            2
    );
    width: ${LINK_WIDTH};
    border-radius: 5px;
    background: ${({ theme }) => theme.color.backgroundHighlight};

    transition: left ease-in-out 0.3s;
`;
