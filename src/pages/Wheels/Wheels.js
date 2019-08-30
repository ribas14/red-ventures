import React from "react";
import { Container, TestScreen } from "./Wheels-styled";
import Carousel from "re-carousel";

export default class Home extends React.Component {
  state = {
    index: 0
  };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1
    }));

  render() {
    return (
      <Container onClick={this.toggle}>
        <Carousel auto>
          <div style={{ backgroundColor: "tomato", height: "100%" }}>
            Frame 1
          </div>
          <div style={{ backgroundColor: "orange", height: "100%" }}>
            Frame 2
          </div>
          <div style={{ backgroundColor: "orchid", height: "100%" }}>
            Frame 3
          </div>
        </Carousel>
      </Container>
    );
  }
}
