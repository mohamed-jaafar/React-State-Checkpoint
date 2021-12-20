import React from "react";
//defining profile component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      intervall: null,
      timer: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount ()");
    this.setState({
      intervalle: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.intervall);
  }
  render() {
    return <h2>{this.state.timer}</h2>;
  }
}
export default Profile;
