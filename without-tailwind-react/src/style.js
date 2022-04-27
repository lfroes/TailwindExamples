import styled, { css } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.darkMode ? "#AE3929" : "#f9f1e6")};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  padding: 24px;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.darkMode ? "#F9F1E6" : "#D87E24")};
  font-weight: 800;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 32px;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const TogglerContainer = styled.div`
  padding: 28px;
  @media (min-width: 1280px) {
    padding: 40px;
  }
`;

export const Toggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 48px;
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const SrOnly = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const ToggleOuter = styled.div`
  display: block;
  background: rgba(75 85 99);
  width: 56px;
  height: 32px;
  border-radius: 9999px;
`;

export const ToggleInner = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
  background: #ae3929;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${(props) =>
    props.darkMode &&
    css`
      background-color: #fff;
      transform: translateX(100%);
    `}
`;

export const TogglerText = styled.div`
  margin-left: 12px;
  color: ${(props) => (props.darkMode ? "#F9F1E6" : "rgb(55 65 81)")};
  font-weight: 500;
`;

export const MainContent = styled.div`
  display: flex;
`;

export const MainBanner = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 40px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: ${(props) => (props.darkMode ? "#F9F1E6" : "#6b6463")};
  font-weight: 800;
  margin-top: 40px;
  margin-bottom: 0px;
  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 1;
    margin-top: 128px;
  }
`;

export const MainSubTitle = styled.p`
  color: ${(props) => (props.darkMode ? "#F9F1E6" : "#6b6463")};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 32px;
  font-size: 20px;
  line-height: 28px;
  margin: 40px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-top: 64px;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
`;

export const CallToActionButton = styled.button`
  background-color: ${(props) => (props.darkMode ? "#D87E24" : "#AE3929")};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    padding: 24px 48px;
    font-size: 24px;
  }
`;
