import styled from "styled-components";
import { Link } from 'react-router-dom'


export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  background: #fcfcfc;
  z-index: 99;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    padding: 10px 5px;
  }
`;


// .navigation {
   
  
//     .logo-container {
//       height: 100%;
//       width: 70px;
//       padding: 25px;
//     }
  
//     .nav-links-container {
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer;
//       }
//     }
//   }