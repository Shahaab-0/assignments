import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Banner from '../components/Banner';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import {getTableData} from '../redux/ProfileSlice';

const ProfileScreen = () => {
  const {container} = styles;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTableData());
  }, []);
  const {tableData} = useSelector(state => state.profile);
  console.log(tableData, 'table data in screen');
  return (
    <View style={container}>
      <Header title="Hey Shubham !" />
      <View>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tableData}
          renderItem={({item}) => (
            <View>
              <Banner />
            </View>
          )}
        />
      </View>
      <View>
        <FlatList
          data={tableData}
          renderItem={({item}) => (
            <View>
              <GameCard item={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },
});

export default ProfileScreen;
