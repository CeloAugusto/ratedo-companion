import React from 'react';
import styled from 'styled-components';

import {ReactComponent as LogoSVG} from '../../logo.svg';

const Bar = styled.div`
    position: fixed;
    background-color: #B0896C;
    width: 100vw;
    height: 75px;
    padding: 0 20px;
    diplay: inline-flex;
`;

const Logo = styled.div`
    height: 50px;
    width: 50px;
    fill: #F6F6F6;
`;

const Title = styled.div`
    color: #F6F6F6;
`;



export default function NavBar() {
    return (
        <Bar>
            <Logo>
                <LogoSVG/>
            </Logo>
            <Title>RATEDO COMPANION</Title>
            
        </Bar>
    )
}