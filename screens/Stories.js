import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { AppContext } from '../Context';
import StoryCard from './StoryCard';

export default function Stories(props) {
  const { appState } = useContext(AppContext);
  const stories = appState.stories;
  return (
    <View style={styles.container}>
      {stories.map(story => {
        return <StoryCard key={story._id} story={story} />;
      })}
      <Button
        title={'To the Scene Overview'}
        onPress={() => props.navigation.navigate('SceneView')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
