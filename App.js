import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
  ,
  box1: {
    backgroundColor: 'powderblue',
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  box2: {
    backgroundColor: 'skyblue',
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  box3: {
    backgroundColor: 'steelblue',
    justifyContent: "center",
    alignItems: "center",
    flex: 3
  },
  text1: {
    height: 80
  },
});


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>Yo, box1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Yo, box2!</Text>
          <TextInput style={styles.text1}
            placeholder="Type something."
            onChangeText={(text) => this.setState({ text })}

          />
          <Button
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
        <View style={styles.box3}>
          <Text>{this.state.text}</Text>
        </View>
      </View>

    );
  }
}

