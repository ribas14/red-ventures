import React from "react";
import { connect } from "react-redux";

import {
  Container,
  EngineComponent,
  ContainerOption,
  ContainerChoices
} from "./Engine-styled";
import { Transition, animated } from "react-spring/renderprops";
import { defineEngine } from "../../actions";

function EngineComponent1(props) {
  return <EngineComponent bgColor="tomato">Im number 1</EngineComponent>;
}

function EngineComponent2(props) {
  return <EngineComponent bgColor="aqua">Im number 2</EngineComponent>;
}

function EngineComponent3(props) {
  return <EngineComponent bgColor="navy">Im number 3</EngineComponent>;
}

const engineComponents = [EngineComponent1, EngineComponent2, EngineComponent3];

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
    const { engines, engine } = this.props;
    console.log(engine);
    return (
      <div>
        <Container>
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
                {React.createElement(engineComponents[index])}
              </animated.div>
            )}
          </Transition>
        </Container>
        <ContainerChoices>
          {engines &&
            engines.items.map(engine => {
              return (
                <ContainerOption
                  key={engine.id}
                  onClick={() => this.toggle(engine)}
                >
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
  engines: store.jsonObj.carJsonDefault.engine,
  engine: store.car.engine
});

const mapDispatchToProps = dispatch => ({
  defineEngine: engine => dispatch(defineEngine(engine))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engine);
