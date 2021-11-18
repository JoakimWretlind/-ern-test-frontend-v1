import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 56rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    transition: .25s ease-out;
    text-transform: capitalize;
    &:hover{
        color: #999;
        cursor: pointer;
    }
`;
