import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import {ReactComponent as LogoSVG} from '../../assets/images/logo.svg';

const Bar = styled.div`
    position: fixed;
    background-color: #FFDB8DA6;
    width: 100vw;
    height: 75px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    color: #F4F4F4;
    display: flex;
    justify-self: start
    align-items: center;
    cursor: default;
    margin: 0 10px;
    span {
        width: 60px;
        margin: 0 10px;
        font-size: 1.2em
        // font-family: Share Tech Mono;
        text-align: center;
        text-transform: uppercase;
        inline-size: min-content;
    }
    svg {
        height: 55px;
        width: 55px;
        margin: 0 10px;
    }
`;

const Nav = styled.div`
    margin: 0 50px;
    display: inline-flex;
`;

const Button = styled.div`
    margin: 0 10px;
    color: #F4F4F4;
    text-decoration: ${props => props.selected ? 'underline' : 'none'};
`;

function NavBar({location: { pathname }, history,
}) {
    const shortcuts = [
        {label: 'HOME', path: '/'},
        {label: 'FIND A SQUAD', path: '/squad'},
        {label: 'GUIDES', path: '/guide'},
    ];
    return (
        <Bar>
            <Logo>
                <LogoSVG/>
                <span>RATEDO COMPANION</span>
            </Logo>
            <Nav>
                {
                    shortcuts.map(shortcut => (
                        <Link to={shortcut.path}>
                            <Button selected={pathname==shortcut.path}>
                            {shortcut.label}
                            </Button>
                        </Link>
                    ))
                }
            </Nav>

        </Bar>
    )
}

export default withRouter(NavBar)