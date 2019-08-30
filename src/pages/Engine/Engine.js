import React from "react";
import { connect } from "react-redux";

import {
  Container,
  TestScreen,
  ContainerOption,
  ContainerChoices
} from "./Engine-styled";
import { Transition, animated } from "react-spring/renderprops";
import { fetchJson } from "../../actions";

function TestScreen1(props) {
  return <TestScreen bgColor="tomato">Im number 1</TestScreen>;
}

function TestScreen2(props) {
  return <TestScreen bgColor="aqua">Im number 2</TestScreen>;
}

function TestScreen3(props) {
  return <TestScreen bgColor="navy">Im number 3</TestScreen>;
}

const testScreens = [TestScreen1, TestScreen2, TestScreen3];

class Engine extends React.Component {
  state = {
    index: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.engine !== this.props.engine) {
    }
  }

  toggle = id =>
    this.setState({
      index: id - 1
    });
  render() {
    const { index } = this.state;
    const { engines } = this.props;
    return (
      <div>
        <h1>React Spring Transition Tutorial</h1>
        <Container>
          <Transition
            native
            reset
            unique
            items={index}
            from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
            leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
          >
            {index => style => (
              <animated.div style={{ ...style }}>
                {React.createElement(testScreens[index])}
              </animated.div>
            )}
          </Transition>
        </Container>
        <ContainerChoices>
          {engines &&
            engines.items.map(engine => {
              return (
                <ContainerOption onClick={() => this.toggle(engine.id)}>
                  {engine.kwh}
                </ContainerOption>
              );
            })}
        </ContainerChoices>
        <h3>Hit The clap if you enjoyed!</h3>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  engines: store.jsonObj.carJsonDefault.engine
});

const mapDispatchToProps = dispatch => ({
  fetchJson: () => dispatch(fetchJson())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engine);
