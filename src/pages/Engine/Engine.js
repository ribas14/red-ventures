import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Title,
  EngineContainer,
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
  Description,
  Ball,
  ContainerPrice,
  Price,
  TitlePrice
} from "./Engine-styled";
import ReactSVG from "react-svg";
import Arrow from "../../assets/svg/arrow.svg";
import { Transition, animated } from "react-spring/renderprops";
import { defineEngine } from "../../actions";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import Color1 from "../../assets/png/1.png";
import Color2 from "../../assets/png/2.png";
import Color3 from "../../assets/png/3.png";

function EngineComponent(props) {
  return (
    <EngineContainer>
      {props.engine && (
        <React.Fragment>
          <Img
            bgImg={
              props.engine.id === 1
                ? Color1
                : props.engine.id === 2
                ? Color2
                : Color3
            }
          />
        </React.Fragment>
      )}
    </EngineContainer>
  );
}

class Engine extends React.Component {
  state = {
    index: 0
  };

  toggle = engine => {
    this.setState({
      index: engine.id - 1
    });
    this.props.defineEngine(engine);
  };

  render() {
    const { index } = this.state;
    const { engines, engine, price } = this.props;
    return (
      <ContainerComponent>
        <Header />
        <Container>
          <Title>Engine</Title>

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
                {React.createElement(EngineComponent, { engine })}
              </animated.div>
            )}
          </Transition>
        </Container>
        <ContainerChoices>
          {engines &&
            engines.items.map((item, index) => {
              return (
                <ContainerOption
                  selected={item.id === engine.id}
                  key={item.id}
                  onClick={() => this.toggle(item)}
                >
                  <div>
                    {item.kwh} <Red selected={item.id === engine.id}> P </Red>
                  </div>
                  <div>{item.kwh} kWh</div>
                  <div>{item.range} miles range</div>
                  <div>
                    <Ball selected={item.id === engine.id} />{" "}
                  </div>
                </ContainerOption>
              );
            })}
        </ContainerChoices>
        <ContainerFooter>
          <ContainerPrice>
            <TitlePrice>Total</TitlePrice>
            <Price>${price + engine.price}</Price>
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
  engines: store.jsonObj.carJsonDefault.engine,
  price: store.car.price,
  priceEngine: store.car.priceEngine,
  engine: store.car.engine,
  enginePrice: store.car.engine.price
});

const mapDispatchToProps = dispatch => ({
  defineEngine: engine => dispatch(defineEngine(engine))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engine);
