// 1. Developer Name(Who created the file) : Shahaab sabraiwala
// 2. Developer Email ID(Who created the file) : shahaab@dotminds.in
// 4. Date Created: 2nd march 2021
// 7. Previous version developer name and Email ID :
// 8. Previous version description :
// 9. Current version developer name and Email ID : Shahaab sabraiwala shahaab@dotminds.in

import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getTableData} from '../redux/ProfileSlice';

const ProfileScreen = () => {
  const {container} = styles;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTableData());
  }, []);
  return (
    <View style={container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
