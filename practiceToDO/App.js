
//  import React,{Component} from 'react' ;
//  import CounterContainer from './containers/CounterContainer.js'
//  import store from './reducers/counter' ;
//  import Provider from 'react-redux' ;
//  import {
//   AppRegistry,
//   StyleSheet,
//   View
// } from 'react-native';

// export default class App extends Component{
//   render(){
//     return (<Provider store={store}>
//       <View>
//         <CounterContainer/>
//       </View>
//     </Provider>)
//   }
// } 


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import CounterContainer from './containers/CounterContainer';
import store from './reducers/counter'
export default class App extends Component {
  render() {
    console.log(store,"store") ;
    return (
  <Provider store = {store}>
     <View style={styles.container}>
          <CounterContainer/>
        </View>
  </Provider>
       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
