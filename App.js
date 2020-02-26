import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StoryCard from './screens/StoryCard';
import ReadStory from './screens/ReadStory';
import Stories from './screens/Stories';
import SceneView from './screens/SceneView';
import ContextProvider from './Context';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Stories">
            <Stack.Screen name="Stories" component={Stories} />
            <Stack.Screen name="ReadStory" component={ReadStory} />
            <Stack.Screen name="StoryCard" component={StoryCard} />
            <Stack.Screen name="SceneView" component={SceneView} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    );
  }
}
