import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin: 2rem auto;
    }
`;

export const SignUpHeader = styled.h2`
     margin: 10px 0;
`;