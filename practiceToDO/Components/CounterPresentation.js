import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CounterPresentation extends Component {
    render(){
      console.log(this.props);
      return(
        <View>
           <Button
           title="Up"
           onPress={this.props.increment}/>
           <Text>
               {this.props.count}
           </Text>

           <Button 
           title = "Down"
           onPress={this.props.decrement}/>
        </View>
        )
    }
}