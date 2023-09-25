import { Component } from "react";
import HomePage from "./pages/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
    };
  }
  render() {
    return (
      <div className="app">
        <HomePage />
      </div>
    );
  }
}

export default App;
