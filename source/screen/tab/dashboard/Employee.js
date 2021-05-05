import React, {useState, useEffect} from 'react';
import {View, Animated, Text, StyleSheet, Modal} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import MyStatusBar from '../../../component/Statusbar';

const employee = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* MyStatusBar */}
      <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
      {/* Header */}
      <GlobalInclude.Header
        rightIcon={GlobalInclude.Assets.LeftArrow}
        headerText={'Employee'}
        onPressRightIcon={() => navigation.goBack()}
      />
      <View
        style={{
          height: 70,
          marginHorizontal: 20,
          marginTop: 20,
          borderColor: 'gray',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <GlobalInclude.Image
            source={GlobalInclude.Assets.Man}
            imageStyle={{height: 50, width: 50, borderRadius: 50}}
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center', marginLeft: 15}}>
          <GlobalInclude.Text
            text={'Hiren Dudhat'}
            textStyle={{
              fontSize: 17,
              color: GlobalInclude.Color.ColorBlack,
              fontFamily: GlobalInclude.Font.Medium,
              marginVertical: 3,
            }}
          />
          <GlobalInclude.Text
            text={'Available'}
            textStyle={{
              fontSize: 14,
              color: GlobalInclude.Color.ColorBlack,
              marginVertical: 3,
              fontFamily: GlobalInclude.Font.Regular,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default employee;
