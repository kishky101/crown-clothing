import styled from "styled-components";


export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin: 2rem auto;
    }
`;

export const SignInHeader = styled.h2`
    margin: 10px 0;
`;

export const SignInButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        row-gap: 2rem;
    }
`;
