// Index.ios.js - place code in here for IOS!!!

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// { Text } I just want the Text object from the 'react-native' library.

// Create a component
const App = () =>  // fat arrow function
  (
    //<Text>Some Text</Text> // This is JSX; not HTML. It's syntactic sugar.
    <View style={{ flex: 1 }}>
    {/*This style flex: 1 seems optional now. Used to make scrollable.*/}
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// String must match up with project name.
// We must refister at least one component.
