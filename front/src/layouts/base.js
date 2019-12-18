import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import background from '../assets/images/background-calus.png'
import NavBar from '../components/navbar';

const Conteiner = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    background-color: #442256;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow: hidden;
    margin-top: 75px;
`;

const License = styled.div`
    color: #F4F4F466;
    font-size: .7em;
    margin: 5px;
    a {
        opacity: initial;
        color: #FFDB8D85 !important;
    }
`;

function Base({children}) {
    return (
        <Conteiner>
            <NavBar/>
            <Content>{children}</Content>
            <License>© Marcelo A., <a target="_blank" rel="noopener noreferrer" href="https://github.com/celoaugusto/ratedo-companion">Ratedo Companion</a>, All Rights Reserved</License>
        </Conteiner>
    )
}

export default withRouter(Base);