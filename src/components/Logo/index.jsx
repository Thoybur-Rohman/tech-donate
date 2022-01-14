import React from "react"
import styled from "styled-components";
import LogoImg from "../../images/logo_transparent.png"
import {Marginer} from "../Marginer";


const BrandLogoContainer =styled.div`
display: flex;
  align-items: center;
  margin-left: -15px;
`;

const Logoimage= styled.div `
    width: ${({size})=> size? size + "px" : "5em"};
    height: ${({size})=> size? size + "px" : "5em"};
  padding: 0;
  margin-left: ${({ ml }) => `${ml}px`};
  margin-bottom: -20px;
  
  
  img{
    width: 100%;
    height: 100%;
  }
`;

const LogoTittle = styled.h2`
  margin: 0;
  font-size: ${({size})=> size? size + "px" : "27px"};
  color: #fff;
  font-weight: bold;
  margin-bottom: -20px;
  
`;
export function BrandLogo(prop){

    const {Logosize ,tittleSize , logoMargin } = prop;
return(
    <BrandLogoContainer>
        <Logoimage size ={Logosize} ml ={logoMargin}>
            <img src={LogoImg} alt={"logo"} />
        </Logoimage>
        <LogoTittle size={tittleSize}>Tech Donate</LogoTittle>
    </BrandLogoContainer>

)
}