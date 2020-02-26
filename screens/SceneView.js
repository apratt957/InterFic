import React, { useContext } from 'react';
import Canvas from 'react-native-canvas';
import { AppContext } from '../Context';

export default function SceneView() {
  const { appState } = useContext(AppContext);
  const story = appState.stories[0];
  const scenes = story.scenes;
  console.log(scenes);
  handleCanvas = canvas => {
    if (canvas !== null) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, 100, 100);
    }
  };

  return <Canvas ref={handleCanvas} />;
}
