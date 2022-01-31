import React from 'react';
import styled from "styled-components";
import {
    Navbar
} from "../../components/NavBar";
import { AccountBox } from "../../components/accountBox";
import {PageContainer, InnerPageContainer,} from "../../components/pageCointainer";
import {
    Footer
} from "../../components/Footer";

const StyledInnerCont = styled(InnerPageContainer)`
  margin-top: 4em;
`;
export function LoginAndRegister(props){
    return (
        <PageContainer>
            <Navbar />
              <StyledInnerCont>
                  <AccountBox/>
              </StyledInnerCont>

            <Footer/>
        </PageContainer>
    );
}