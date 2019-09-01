import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  display: flex;
  position: relative;
  width: 100%;
  cursor: pointer;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerComponent = styled.div`
  height: 100vh;
  padding: 0 20px;
`;

export const WheelContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;
export const Red = styled("div")`
  padding-left: 5px;
  font-weight: 800;
  color: ${props => (props.selected ? "#8e0000" : "auto")};
`;
export const Negrito = styled("div")`
  font-weight: 800;
  margin-right: 5px;
`;
export const Ball = styled("div")`
  padding: 10px;
  border-radius: 50px;
  background: ${props => (props.selected ? "#8e0000" : "white")};
`;
export const ContainerPrice = styled("div")``;

export const ContainerOption = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLink = styled("div")`
  display: flex;
  font-size: 29px;
  align-items: center;
  cursor: pointer;
  div {
    text-decoration: none;
    width: 100%;
    color: #8e0000;
    margin-right: 10px;
  }
`;

export const TitlePrice = styled("div")`
  font-size: 20px;
`;
export const Price = styled("div")`
  color: #8e0000;
  font-size: 30px;
  letter-spacing: 4px;
`;

export const Title = styled("h3")`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const ContainerLabel = styled("div")`
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: -45px;

  h3 {
    margin: 0 !important;
  }
`;

export const ContainerFooter = styled("div")`
  position: absolute;
  bottom: 0;
  width: 90%;

  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const Img = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 200px;
  height: 200px;
`;

export const ContainerArrow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  svg {
    transform: ${props => (props.rotate ? "rotate(180deg)" : "none")};
    margin-right: ${props => (props.rotate ? "10px" : "none")};
  }
`;

export const ContainerChoices = styled("div")`
  width: 100%;

  height: 200px;
  flex-direction: column;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCarrossel = styled("div")`
  position: absolute;
  top: 50px;
`;

export const CointanerLabel = styled("div")`
  position: absolute;
  bottom: 0;
  text-align: center;
  margin: auto;
  width: 200px;
`;

export const Rotate = styled("span")`
  transform: rotate(180deg);
  margin-bottom: 15px;
  margin-right: 5px;
`;
