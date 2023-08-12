import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: calc(100vh - (100vh - 70px) + 30px);
    padding: 10px 30px;

    @media and screen(max-width: 300px) {
        padding: 10px 10px;
    }
`