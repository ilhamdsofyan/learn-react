import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#ecf0f1',
        borderRadius: 8,
        padding: 10,
        width: 250,
        margin: 10,
      }}>
      <Photo />
      <Text>Hello World</Text>
      <Ilham />
    </View>
  );
};

const Ilham = () => {
  return <Text>Hello Ilham Dwi Sofyan</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100, alignSelf: 'center'}}
    />
  );
};

export default App;
