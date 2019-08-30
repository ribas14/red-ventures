import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  position: relative;
  width: 100%;
`;

export const TestScreen = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;
