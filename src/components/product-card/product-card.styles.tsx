import styled from "styled-components";


export const ProductCardBox = styled.div`
    max-width: 300px;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 5px;
    background: #fcfcfc;
    cursor: pointer;
`

export const ProductImage = styled.div`
    max-width: 100%;
    // max-height: 300px;
    height: 300px;
    background: rgb(0,19,36);
    background: radial-gradient(circle, rgba(0,19,36,0.1741946778711485) 0%, rgba(163,208,249,0) 47%, rgba(0,212,255,0.2806372549019608) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    img {
        max-width: 100%;
        object-fit: cover;
        max-height: 100%;
    }
`

export const ProductDetails = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 1rem;
    padding: 10px 8px;

    div {
        display: flex;
        justify-content: space-between;

        p {
            font-size: 30px;
            font-weight: 900;
            font-family: Consolas;
            color: rgb(0,129,326);
        }

        img {
            height: 40px;
            cursor: pointer;
        }
    }

    h4 {
        font-size: 20px;
        letter-spacing: 1px;
    }
`