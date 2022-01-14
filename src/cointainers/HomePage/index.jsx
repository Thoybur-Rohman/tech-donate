import React from "react";
import styled from "styled-components";
import {InnerPageContainer, PageContainer} from "../../components/pageCointainer";
import {TopSection} from "./topSection";
import {Navbar} from "../../components/NavBar";


const Tittle = styled.h1`
    font-weight: 500;
    color: #2fbb97;
`;

//here is the Mian page for better organization - Thoybur
export function HomePage(props){
    return (
    <PageContainer>
     <TopSection>
         <Navbar/>
     </TopSection>
        <InnerPageContainer>
            <Tittle> What services we offer</Tittle>
        </InnerPageContainer>
    </PageContainer>
    )
}
