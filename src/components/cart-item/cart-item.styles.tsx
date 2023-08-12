import styled from "styled-components";


export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  // max-height: 100px;
  margin-bottom: 15px;
  border-bottom: 1px solid gray;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // padding: 10px 20px;
`;

export const ItemName = styled.span`  
  font-size: 16px;  
`;

