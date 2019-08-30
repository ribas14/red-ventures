import React from "react";
import { connect } from "react-redux";

import {
  Container,
  ColorContainer,
  ContainerOption,
  ContainerChoices
} from "./Colors-styled";
import { Transition, animated } from "react-spring/renderprops";
import { defineColor } from "../../actions";

function ColorComponent(props) {
  return (
    <ColorContainer bgColor={props.color.hexadecimal}>
      Im number 1
    </ColorContainer>
  );
}

class Colors extends React.Component {
  state = {
    index: 0
  };

  toggle = color => {
    this.setState({
      index: color.id - 4
    });
    this.props.defineColor(color);
  };

  render() {
    const { index } = this.state;
    const { colors, color } = this.props;
    console.log(colors);
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
                {React.createElement(ColorComponent, { color })}
              </animated.div>
            )}
          </Transition>
        </Container>
        <ContainerChoices>
          {colors &&
            colors.items.map(color => {
              return (
                <ContainerOption
                  key={color.id}
                  onClick={() => this.toggle(color)}
                >
                  {color.hexadecimal}
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
  colors: store.jsonObj.carJsonDefault.color,
  color: store.car.color
});

const mapDispatchToProps = dispatch => ({
  defineColor: color => dispatch(defineColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors);
