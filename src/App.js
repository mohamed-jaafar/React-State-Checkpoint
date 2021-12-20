import React from "react";
import { Button } from "react-bootstrap";
import Profile from "./component/Profile";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    console.log("constructor()");
    super(props);
    this.state = {
      Person: {
        fullName: "mohamed ben jaafar",
        bio: "GoMyCode",
        imgSrc: "/ProfilAvatar.png",
        profession: "fullstack js development",
      },
      show: false,
      intervall: null,
      timer: 0,
    };
  }
  showVisibility = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="content">
        <Button variant="outline-warning" onClick={this.showVisibility}>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </Button>{" "}
        {this.state.show ? (
          <>
            <img
              src={this.state.Person.imgSrc}
              style={{ width: "200px" }}
              alt="Avatar"
            ></img>
            <h3>
              Welcome ! I'm{" "}
              <span style={{ color: "yellow" }}>
                {" "}
                {this.state.Person.fullName}
              </span>
            </h3>
            <h3>
              I am currently learning{" "}
              <span style={{ color: "yellow" }}>
                {" "}
                {this.state.Person.profession}
              </span>{" "}
              at <span style={{ color: "yellow" }}>{this.state.Person.bio}</span>
            </h3>
            <h5>component's launch time: </h5>
            <Profile />
          </>
        ) : (
          <h6>Click on the button to show the profile</h6>
        )}
      </div>
    );
  }
}

export default App;
