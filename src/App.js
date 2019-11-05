import React from "react";
import logo from "./logo.svg";
import Main from "./main";
import styled from "styled-components";

function App() {
  const ViewPortWrapper = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    border: 10px solid yellow;
    padding: 1%;
  `;

  return (
    <ViewPortWrapper>
      <Main />
    </ViewPortWrapper>
  );
}

export default App;
