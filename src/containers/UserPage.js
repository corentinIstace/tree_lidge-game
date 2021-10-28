import React from 'react';
import styled from 'styled-components';
import Achievments from '../client/components/Achievments';
import Succes from '../client/components/Succes';
import UserAchievments from '../client/components/UserAchievments';
import UserName from '../client/components/UserName';

const UserPage = () => {
    return (
        <>
        <Title>
            <h1>Tree Lidge</h1>
        </Title>
        <Container>
            <UserName></UserName>
            <Achievments></Achievments>
            <Succes></Succes>
            <UserAchievments></UserAchievments>
        </Container> 
        </>
    )
}

const Container = styled.div`
    background-color: #111824;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100vw;
    `;

const Title = styled.h1`
    background-color: #111824;
    text-align: center;
    font-size: 1.5em;
    color: green;
    font-style: italic;
    margin: 0;
        h1{
            margin: 0;
        }
`;
export default UserPage;
