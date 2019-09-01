import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Title,
  Rotate,
  ContainerFooter,
  ContainerComponent,
  ContainerLink,
  Img,
  ContainerOption,
  ContainerCarrossel,
  ContainerArrow,
  CointanerLabel,
  ContainerPrice,
  Price,
  TitlePrice
} from "./Wheels-styled";
import Carousel from "re-carousel";

import ReactSVG from "react-svg";
import Arrow from "../../assets/svg/arrow.svg";
import { defineWheels } from "../../actions";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import Wheel1 from "../../assets/png/7.png";
import Wheel2 from "../../assets/png/8.png";
import Wheel3 from "../../assets/png/9.png";

class Wheel extends React.Component {
  state = {
    index: 0
  };

  slide = prev => {
    const { wheels } = this.props;
    if (prev.current.innerText.includes("Silver")) {
      this.props.defineWheels(wheels.items[0]);
    } else if (prev.current.innerText.includes("Grafitti")) {
      this.props.defineWheels(wheels.items[1]);
    } else if (prev.current.innerText.includes("Carbon")) {
      this.props.defineWheels(wheels.items[2]);
    }
  };

  render() {
    const { wheels, wheel, price, enginePrice, colorPrice } = this.props;
    return (
      <ContainerComponent>
        <Header />
        <Container>
          <Title>Wheel</Title>
          <ContainerCarrossel>
            {wheels && (
              <Carousel auto onTransitionEnd={prev => this.slide(prev)}>
                {wheels &&
                  wheels.items.map((item, index) => {
                    return (
                      <ContainerOption key={index}>
                        <Img
                          bgImg={
                            item.id === 7
                              ? Wheel1
                              : item.id === 8
                              ? Wheel2
                              : Wheel3
                          }
                        >
                          <CointanerLabel>
                            {item.label}
                            <span style={{ color: "#8e0000" }}>
                              {item.id === 7 && (
                                <span>
                                  <br></br>Included
                                </span>
                              )}
                            </span>
                            {item.id === 7 ? (
                              <ContainerArrow>
                                <ReactSVG src={Arrow} />
                              </ContainerArrow>
                            ) : item.id === 8 ? (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center"
                                }}
                              >
                                <ContainerArrow>
                                  <Rotate>
                                    <ReactSVG src={Arrow} />
                                  </Rotate>
                                </ContainerArrow>{" "}
                                <ContainerArrow>
                                  <ReactSVG src={Arrow} />
                                </ContainerArrow>
                              </div>
                            ) : (
                              <ContainerArrow>
                                <Rotate>
                                  <ReactSVG src={Arrow} />
                                </Rotate>
                              </ContainerArrow>
                            )}
                          </CointanerLabel>
                        </Img>
                      </ContainerOption>
                    );
                  })}
              </Carousel>
            )}
          </ContainerCarrossel>
        </Container>
        <ContainerFooter>
          <ContainerPrice>
            <TitlePrice>Total</TitlePrice>
            <Price>${price + wheel.price + enginePrice + colorPrice}</Price>
          </ContainerPrice>
          <Link to="/Finished">
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
  wheels: store.jsonObj.carJsonDefault.wheels,
  price: store.car.price,
  priceWheel: store.car.priceWheel,
  wheel: store.car.wheel,
  colorPrice: store.car.color.price,
  enginePrice: store.car.engine.price
});

const mapDispatchToProps = dispatch => ({
  defineWheels: wheel => dispatch(defineWheels(wheel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wheel);
