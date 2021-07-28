import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Attendance from './screens/attendance';
import Submit from './screens/submission';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Attendance:Attendance,
  Submit:Submit,
});

const AppContainer=createAppContainer(AppNavigator)