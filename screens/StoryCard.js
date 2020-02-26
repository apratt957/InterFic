import React from 'react';
import { Card, Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function StoryCard(props) {
  const navigation = useNavigation();
  return (
    <Card>
      <Text>{props.story.name}</Text>
      <Button
        title="Read Story"
        onPress={() => navigation.navigate('ReadStory', { story: props.story })}
      />
    </Card>
  );
}
