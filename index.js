/**
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {Provider} from 'react-native-paper';

export default function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

TrackPlayer.registerPlaybackService(() =>
  require('./src/services/playerService'),
);
