import React, { Component } from 'react';
import {FormStoreContext} from './Form';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <FormStoreContext.Consumer></FormStoreContext.Consumer> );
    }
}

export default FormItem;