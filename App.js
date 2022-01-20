import React from 'react';
//import {Text, View} from 'react-native';
import Countries from './src/components/Countries';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './src/reducers/reducer';
import thunk from 'redux-thunk';

const Store= createStore(reducer,applyMiddleware(thunk));

const App = () => {
  return(
    <Provider store={Store}>
   <Countries />
   </Provider>
  )
};

export default App;
