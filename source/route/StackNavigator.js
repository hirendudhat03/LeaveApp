import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import SignUp from '../screen/auth/SignUp';
import Login from '../screen/auth/Login';
import ForgotPassword from '../screen/auth/ForgotPassword';
import LeaveRequest from '../screen/tab/dashboard/LeaveRequest';
import UpdateProfile from '../screen/tab/dashboard/UpdateProfile';
import LeaveStatus from '../screen/tab/dashboard/LeaveStatus';
import LeaveList from '../screen/tab/dashboard/LeaveList';
import Dashboard from '../screen/tab/dashboard/Dashboard';
import Employee from '../screen/tab/dashboard/Employee';
import Animation from '../screen/tab/dashboard/Animation';
import HoliDay from '../screen/tab/dashboard/HoliDay';

import AsyncStorage from '../helper/AsyncStorage';

//tabnavigator
// import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import GlobalInclude from '../globalInclude/GlobalInclude';

//import {DataManager} from '../Support/DataManager';

const stackNavigator = () => {
  const Stack = createStackNavigator();

   const [initRoute, setInitRoute] = useState(null);

   const sessionInfo = () => {
    console.log('sessionInfo =>')

    AsyncStorage.getItem(GlobalInclude.Constant.sessId).then((value)=>{
      console.log('Tokan =>',value)
      if (value === null) {
        setInitRoute('Animation');
      } else {
        // no access token
        setInitRoute('Animation');
      }
    });
  //   let token = await DataManager.getAccessToken();
  //   let accessTokenData = await JSON.parse(token);
  //   console.log('accessTokenData => ', accessTokenData);
  
   };

  useEffect(() => {
    sessionInfo();
  }, [initRoute]);

  return (
     initRoute && (
      <Stack.Navigator initialRouteName={initRoute} headerMode={true}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Animation" component={Animation} />
        {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="LeaveRequest" component={LeaveRequest} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="LeaveStatus" component={LeaveStatus} />
        <Stack.Screen name="LeaveList" component={LeaveList} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="HoliDay" component={HoliDay} />
      </Stack.Navigator>
     )
  );
};

export default stackNavigator;
