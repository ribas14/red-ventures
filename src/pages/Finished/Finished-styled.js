import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  cursor: pointer;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  & > a {
    position: absolute;
    bottom: 0;
    text-decoration: none;
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

export const Negrito = styled("div")`
  font-weight: 800;
  margin-right: 5px;
`;
export const Ball = styled("div")`
  padding: 10px;
  border-radius: 50px;
  background: ${props => (props.selected ? "#8e0000" : "white")};
`;
export const ContainerPrice = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

export const Red = styled("span")`
  color: #8e0000;
`;

export const ContainerLink = styled("div")`
  display: flex;
  font-size: 15px;
  color: black !important;
  align-items: center;
  cursor: pointer;
  div {
    text-decoration: none;
    width: 100%;
    display: flex;
    letter-spacing: 8px;

    margin-right: 10px;
  }
`;

export const TitlePrice = styled("div")`
  letter-spacing: 7px;
  font-size: 20px;
  margin-right: 5px;
`;
export const Price = styled("div")`
  color: #8e0000;
  font-size: 30px;
  letter-spacing: 4px;
`;

export const Title = styled("h3")`
  font-size: 20px;
  font-weight: 400;
  width: 90%;
  position: absolute;
  top: 80px;
  letter-spacing: 2px;
`;

export const ContainerOption = styled("div")`
  width: 100%;
  height: 100%;
  padding: 0 10px;

  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  color: ${props => (props.selected ? "auto" : "grey")};

  & > div {
    display: flex;
    flex-direction: row;
    padding: 7px 0;
  }
`;

export const ContainerTitle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -44px;
  & > h3 {
    margin: 10px 0;
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
  margin-top: 30px;
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
  flex-direction: column;
  border-bottom: ${props => (props.noBorder ? "none" : " 2px solid #c3c3c3")};
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBottom = styled("h3")`
  font-size: 25px;
  margin: 0 !important;
  color: #8e0000;
  font-weight: 800;
`;

export const TextModel = styled("h3")`
  font-size: 69px;
  font-weight: 100;
  width: 70%;
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
