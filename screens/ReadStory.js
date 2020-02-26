import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppContext } from '../Context';

export default function ReadStory(props) {
  const { appState, setAppState } = useContext(AppContext);
  const story = props.route.params.story;
  const scene = story.scenes[appState.currentScene];

  const getPointer = (keywords, currentWord) => {
    let pointer = -1;
    keywords.forEach(key => {
      if (key['key'] === currentWord) {
        pointer = key['pointer'];
      }
    });
    return pointer;
  };

  return scene ? (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>
        {scene.text.split(' ').map((word, index) => {
          let pointer = getPointer(scene.keywords, word);
          if (pointer !== -1) {
            return (
              <Text
                key={index}
                style={{ color: 'blue' }}
                onPress={() => setAppState({ type: 'CHANGE_SCENE', pointer })}
              >
                {`${word} `}
              </Text>
            );
          } else {
            return <Text key={index}>{`${word} `}</Text>;
          }
        })}
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Add More Scenes!</Text>
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
