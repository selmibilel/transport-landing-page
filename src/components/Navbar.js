import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-scroll';
import { menuData } from '../data/MenuData';
import { Button } from 'react-bootstrap';
import {CgMenuRight} from 'react-icons/cg';

const Nav = styled.nav`
    height:60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: #17a2b8;
    }
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(CgMenuRight)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        color:#fff;
        background-size: contain;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to="footer" smooth={false} duration={100}>ELIXR</Logo>
            <MenuBars size={38} onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Link to="contact" primary='true'>
                    <Button variant="dark"> Contact Us </Button>
                </Link>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
