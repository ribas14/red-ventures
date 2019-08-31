import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Title,
  ColorContainer,
  ContainerOption,
  ImgOption,
  ContainerChoices,
  ContainerFooter,
  ContainerComponent,
  ContainerLink,
  Img,
  ContainerTitle,
  Red,
  Negrito,
  ContainerLabel,
  Description,
  Ball,
  ContainerPrice,
  Price,
  TitlePrice
} from "./Colors-styled";
import ReactSVG from "react-svg";
import Arrow from "../../assets/svg/arrow.svg";
import { Transition, animated } from "react-spring/renderprops";
import { defineColor } from "../../actions";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import Car1 from "../../assets/png/4.png";
import Car2 from "../../assets/png/5.png";
import Car3 from "../../assets/png/6.png";
import Color1 from "../../assets/png/dot-red.png";
import Color2 from "../../assets/png/dot-blue.png";
import Color3 from "../../assets/png/dot-grey.png";

const ColorsImgsArray = [Color1, Color2, Color3];

function ColorComponent(props) {
  return (
    <ColorContainer>
      {props.color && (
        <React.Fragment>
          <Img
            bgImg={
              props.color.id === 4 ? Car1 : props.color.id === 5 ? Car2 : Car3
            }
          />
          <ContainerLabel>
            <Title>{props.color.label}</Title>
            <Title>
              <span style={{ color: "#8e0000" }}>
                {props.color.id === 4 && "Included"}
              </span>
            </Title>
          </ContainerLabel>
        </React.Fragment>
      )}
    </ColorContainer>
  );
}

class Color extends React.Component {
  state = {
    index: 0
  };

  toggle = color => {
    this.setState({
      index: color.id - 1
    });
    this.props.defineColor(color);
  };

  render() {
    const { index } = this.state;
    const { colors, color, price, enginePrice } = this.props;
    console.log(colors);
    return (
      <ContainerComponent>
        <Header />
        <Container>
          <ContainerTitle>
            <Title>Color</Title>
            <Description>{colors && colors.description}</Description>
          </ContainerTitle>

          <Transition
            native
            reset
            unique
            items={index}
            from={{ opacity: 0, transform: "translate3d(50%, 0 ,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
            leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
          >
            {index => style => (
              <animated.div style={{ ...style }}>
                {React.createElement(ColorComponent, { color })}
              </animated.div>
            )}
          </Transition>
        </Container>
        <ContainerChoices>
          {colors &&
            colors.items.map((item, index) => {
              return (
                <ContainerOption
                  selected={item.id === color.id}
                  key={item.id}
                  onClick={() => this.toggle(item)}
                >
                  <ImgOption
                    bgImg={ColorsImgsArray[index]}
                    selected={item.id === color.id}
                  />
                </ContainerOption>
              );
            })}
        </ContainerChoices>
        <ContainerFooter>
          <ContainerPrice>
            <TitlePrice>Total</TitlePrice>
            <Price>${price + color.price + enginePrice}</Price>
          </ContainerPrice>
          <Link to="/Color">
            <ContainerLink>
              <div>next</div>
              <ReactSVG src={Arrow} />
            </ContainerLink>
          </Link>
        </ContainerFooter>
      </ContainerComponent>
    );
  }
}

const mapStateToProps = store => ({
  colors: store.jsonObj.carJsonDefault.color,
  price: store.car.price,
  priceColor: store.car.priceColor,
  color: store.car.color,
  enginePrice: store.car.engine.price
});

const mapDispatchToProps = dispatch => ({
  defineColor: color => dispatch(defineColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);
