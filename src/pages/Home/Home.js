import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Title,
  ContainerFooter,
  Price,
  ContainerComponent,
  ContainerLink,
  Img,
  Red,
  TextModel,
  ContainerTitle,
  TitleBottom,
  ContainerPrice,
  TitlePrice
} from "./Home-styled";

import ReactSVG from "react-svg";
import Arrow from "../../assets/svg/arrow.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import Car from "../../assets/png/car-home.png";

const Home = ({ history }) => (
  <ContainerComponent>
    <Header />
    <Container onClick={() => history.push("/Engine")}>
      <ContainerTitle>
        <Title>
          <Red>Build your</Red>
        </Title>

        <TextModel>
          MODEL <Red>R</Red>
        </TextModel>
      </ContainerTitle>
      <Img bgImg={Car} />
      <Link to="/Engine">
        <ContainerLink>
          <div>BEGIN</div>
          <ReactSVG src={Arrow} />
        </ContainerLink>
      </Link>
    </Container>
    <ContainerFooter>
      <ContainerPrice>
        <TitleBottom>2.5 s</TitleBottom>
        <TitlePrice>From 0 to 100</TitlePrice>
      </ContainerPrice>
      <ContainerPrice>
        <TitleBottom>420 mi</TitleBottom>
        <TitlePrice>Miles Range</TitlePrice>
      </ContainerPrice>{" "}
      <ContainerPrice>
        <TitleBottom>250 mp/h</TitleBottom>
        <TitlePrice>Max Speed</TitlePrice>
      </ContainerPrice>
    </ContainerFooter>
  </ContainerComponent>
);

export default Home;
