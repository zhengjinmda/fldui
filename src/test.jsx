import React, { Component } from 'react';
import RcAlign from 'rc-align';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.selectRef.current);
        }
        return this.nativeDOMNode;
    }
    
    render() { 
        return ( <RcAlign target={this.getNativeDOMNode.bind(this)} >1232131</RcAlign>)
    }
}
 

export default App