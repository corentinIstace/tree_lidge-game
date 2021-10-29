import React from 'react';
import styled from 'styled-components';

const UserName = () => {
    return (
        <Container>
            <p>NAME</p>
        </Container>
    )
}

const Container = styled.div`
    background-color: grey;
    justify-content: center;
    width: 200px;
    height: 150px;
`;
export default UserName
