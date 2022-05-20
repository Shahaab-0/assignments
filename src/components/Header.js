import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../common/Styles';

const Header = props => {
  const {container, titleText} = styles;
  return (
    <View style={container}>
      <Text style={titleText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20252b',
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 17,
    marginLeft: 20,
    fontSize: 16,
  },
});

export default Header;
