import styled from "styled-components";
import { 
  BaseButton, 
  GoogleSignInButton, 
  InvertedButton 
} from '../button/button.styles';


export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  top: 90px;
  right: 30px;
  z-index: 5;

  ${BaseButton}, 
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
  
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;


  
    