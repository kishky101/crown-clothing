import styled from "styled-components";


export const CheckoutContainer = styled.div`
  // width: 55%;
  max-width: 1000px;
  // min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: calc(100vh - (100vh - 70px) + 30px) auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-align: center;

  &:last-child {
    width: 8%;
  }
`;

export const CheckOutItemCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
