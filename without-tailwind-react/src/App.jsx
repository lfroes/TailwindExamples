import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import "./App.css";

import mainBanner from "./assets/banner.png";
import {
  Main,
  Navigation,
  Title,
  TogglerContainer,
  Toggler,
  ToggleLabel,
  RelativeDiv,
  SrOnly,
  ToggleOuter,
  ToggleInner,
  TogglerText,
  MainContent,
  MainBanner,
  MainInfo,
  MainTitle,
  MainSubTitle,
  CallToAction,
  CallToActionButton,
} from "./style.js";

function App() {
  const [darkMode, setMode] = useState(false);

  return (
    <>
      <Main darkMode={darkMode}>
        <Navigation>
          <Title darkMode={darkMode}>TRNDY</Title>
          <TogglerContainer>
            <Toggler>
              <ToggleLabel htmlFor="toggle">
                <RelativeDiv>
                  <SrOnly
                    type="checkbox"
                    id="toggle"
                    value={darkMode}
                    onChange={() => setMode(!darkMode)}
                  />
                  <ToggleOuter></ToggleOuter>
                  <ToggleInner
                    className="dot"
                    darkMode={darkMode}
                  ></ToggleInner>
                </RelativeDiv>
                <TogglerText darkMode={darkMode}>
                  {!darkMode ? "Light Mode" : "Dark Mode"}
                </TogglerText>
              </ToggleLabel>
            </Toggler>
          </TogglerContainer>
        </Navigation>
        <MainContent>
          <MainBanner>
            <img src={mainBanner} alt="main-banner" />
          </MainBanner>
          <MainInfo>
            <MainTitle darkMode={darkMode}>
              Óculos novos em um estalar de dedos!
            </MainTitle>
            <MainSubTitle darkMode={darkMode}>
              Compre óculos dos mais variados com a TRNDY
            </MainSubTitle>
            <CallToAction>
              <CallToActionButton darkMode={darkMode}>
                Peça Agora
              </CallToActionButton>
            </CallToAction>
          </MainInfo>
        </MainContent>
      </Main>
    </>
  );
}

export default App;
