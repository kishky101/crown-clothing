import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
  min-height: 100px;
  // border-bottom: 1px solid darkgrey;
  padding: 30px 10px 20px;
  margin-left: none;
  font-size: 20px;
  align-items: center;
  // border: 1px solid red;
  position: relative;
  background: #fcfcfc;
  border-radius: 10px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;    
    grid-template-rows: 1fr .5fr;    
  }
`;

export const CheckOutItemDetails = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  // justify-content: space-around;
`

export const CheckOutItemPrice = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CheckoutImageContainer = styled.div`
  // width: 23%;
  max-width: 100px;
  max-height: 100px;
  padding-right: 15px;
  display: flex;
`;

export const CheckoutImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Name = styled.span`
  // width: 23%;
  text-align: center;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  // width: 23%;
  text-align: center;
`;

export const Price = styled.span`
  // width: 23%;
  text-align: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 100%;  
  display: flex;
`;

export const Value = styled.span`
  margin: 0 10px;  
`;

export const CheckoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  // width: 8%;
  position: absolute;
  top: 10px;
  right: 20px;
  color: "rgb(0,129,326)"
`;

