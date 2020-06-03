import React, { Component } from 'react';
import Reduxwithfunction from './MainFunction'
import Reduxwithclass from './MainClass'
import {createStore, applyMiddleware} from  'redux';
import allReducers from './reducers/reducerindex';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


class App extends Component {
    
    render() {
    const myStore = createStore(allReducers , applyMiddleware(thunk));
        return (
            <div>
              <Provider store = {myStore}>
              <Reduxwithclass/>
              </Provider>
            </div>
        );
    }
}

export default App;

