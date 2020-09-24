import React, { Component } from "react";
import FormItem from './FormItem';

export const FormStoreContext = React.createContext(undefined);

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <FormStoreContext.Provider value={this.props.store}>
        <FormItem onSubmit={this.props.onSubmit}>{this.props.children}</FormItem>
      </FormStoreContext.Provider>
    );
  }
}
