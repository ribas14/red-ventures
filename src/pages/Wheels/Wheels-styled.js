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

export const Description = styled("div")`
  font-size: 15px;
  color: #ccc;
  font-weight: 400;
`;

export const ContainerTitle = styled("div")``;

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

export const ContainerOption = styled("div")`
  width: 100%;
  height: 100%;
  padding: 0 10px;

  white-space: nowrap;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  color: ${props => (props.selected ? "auto" : "grey")};

  & > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Img = styled.div`
  background-image: url(${props => props.bgImg});
  margin-top: 150px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const ImgOption = styled.div`
  background-image: url(${props => props.bgImg});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  border-radius: 50px;
  border: ${props => (props.selected ? "6px solid #3b4a77" : "none")};
  width: 35px;
  height: 35px;
`;

export const ContainerChoices = styled("div")`
  width: 100%;

  height: 200px;
  flex-direction: row;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
