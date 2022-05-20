import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>WalletScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },
});

export default HomeScreen;
