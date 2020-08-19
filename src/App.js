import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <h1>button</h1>
          <h2>type</h2>
          <Button>primary</Button>
          <Button type='danger'>danger</Button>
          <Button type='warning'>warning</Button>
          <Button type='success'>success</Button>
          <Button type='info'>info</Button>
          <h2>size</h2>
          <Button size='default'>default</Button>
          <Button size='large'>large</Button>
          <Button size='small'>small</Button>
          <h2>disabled</h2>
          <Button disabled={true}>disabled</Button>
          <h2>circle</h2>
          <Button circle={true}>圆</Button>
          <Button circle={true}>Circle</Button>
          <h2>icon</h2>
          <Button icon="icon-search">icon</Button>
          <Button icon="icon-search" circle={true}></Button>
          <h2>function</h2>
          <Button onClick={()=>{console.log(1111)}}>primary</Button>
        </div>
      </div>
    );
  }
}

export default App;