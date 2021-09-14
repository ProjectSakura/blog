import React from "react";

export default class AdComponent extends React.Component {
  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1277633863266032"
        data-ad-slot="8931146882"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
