import React, { Component } from "react";
import Navbar from "./component1/Navbar";
import Footer from "./Footer";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Footer/>
      </div>
    );
  }
}

export default App;
