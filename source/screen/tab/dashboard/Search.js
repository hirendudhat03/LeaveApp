import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StyleSheet, Text, View, Alert} from 'react-native';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener(handleConnectivityChange);
    NetInfo.fetch().then((state) => {
      
      setIsConnected(state.isConnected);
    });

    return () => {
      NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });
    };
  }, [NetInfo]);

  function handleConnectivityChange(state) {
    if (state.isConnected) {
      console.log('true => ',state.isConnected);
      setIsConnected(true);
    } else {
      console.log('false => ',state.isConnected);
      setIsConnected(false);
    }
  }

  function IsConnectedFalse() {
    return (
      <View style={{height:'100%', alignItems: 'center', justifyContent: 'center',backgroundColor: 'red', }}>
        <Text style={{fontSize: 22}}>No Internet Connection</Text>
      </View>
    );
  }
  function IsConnectedTrue() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: 'lightgreen', }}>
        <Text style={{fontSize: 22}}>Internet Connection Ready</Text>
      </View>
    );
  }

  return (
    <View style={{height: 30,marginTop: 50}}>
      {isConnected ? <IsConnectedTrue /> : <IsConnectedFalse />}
    </View>
  );
  // if (!isConnected) {
  //   return (
  //     <View style={{height: 30,backgroundColor:'lightgreen',marginTop:50}}>
  //       <MiniOfflineSign />
  //     </View>
  //   );
  // }
  // return null;
};
export default App;
// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, ScrollView} from 'react-native';
// import GlobalInclude from '../../../globalInclude/GlobalInclude';

// const dashBoard = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: GlobalInclude.Color.Colorwhite,
//       }}></View>
//   );
// };

// export default dashBoard;
