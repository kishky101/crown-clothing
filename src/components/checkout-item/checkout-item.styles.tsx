import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
  margin-left: none;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  display: flex;
`;

export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  width: 23%;
  text-align: center;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  width: 23%;
  text-align: center;
`;

export const Price = styled.span`
  width: 23%;
  text-align: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;  
`;

export const CheckoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  width: 8%;
`;

