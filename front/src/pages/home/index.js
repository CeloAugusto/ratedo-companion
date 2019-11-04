import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/navbar'

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #442256;
`;

export default function Home() {
    return (
        <Conteiner>
            <NavBar/>
        </Conteiner>
    )
}