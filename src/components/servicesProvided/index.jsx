import React from "react";
import styled from "styled-components";


const CardCointainer =styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
` ;

const TopContainer = styled.div`
  width: 100%;
`;
const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;
  img {
    width: 100%;
    height: 100%;
  }
`;
export function ServiceCard(props) {

    return (<CardCointainer>
            <TopContainer>
                <ServiceThumbnail>

                </ServiceThumbnail>
            </TopContainer>
        </CardCointainer>
    );
}