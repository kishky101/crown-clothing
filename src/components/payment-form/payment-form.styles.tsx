import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 800px;
    margin-top: 50px;


    article {
      margin: 10px auto;
    }

    h5 {
        margin-bottom: 20px;
        font-size: 16px;
        max-width: 300px;
    }

    @media screen and (max-width:800px) {
        flex-direction: column;

    }
`

export const FormContainer = styled.form`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    .card {
        width: 100%;
        margin: 1rem auto;
    }

    @media screen and (max-width:800px) {
        margin: 1rem auto;

        h2 {
           text-align: center;
        }

        .card {
            margin: 1rem auto;
        }
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;

    @media screen and (max-width:800px) {
        margin: 1rem auto;
    }
`

export const CreditCard = styled.div`
background: rgb(0,4,36);
background: linear-gradient(207deg, rgba(0,4,36,0) 0%, rgba(90,125,235,0) 0%, rgba(0,56,255,0.6612021857923498) 100%);
padding: 20px;
font-family: Consolas;
border-radius: 15px;
max-width: 300px;
position: relative;
height: 180px;
color: #fefefe;


`

export const CardNumber = styled.div`
position: absolute;
top: 70px;
left: 20px;
font-size: 22px;

@media screen and (max-width: 300px) {
    font-size: 20px;
}
`

export const ExpiryDate = styled.div`
position: absolute;
bottom: 20px;
right: 20px;

p {
    display: flex;
    flex-direction: column; 

    span:first-of-type {
        font-size: 12px;
    }
}

`

export const Cvc = styled.div`
position: absolute;
bottom: 20px;
left: 20px;

p {
    display: flex;
    flex-direction: column; 

    span:first-of-type {
        font-size: 12px;
    }
}
`

export const Chip = styled.img`
    width: 35px;
    height: 40px;

`