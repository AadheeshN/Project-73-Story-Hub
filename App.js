import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


export default class App extends React.Component {
  render() {
  return (
    <AppContainer />
  );
}
}

const Tab = createBottomTabNavigator({
  'Write Story' : {screen: WriteStoryScreen},
  'Read Story' : {screen: ReadStoryScreen},
},
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon:({}) => {
      const routeName = navigation.state.routeName
      if (routeName === 'Write Story') {
        return(<Image style = {{width:25, height: 25}} source = {require('./assets/write.png')}/>)
      }

      else if (routeName === 'Read Story') {
        return(<Image style = {{width:25, height: 25}} source = {require('./assets/read.png')}/>)
      }
      }
    })
  }  
);

const AppContainer = createAppContainer(Tab);
