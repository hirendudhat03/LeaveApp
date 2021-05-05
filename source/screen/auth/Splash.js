import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import GlobalInclude from '../../globalInclude/GlobalInclude';
import {Root} from 'native-base';
import RootNavigators from '../../route/Route';
import AsyncStorage from '../../helper/AsyncStorage';
import Helper from '../../helper/Helper';

console.disableYellowBox = true;

const splash = () => {
  const [splashVisiblity, setSplashVisiblity] = useState(false);

  global.loader = 0;

  useEffect(() => {
    AsyncStorage.getItem(GlobalInclude.Constant.sessId).then((value) => {
      global.sessId = value;
    });
    setTimeout(() => {
      setSplashVisiblity(true);
      //callInitApp();
    }, 2000);
  });

  const callInitApp = () => {
    var url = 'init_app';

    var Reqobj = {
      sessid: global.sessId,
    };

    Helper.UrlReq(url, Reqobj).then((response) => {
      if (response.data.responseCode === 1) {
        global.sessid = response.data.data.sessid;
          global.firstname = response.data.data.user_detail.firstname;
          global.lastname = response.data.data.user_detail.lastname;
          global.email = response.data.data.user_detail.email;
        setSplashVisiblity(true);
      } else {
        AsyncStorage.removeItem(GlobalInclude.Constant.sessId);
        setSplashVisiblity(true);
      }
    });
  };

  if (splashVisiblity == true) {
    const Navigation = RootNavigators;

    return (
      <Root>
        <Navigation />
        <GlobalInclude.Loader
          ref={(ref) => (global.global_loader_reff = ref)}
        />
        <GlobalInclude.Alert ref={(ref) => (global.toast_reff = ref)} />
      </Root>
    );
  } else {
    return (
      <View style={styles.mainView}>
        <ImageBackground
          source={GlobalInclude.Assets.LoginBG}
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="stretch">
          <GlobalInclude.Image source={GlobalInclude.Assets.Aadarsh} />
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: GlobalInclude.Color.Colorwhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default splash;
