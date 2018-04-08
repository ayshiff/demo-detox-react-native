import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  onClick() {
    return <View style={styles.container} testID="AnotherUniqueId456">
    <Text>another view</Text>
    </View>
  }

  render() {
    return <View style={styles.container}>
        <TouchableOpacity onPress={this.onClick} testID="MyUniqueId123">
          <Text>Some button</Text>
        </TouchableOpacity>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10
  },
});
