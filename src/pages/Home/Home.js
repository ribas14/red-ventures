import React from "react";
import { Container } from "./Home-styled";
import { Link } from "react-router-dom";

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
      <Container>
        <div>
          <Link to="/Engine">Begin</Link>
        </div>
      </Container>
    );
  }
}
