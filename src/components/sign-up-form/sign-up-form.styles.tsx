import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid #3f3f3f;
    max-width: 600px;
    border-radius: 16px;
    padding: 50px 20px;

    @media screen and (max-width: 800px) {
        /*width: 80%;*/
        margin: 2rem auto;
    }
`;

export const SignUpHeader = styled.h2`
     margin: 10px 0;
`;

export const SignUpButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        row-gap: 2rem;
    }
`;

export const SignUpLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    span {
        text-decoration: underline;
        color: #4285f4;
        cursor: pointer;
        font-size: 18px;
    }
`;