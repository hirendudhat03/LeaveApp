import React,{ useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,} from 'react-native';
import MyStatusBar from './source/component/Statusbar';
import Splash from './source/screen/auth/Splash'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const App = () => { 

  
  return (
    <View style={styles.container}>
      {/* <MyStatusBar/> */}
      <View style={styles.appBar}>
        <Splash/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flex:1,
    backgroundColor:'#fff',
    paddingBottom:-getStatusBarHeight(true)
  },

});

export default App;