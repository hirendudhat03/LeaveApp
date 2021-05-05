import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {CommonActions, NavigationContainer} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';

//screen
import UpdateProfile from '../screen/tab/dashboard/UpdateProfile';
import LeaveList from '../screen/tab/dashboard/LeaveList';
import LeaveStatus from '../screen/tab/dashboard/LeaveStatus';
import TabNavigator from './TabNavigator';
//import DrawerMenu from '../component/DrawerMenu';

import GlobalInclude from '../globalInclude/GlobalInclude';
//import {DataManager} from '../Support/DataManager';

const Drawer = createDrawerNavigator();

const drawernavigator = ({props}) => {
  // const AuthState = useSelector((state) => state.logoutReducer);

  // useEffect(() => {
  //   console.log(props);
  //   console.log('AuthState===>', AuthState);
  // }, []);

  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContentOptions={{
        inactiveTintColor: '#fff',
        contentContainerStyle: {
          height: '100%',
          width: '100%',
        },
        activeTintColor: '#fff',
        activeBackgroundColor: 'transparent',
        
        style: {backgroundColor: GlobalInclude.Color.DrawerBG},
      }}
      initialRouteName="TabNavigator">
      <Drawer.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          drawerLabel: '',
          drawerIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  height: 70,
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.Man}
                  imageStyle={{height: 50, width: 50, borderRadius: 50}}
                  viewStyle={{
                    height: 70,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{height: 50, marginLeft: 15}}>
                  <GlobalInclude.Text
                    text={'Hiren Dudhat'}
                    textStyle={{
                      fontSize: 17,
                      color: GlobalInclude.Color.Colorwhite,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={{flex: 1, justifyContent: 'center'}}
                  />
                  <GlobalInclude.Text
                    text={'hirendudhat01@gmail.com'}
                    textStyle={{
                      fontSize: 12,
                      color: GlobalInclude.Color.Colorwhite,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          drawerLabel: '',
          drawerIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <Image
                  source={GlobalInclude.Assets.Folder}
                  style={{height: 15, width: 21, marginLeft: 5}}
                />
                <Text
                  style={
                    focused ? styles.textStyleUnClick : styles.textStyleClick
                  }>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="LeaveList"
        component={LeaveList}
        options={{
          drawerLabel: '',
          drawerIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <Image
                  source={GlobalInclude.Assets.Folder}
                  style={{height: 15, width: 21, marginLeft: 5}}
                />
                <Text
                  style={
                    focused ? styles.textStyleUnClick : styles.textStyleClick
                  }>
                  Leave List
                </Text>
              </View>
            );
          },
        }}
      />
      
      {/* <Drawer.Screen
        name="LeaveStatus"
        component={LeaveStatus}
        options={{
          drawerLabel: '',
          swipeEnabled: false,
          drawerIcon: ({focused, color, size}) => {
            return (
              <View style={styles.mainView}>
                <Image
                  source={GlobalInclude.Assets.Folder}
                  style={{height: 15, width: 21, marginLeft: 5}}
                />
                <Text
                  style={
                    focused ? styles.textStyleUnClick : styles.textStyleClick
                  }>
                  Leave Status
                </Text>
              </View>
            );
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 30,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyleUnClick: {
    color: GlobalInclude.Color.ColorOrange,
    textAlign: 'left',
    fontFamily: GlobalInclude.Font.Regular,
    marginLeft: 15,
  },
  textStyleClick: {
    color: GlobalInclude.Color.Colorwhite,
    textAlign: 'left',
    width: '100%',
    fontFamily: GlobalInclude.Font.Regular, 
    marginLeft: 15,
  },
});

export default drawernavigator;
