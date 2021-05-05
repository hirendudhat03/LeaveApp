import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GlobalInclude from '../globalInclude/GlobalInclude';
import MyStatusBar from './Statusbar';

const header = (props) => {
  return (
    <View>
      {/* <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange}/> */}
      <View
        style={[{
          height: 45,
          width: '100%',
          backgroundColor: GlobalInclude.Color.ColorOrange,
          flexDirection: 'row',
          alignItems: 'center',
        },props.viewStyle]}>
        <View
          style={{
            flex: 1,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <GlobalInclude.Image
            source={props.rightIcon}
            imageStyle={{
              height: 21,
              width: 27,
              marginLeft: 20,
              tintColor: GlobalInclude.Color.Colorwhite,
            }}
            onPress={props.onPressRightIcon}
          />
        </View>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <GlobalInclude.Text
            text={props.headerText}
            textStyle={{
              fontSize: 20,
              color: GlobalInclude.Color.Colorwhite,
              fontFamily: GlobalInclude.Font.Bold,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <GlobalInclude.Image
            source={props.leftIcon}
            imageStyle={{
              height: 24,
              width: 21,
              marginLeft: 20,
              tintColor: GlobalInclude.Color.Colorwhite,
            }}
            onPress={props.onPressLefttIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default header;
