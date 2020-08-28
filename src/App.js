import React, { Component } from 'react';
import {Button, ButtonByHook} from './button';
import Select from './select'
import Toast from './toast'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  showToast = (type) => {
    Toast[type](type)
  }

  render() {
    return (
      <div>
        <div>
          <h1>Button</h1>
          <h3>type</h3>
          <Button>primary</Button>
          <Button type='danger'>danger</Button>
          <Button type='warning'>warning</Button>
          <Button type='success'>success</Button>
          <Button type='info'>info</Button>
          <h3>size</h3>
          <Button size='default'>default</Button>
          <Button size='large'>large</Button>
          <Button size='small'>small</Button>
          <h3>disabled</h3>
          <Button disabled={true}>disabled</Button>
          <h3>circle</h3>
          <Button circle={true}>圆</Button>
          <Button circle={true}>C</Button>
          <h3>icon</h3>
          <Button icon="icon-search">icon</Button>
          <Button icon="icon-search" circle={true}></Button>
          <h3>function</h3>
          <Button onClick={()=>{console.log(1111)}}>primary</Button>
          <ButtonByHook onClick={()=>{console.log(1111)}}>primary</ButtonByHook>
        </div>
        <div>
          <h1>Select</h1>
          <Select />
          <h3>disabled</h3>
          <Select disabled={true} />
        </div>
        <div>
          <h1>toast</h1>
          <Button type='success' onClick={() => this.showToast('success')}>success toast</Button>
          <Button type='danger' onClick={() => this.showToast('error')}>error toast</Button>
          <Button type='warning' onClick={() => this.showToast('warning')}>warning toast</Button>
          <Button type='info' onClick={() => this.showToast('info')}>info toast</Button>
        </div>
      </div>
    );
  }
}

export default App;