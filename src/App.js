import React, { Component } from 'react';
import Reduxwithfunction from './MainFunction'
import Reduxwithclass from './MainClass'
import {createStore} from  'redux';
import allReducers from './reducers/reducerindex';
import {Provider} from 'react-redux';


class App extends Component {
    
    render() {
    const myStore = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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

