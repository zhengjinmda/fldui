import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar';
import HomePage from './homePage';
import Mac from './mac';
import './main.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="fld-iPhone_ad"></div>
        <NavBar />
        <div className="fld-iPhone_CoverLayer"></div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/mac/" exact component={Mac}></Route>
      </Router>
    );
  }
}

export default Main;
