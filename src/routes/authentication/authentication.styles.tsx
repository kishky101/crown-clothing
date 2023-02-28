import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        row-gap: 5rem;
    }
`;
