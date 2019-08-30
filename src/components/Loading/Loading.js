import React from "react";
import Spinner from "react-spinner-material";
import { ContainerLoading } from "./Loading-styled";
export default class Footer extends React.Component {
  render() {
    return (
      <ContainerLoading>
        <Spinner
          size={120}
          spinnerColor={"#AB1725"}
          spinnerWidth={2}
          visible={true}
        />
      </ContainerLoading>
    );
  }
}
