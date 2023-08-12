import styled from "styled-components";


export const ProductDetailsCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;

    h3 {
        text-align: center;
        font-size: 30px;
    }
`

export const ProductDetailsBox = styled.div`
    display: flex;
    margin: 50px;
    gap: 50px;
    overflow: hidden;
    background: #fcfcfc;
    padding: 30px;
    border-radius: 20px;


    @media screen and (max-width: 920px) {
        flex-direction: column
    }
    @media screen and (max-width: 600px) {
        margin: 20px;
        padding: 30px 10px;
    }
`

export const ProductDetailsRating = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 16px;
    h4 {
        font-size: 20px;
    }

    p {
        display: flex;
        gap: 10px;
    }
`

export const ProductDetailsImage = styled.div`
    max-width: 800px;
    max-height: 800px;
    overflow: hidden;
    //border: 1px solid red;
    padding: 30px;
    background: #fcfcfc;
    // background: radial-gradient(circle, rgba(0,19,36,0.1741946778711485) 0%, rgba(163,208,249,0) 47%, rgba(0,212,255,0.2806372549019608) 100%);
    display: flex;
    //justify-content: center;
    //align-items: center;
    
    
    img {
        max-width: 100%;
        max-height: 700px;
        //width: 100%;
        //height: auto;
        object-fit: contain;
    }
`

export const ProductDetailsDesc = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
`

export const ProductDetailsText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
        font-size: 30px;
        text-wrap: balance;
    }

    p {
        font-size: 24px;
    }

    @media screen and (max-width: 600px) {
        h4 {
            font-size: 24px;
        }

        p {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 400px) {
        h4 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const ProductDetailsQuant = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    span {
        border: 1px solid gray;
        padding: 10px;
        border-radius: 100%;  
        cursor: pointer;
        display: flex;
    }

   
`

export const ProductDetailsButtons = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 30px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 50px
`