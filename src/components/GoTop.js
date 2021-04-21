import React, { Component } from "react";

export class GoTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.scrollTop.bind(this);
    window.onscroll = () => {
      this.scrollFunction();
    };
  }
  scrollTop() {
    document.documentElement.scrollTop = 0;
  }
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
      // this.$refs.top.style.display = "none";
    }
  }
  render() {
    let cls = "button is-primary top";
    if (this.state.visible) cls += " visible";
    return (
      <div className={cls} onClick={this.scrollTop}>
        ↑
      </div>
    );
  }
}

export default GoTop;
