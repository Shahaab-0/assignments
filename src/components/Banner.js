import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {color} from '../../common/Styles';

const Banner = () => {
  const {width} = Dimensions.get('window');
  const {container, image} = styles;
  return (
    <View style={[container, {width: width}]}>
      <Image
        style={image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161__340.jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 50,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default Banner;
