import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Engine from "./pages/Engine/Engine";
import Colors from "./pages/Colors/Colors";
import Wheels from "./pages/Wheels/Wheels";
import Finished from "./pages/Finished/Finished";
import { fetchJson } from "./actions";

class App extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.jsonObj);
    if (prevProps.loading !== this.props.loading) {
      console.log(this.props.carJsonDefault);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/engine/" component={Engine} />
            <Route path="/color/" component={Colors} />
            <Route path="/wheels/" component={Wheels} />
            <Route path="/finished/" component={Finished} />
          </AnimatedSwitch>
        </Router>{" "}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  jsonObj: store.jsonObj.carJsonDefault,
  loading: store.jsonObj.loading
});

const mapDispatchToProps = dispatch => ({
  fetchJson: () => dispatch(fetchJson())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
