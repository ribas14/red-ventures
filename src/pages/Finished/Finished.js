import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Container,
  Title,
  ContainerFooter,
  ContainerComponent,
  ContainerChoices,
  Img,
  Red,
  ContainerOption,
  ContainerTitle,
  ContainerPrice,
  TitlePrice
} from "./Finished-styled";
import { withRouter } from "react-router-dom";
import { fetchJson } from "../../actions";
import ReactSVG from "react-svg";
import Rebuild from "../../assets/svg/rebuild.svg";
import Header from "../../components/Header/Header";

import Car1 from "../../assets/png/final-4.png";
import Car2 from "../../assets/png/final-5.png";
import Car3 from "../../assets/png/final-6.png";

class Finished extends React.Component {
  reboot = async () => {
    await this.props.fetchJson();
    this.props.history.push("/");
  };

  render() {
    const { color, engine, wheel } = this.props;
    return (
      <ContainerComponent>
        <Header />
        <Container>
          <ContainerTitle>
            <Title>
              Your Model
              <Red> R</Red>
            </Title>
          </ContainerTitle>
          {}
          <Img bgImg={color.id === 4 ? Car1 : color.id === 5 ? Car2 : Car3} />
        </Container>
        <ContainerChoices>
          <ContainerOption>
            <div>Starting price</div>
            <div>
              <Red>$ 63.000</Red>
            </div>
          </ContainerOption>
        </ContainerChoices>
        <ContainerChoices>
          <ContainerOption>
            <div>
              {engine.kwh} P {engine.kwh} kWh {engine.range} miles range
            </div>
            <div>
              <Red selected={true}>
                {engine.price > 0 ? `+ $${engine.price}` : "Included"}
              </Red>
            </div>
          </ContainerOption>
          <ContainerOption>
            <div>{wheel.label}</div>
            <div>
              <Red selected={true}>
                {wheel.price > 0 ? `+ $${wheel.price}` : "Included"}
              </Red>
            </div>
          </ContainerOption>
          <ContainerOption>
            <div>{color.label}</div>
            <div>
              <Red selected={true}>
                {color.price > 0 ? `+ $${color.price}` : "Included"}
              </Red>
            </div>
          </ContainerOption>
        </ContainerChoices>
        <ContainerChoices noBorder={true}>
          <ContainerOption>
            <div>Final Price</div>
            <div>
              <Red>$ {63000 + engine.price + color.price + wheel.price}</Red>
            </div>
          </ContainerOption>
        </ContainerChoices>
        <ContainerFooter>
          <ContainerPrice onClick={() => this.reboot()}>
            <TitlePrice>REBUILD</TitlePrice>
            <ReactSVG src={Rebuild} />
          </ContainerPrice>
        </ContainerFooter>
      </ContainerComponent>
    );
  }
}

const mapStateToProps = store => ({
  price: store.car.price,
  color: store.car.color,
  engine: store.car.engine,
  wheel: store.car.wheel
});

const mapDispatchToProps = dispatch => ({
  fetchJson: () => dispatch(fetchJson())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Finished);
