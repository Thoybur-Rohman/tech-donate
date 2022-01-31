import React from "react";
import styled from "styled-components";
import {InnerPageContainer, PageContainer} from "../../components/pageCointainer";
import {TopSection} from "./topSection";
import {Navbar} from "../../components/NavBar";
import {DonatePage} from "../../components/DonatePage";
import {Footer} from "../../components/Footer";
import {ServiceCard} from "../../components/servicesProvided";


const Tittle = styled.h1`
    font-weight: 500;
    color: #2fbb97;
`;

//here is the Mian page for better organization - Thoybur
export function HomePage(props){
    return (
    <PageContainer>
     <TopSection>
         <Navbar  Transparent/>
     </TopSection>
        <InnerPageContainer>
            <Tittle> What services we offer</Tittle>
            <ServiceCard/>
            <DonatePage/>
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
    )
}
