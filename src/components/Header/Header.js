import React from "react";
import { ContainerLogo, ItemHeader } from "./Header-styled";
import ReactSVG from "react-svg";
import Logo from "../../assets/svg/RV-logo.svg";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ContainerLogo>
          <Link to="/">
            <ReactSVG src={Logo} />
          </Link>
          <ItemHeader>Model R</ItemHeader>
        </ContainerLogo>
      </div>
    );
  }
}
