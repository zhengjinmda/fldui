import React, { Component } from 'react';
import { Button } from './button';
import ReactDOM from 'react-dom';
import Toast from './toast';
import Select from './select';
import IPhone from './iphone';
import Tabs from './tabs';
// import { Form,FormItem } from './form'
const { Option } = Select;
const { TabItem } = Tabs;

class App extends Component {
  constructor(props) {
    super(props);
    this.contextRef = React.createRef();
    this.state = {
    }
  }

  componentDidMount() {
    this.contextDom = ReactDOM.findDOMNode(this.contextRef.current);
  }

  showToast = (type) => {
    Toast[type](type)
  }

  render() {
    return (
      <div>
        <IPhone />
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
          <Button onClick={() => { console.log('button click') }}>primary</Button>
        </div>
        <div>
          <h1>Select</h1>
          <Select defaultValue='1' >
            <Option value="1">一</Option>
            <Option value="2">二</Option>
            <Option value="3">三</Option>
          </Select>
          <h3>disabled</h3>
          <Select disabled={true} />
          <h3>onChange</h3>
          <Select defaultValue='2' onChange={() => { console.log('select change') }}>
            <Option value="1">一</Option>
            <Option value="2">二</Option>
            <Option value="3">三</Option>
          </Select>
          <h3>data</h3>
          <Select defaultValue='1' options={[{ value: '1', label: '一' }, { value: '2', label: '二' }, { value: '3', label: '三' },]} style={{ width: 160 }} />
        </div>
        <div>
          <h1>toast</h1>
          <Button type='success' onClick={() => this.showToast('success')}>success toast</Button>
          <Button type='danger' onClick={() => this.showToast('error')}>error toast</Button>
          <Button type='warning' onClick={() => this.showToast('warning')}>warning toast</Button>
          <Button type='info' onClick={() => this.showToast('info')}>info toast</Button>
        </div>
        <div>
          <h1>Tabs</h1>
          <Tabs>
            <TabItem header="tab-01">
              <div className="tabContent tabContent--01">
                内容一
                </div>
            </TabItem>
            <TabItem header="tab-02">
              <div className="tabContent tabContent--02">
                内容二
                </div>
            </TabItem>
            <TabItem header="tab-03">
              <div className="tabContent tabContent--03">
                内容三
                </div>
            </TabItem>
          </Tabs>
          <div ref={this.contextRef}>
            <div>
              <p>hhhhhhhhh</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;