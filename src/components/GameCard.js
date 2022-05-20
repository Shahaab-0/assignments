import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../common/Styles';

const GameCard = props => {
  const {
    container,
    contentContainer,
    innerContainer,
    valueText,
    keyText,
    absoluteText,
    absoluteContainer,
  } = styles;
  return (
    <View style={container}>
      <View style={absoluteContainer}>
        <Text style={absoluteText}>{props.item.game_type.name}</Text>
      </View>
      <View style={innerContainer}>
        <View style={contentContainer}>
          <Text style={valueText}>{props.item.category.name}</Text>
          <Text style={keyText}>{props.item.category.description}</Text>
        </View>
        <View style={contentContainer}>
          <Text style={valueText}>{props.item.category.active_players}</Text>
          <Text style={keyText}>Playing</Text>
        </View>
        <View style={contentContainer}>
          <Text style={valueText}>{props.item.category.min_buyin}</Text>
          <Text style={keyText}>Min Buy-in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 25,
    backgroundColor: '#272727',
    borderRadius: 10,
    paddingVertical: 21,
    paddingBottom: 23,
  },
  innerContainer: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  valueText: {
    color: '#cf984b',
    fontWeight: 'bold',
    fontSize: 15,
  },
  keyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  absoluteText: {
    paddingHorizontal: 12,
    color: '#4c3b36',
    paddingTop: 2,
    paddingBottom: 3,
    fontWeight: 'bold',
    fontSize: 13,
  },
  absoluteContainer: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#f6d06b',
    borderRadius: 5,
  },
});

export default GameCard;
