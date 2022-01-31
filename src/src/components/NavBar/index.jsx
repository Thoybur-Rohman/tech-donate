import React from "react";
import styled from "styled-components";
import {
    BrandLogo
} from "../Logo";
import {
    Button
} from "../Button-Front-page";
import {
    Marginer
} from "../Marginer";

const NavBarCont = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background-color: ${({ Transparent }) =>
          Transparent ? "transparent" : "rgb(7, 91, 91)"};
`;
const AccessCont = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
    
`;

const Ancor = styled.a`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;
const Seperator = styled.div`
  position: center;
  min-height:50%;
  width: 1px;
  background-color: #fff;
`;
export function Navbar(props){

    const { Transparent} = props;
    return(
        <NavBarCont Transparent={Transparent}>
        <BrandLogo/>
            <AccessCont>
                <Ancor> About Us </Ancor>
                <Marginer direection={"horizontal"} margin={10}/>
                <Seperator/>
                <Marginer direection={"horizontal"} margin={10}/>
                <Ancor> Donations </Ancor>
                <Marginer direection={"horizontal"} margin={10}/>
                <Button size={10}>Register</Button>
                <Marginer direection={"horizontal"} margin={7}/>
                <Button size={10}>Log In</Button>
            </AccessCont>
        </NavBarCont>
    )
}