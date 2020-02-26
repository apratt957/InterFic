import React, { useEffect, useState, useRef, useReducer } from 'react';
import axios from 'axios';
import { ngrokSecret } from './secrets';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_STORIES':
      return { ...state, stories: action.stories };
    case 'CHANGE_SCENE':
      return { ...state, currentScene: action.pointer };
  }
};

export const AppContext = React.createContext();

export default ContextProvider = props => {
  const contextState = {
    stories: [],
    currentScene: 0
    // addScene: (id, sceneId, text, keyword, pointer) => {
    //   axios
    //     .patch(`${ngrokSecret}/api/players/addScene`, {
    //       id,
    //       sceneId,
    //       text,
    //       keyword,
    //       pointer
    //     })
    //     .then(response => {
    //       setAppState({ type: 'ADD_SCENE', player: response.data });
    //     });
    // }
  };
  const [appState, setAppState] = useReducer(reducer, contextState);
  const gotData = useRef(false);

  useEffect(() => {
    fetchStories();
    return () => {
      gotData.current = true;
    };
  }, []);

  fetchStories = () => {
    axios.get(`${ngrokSecret}/api/stories`).then(response => {
      if (!gotData.current) {
        setAppState({ type: 'GET_STORIES', stories: response.data });
      }
    });
  };

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};
