import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Text,
} from 'react-native';
import ProfileScreen from '../srceens/ProfileScreen';
import HomeScreen from '../srceens/HomeScreen';
import WalletScreen from '../srceens/WalletScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const {
    image,
    imageInactive,
    container1,
    container2,
    container3,
    containerWhite1,
    containerWhite2,
    containerWhite3,
  } = styles;
  return (
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            //   tabBarStyle: {borderRadius: 20},
            headerPressColor: 'blue',
            tabBarStyle: {
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              height: 55,
              backgroundColor: '#4a4f55',
              borderTopWidth: 0,
              elevation: 0,
            },
            //   tabBarItemStyle: {backgroundColor: 'red'},
          }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <SafeAreaView style={{width: '80%', flex: 1}}>
                    <View>
                      <Text
                        style={[
                          focused ? {color: '#ecc606'} : {color: 'white'},
                          {
                            alignItems: 'center',
                            marginTop: 18,
                            textAlign: 'center',
                          },
                        ]}>
                        Tab 1
                      </Text>
                    </View>
                  </SafeAreaView>
                );
              },
            }}
            listeners={({navigation, route}) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
          <Stack.Screen
            name="WalletScreen"
            component={WalletScreen}
            options={{
              tabBarShowLabel: false,
              tabBarStyle: {
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                height: 55,
                backgroundColor: '#4a4f55',
                borderTopWidth: 0,
              },
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <View style={{width: '80%', flex: 1}}>
                    <View style={{overflow: 'hidden'}}>
                      <View>
                        {/* <View style={container2}></View> */}

                        <Text
                          style={[
                            focused ? {color: '#ecc606'} : {color: 'white'},
                            {
                              alignItems: 'center',
                              marginTop: 18,
                              textAlign: 'center',
                            },
                          ]}>
                          Tab 2
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              },
            }}
            listeners={({navigation, route}) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth(),
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              tabBarShowLabel: false,
              tabBarStyle: {
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                height: 55,
                backgroundColor: '#4a4f55',
                borderTopWidth: 0,
              },
              headerShown: false,
              tabBarIcon: ({focused}) => {
                return (
                  <SafeAreaView style={{flex: 1, width: '80%'}}>
                    <View style={{overflow: 'hidden'}}>
                      <View>
                        {/* <View style={container3}></View> */}

                        <Text
                          style={[
                            focused ? {color: '#ecc606'} : {color: 'white'},
                            {
                              alignItems: 'center',
                              marginTop: 18,
                              textAlign: 'center',
                            },
                          ]}>
                          Tab 3
                        </Text>
                      </View>
                    </View>
                  </SafeAreaView>
                );
              },
            }}
            listeners={({navigation, route}) => ({
              // Onpress Update....
              tabPress: e => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 2,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
        </Tab.Navigator>
        <Animated.View
          style={{
            width: getWidth() - 60,
            height: 5,
            backgroundColor: '#ecc606',
            position: 'absolute',
            bottom: 50,
            left: 30,
            borderRadius: 10,
            transform: [{translateX: tabOffsetValue}],
          }}
        />
      </NavigationContainer>
    </View>
  );
};

const getWidth = () => {
  let width = Dimensions.get('window').width;
  width = width;
  return width / 3;
};
const config = {
  screens: {
    PostDetailScreen: {
      path: 'PostDetailScreen/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

// const MainRoutes = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//       }}
//       tabBarOptions={{
//         keyboardHidesTabBar: true,
//       }}>
//       <Stack.Screen name="BottomTabs" component={BottomTabs} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: 15,
  },
  imageInactive: {
    alignSelf: 'center',
    marginTop: 15,
  },
  container1: {
    // width: 100,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 4,
    // marginTop : 23
  },
  container2: {
    // width: 100,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  container3: {
    // width: 100,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  containerWhite1: {
    // width: 100,
    height: 5,
  },
  containerWhite2: {
    // width: 100,
    height: 5,
  },
  containerWhite3: {
    // width: 100,
    height: 5,
  },
});

export default BottomTabs;
