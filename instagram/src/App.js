import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostPage";
import Authenticate from "./components/Authenticate/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
