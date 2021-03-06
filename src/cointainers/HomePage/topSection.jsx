import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/laptopBackGround.jpg"
import student from "../../images/Teacher_Isometric.png"
import {BrandLogo} from "../../components/Logo";
import {Marginer} from "../../components/Marginer";
import {Button} from "../../components/Button-Front-page";


// Here we are making the top sectiong img background - Thoybur
const TopSectionCointainer = styled.div`
  width: 100%;
  height: 500px;
  background: url(${TopSectionBackgroundImg}) 0px -40px;
  background-size: cover;
`;

//Here we are making the Background filter - Thoybur
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(57, 122, 122, 0.7);
  display: flex;
  flex-direction: column;
`;
//Here we are making the cointainer for the inner cointainer
const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;


// Here we are shaping the img which is in our top secrion - Thoybur
const StandoutImg = styled.div `
  width: 20em;
  height: 18em;
  margin-left: -155px;
  //here we are putting the img height
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoCenter = styled.div `
  display: flex;
  flex-direction: column;
`;

const Slogan = styled.div`
  margin: 0;
  line-height: 0;
  color: whitesmoke;
  text-align: left;
  font-size: 35px;
  font-weight: initial;
`;
export function TopSection(props){

    const {children} = props;

    return (

   <TopSectionCointainer>
     <BackgroundFilter>
         {children}
        <TopSectionInnerContainer>
         <LogoCenter>
             <BrandLogo Logosize={200} tittleSize={60} logoMargin={-2} />
             <Marginer direction={"vertical"} margin={0}/>
             <Slogan>Help Donate education </Slogan>
             <Marginer direction={"vertical"} margin={15}/>
             <Button>Sign up</Button>
         </LogoCenter>
         <StandoutImg>
            <img src={student}/>
         </StandoutImg>
        </TopSectionInnerContainer>
     </BackgroundFilter>
   </TopSectionCointainer>
    )
}