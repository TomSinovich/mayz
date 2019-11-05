import React from "react";
import styled from "styled-components";
import Header from "./header";
import Content from "./content";

export default () => {

  const DesktopGrid = styled.div`
    border: 2px solid red;
    min-height: 100%;
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-template-rows: 10% 1fr;
  `

  return (
    <DesktopGrid></DesktopGrid>
  )
}
