import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const FormContainer = styled.form`
    // height: 100px;
    // max-width: 500px;
    // margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    .card {
        width: 80%;
        margin: 1rem auto;
    }

    @media screen and (max-width:800px) {
        margin: 1rem auto;

        h2 {
           text-align: center;
        }

        .card {
            // width: 80%;
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