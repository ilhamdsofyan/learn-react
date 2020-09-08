import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const App = () => {
  return <StylingComponents />;
};

const StylingComponents = () => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <View style={styles.view} />

      <View style={styles.card_view}>
        <Image
          source={{uri: 'https://placeimg.com/188/107/tech'}}
          style={styles.card_image}
        />
        <Text style={styles.card_title}>New Mackbook Pro 2019</Text>
        <Text style={styles.card_price}>Rp. 25.000.000,-</Text>
        <Text style={styles.card_desc}>Jakarta Barat</Text>

        <View style={styles.card_button}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '800',
              fontSize: 14,
              color: '#ffff',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c0392b',
    marginTop: 20,
    marginLeft: 20,
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#bdc3c7',
    borderWidth: 2,
    borderColor: '#7f8c8d',
    marginTop: 20,
    marginLeft: 20,
  },
  card_view: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    width: 212,
  },
  card_image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  card_title: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: 'bold',
  },
  card_price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 14,
  },
  card_desc: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 12,
  },
  card_button: {
    marginTop: 20,
    paddingVertical: 6,
    backgroundColor: '#6fcf97',
    borderRadius: 25,
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#ecf0f1',
          borderRadius: 8,
          padding: 10,
          width: 150,
          margin: 10,
        }}>
        <Photo />
        <Text>Hello World</Text>
        <Ilham />
      </View>

      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text>This animal's image was generated through component's class</Text>
      </View>
    );
  }
}

export default App;
