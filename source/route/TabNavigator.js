import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Animated,Easing} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//import TabBar from '../component/Tabbar';
import {getStatusBarHeight} from 'react-native-status-bar-height';

//screen
import Dashboard from '../screen/tab/dashboard/Dashboard';
import Setting from '../screen/tab/setting/Setting';
// import Tab3 from '../screen/tab/settingTab/Setting';
// import ProductDetail from '../screen/tab/ProductDetail';
import GlobalInclude from '../globalInclude/GlobalInclude';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName={'DrawerNavigator'} headerMode={false}>
//       <Stack.Screen name="Tab1" component={Tab1} />
//       <Stack.Screen name="ProductDetail" component={ProductDetail} />
//     </Stack.Navigator>
//   );
// };

const tabnavigator = () => {
  // const animatedValue = new Animated.Value(0);

  // const animate = () => {
  //   animatedValue.setValue(0);
  //   Animated.spring(animatedValue, {
  //     toValue: 1,
  //     duration: 2000, 
  //   }).start();
  // };
  // const opacity = animatedValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [0, 1, 0],
  // });
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        showIcon: false,
        style: {
          backgroundColor: GlobalInclude.Color.TabBG,
          height: 60,
          width: '100%',
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      initialRouteName={'Tab1'}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={[styles.mainView]}>
                <Animated.View
                  style={[
                    styles.innerView,
                    {
                      backgroundColor: focused
                        ? GlobalInclude.Color.TabActive
                        : GlobalInclude.Color.TabBG,
                    },
                  ]}>
                  <Image
                    source={GlobalInclude.Assets.Home}
                    style={{height: 18, width: 18}}></Image>
                  {focused ? <Text style={styles.textStyle}>Home</Text> : null}
                </Animated.View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <View
                  style={[
                    styles.innerView,
                    {
                      backgroundColor: focused
                        ? GlobalInclude.Color.TabActive
                        : GlobalInclude.Color.TabBG,
                    },
                  ]}>
                  <Image
                    source={GlobalInclude.Assets.Search}
                    style={{height: 17, width: 17}}></Image>
                  {focused ? (
                    <Text style={styles.textStyle}>Search</Text>
                  ) : null}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting1"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <View
                  style={[
                    styles.innerView,
                    {
                      backgroundColor: focused
                        ? GlobalInclude.Color.TabActive
                        : GlobalInclude.Color.TabBG,
                    },
                  ]}>
                  <Image
                    source={GlobalInclude.Assets.Setting}
                    style={{height: 16, width: 16}}></Image>
                  {focused ? (
                    <Text style={styles.textStyle}>Filter</Text>
                  ) : null}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting2"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <View
                  style={[
                    styles.innerView,
                    {
                      backgroundColor: focused
                        ? GlobalInclude.Color.TabActive
                        : GlobalInclude.Color.TabBG,
                    },
                  ]}>
                  <Image
                    source={GlobalInclude.Assets.Profile}
                    style={{height: 19, width: 15}}></Image>
                  {focused ? (
                    <Text style={styles.textStyle}>Profile</Text>
                  ) : null}
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    height: '60%',
    width: '100%',
    flexDirection: 'row',
    marginVertical: '40%',
    //marginHorizontal: '10%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: 12,
    marginLeft: 7,
    fontFamily: GlobalInclude.Font.Regular,
  },
});

export default tabnavigator;
