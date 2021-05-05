import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GlobalInclude from '../../globalInclude/GlobalInclude';
import Helper from '../../helper/Helper';
import AsyncStorage from '../../helper/AsyncStorage';

const login = ({navigation}) => {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');

  const callLoginAPI = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === '') {
      setEmailError('Email Required');
    } else if (reg.test(email) == 0) {
      setEmailError('Email format not valid');
    } else {
      global.global_loader_reff.show_loader(1);

      var url = 'resetpass';
      var Reqobj = {
        email: email,
      };

      Helper.UrlReq(url, Reqobj).then((response) => {
        if (response.data.responseCode === 1) {
          navigation.goBack();
          Helper.ToastShow(response.data.message, 'success');
        } else {
          Helper.ToastShow(response.data.message, 'fail');
        }
        global.global_loader_reff.show_loader(0);
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <GlobalInclude.Image
        source={GlobalInclude.Assets.LoginBG}
        imageStyle={{height: '100%', width: '100%'}}
        viewStyle={{flex: 1}}
      />
      <View
        style={{
          flex: 1.5,
          marginTop: -50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: GlobalInclude.Color.Colorwhite,
        }}>
        <View
          style={{
            marginTop: -150,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <GlobalInclude.Text
            text={'Leave'}
            textStyle={{
              fontSize: 32,
              textAlign: 'center',
              color: GlobalInclude.Color.Colorwhite,
              fontFamily: GlobalInclude.Font.Bold,
            }}
          />
          <GlobalInclude.Text
            text={' Management'}
            textStyle={{
              fontSize: 32,
              textAlign: 'center',
              color: GlobalInclude.Color.ColorOrange,
              fontFamily: GlobalInclude.Font.Bold,
            }}
          />
        </View>
        <ScrollView style={{marginTop: 130}}>
          <View style={{marginTop: 20, marginHorizontal: 25}}>
            <GlobalInclude.Text
              text={'Create New Password'}
              textStyle={{
                fontSize: 28,
                color: GlobalInclude.Color.ColorBlack,
                fontFamily: GlobalInclude.Font.Medium,
              }}
            />
            <GlobalInclude.Text
              text={
                'your new password must be different from previous used password.'
              }
              textStyle={{
                fontSize: 16,
                marginTop: 5,
                color: GlobalInclude.Color.Gray,
                fontFamily: GlobalInclude.Font.Regular,
              }}
            />

            <GlobalInclude.InputText
              placeholder={'Enter Email'}
              error={emailError}
              autoCapitalize={'none'}
              onChangeText={(value) => {
                setEmail(value);
                value === ''
                  ? setEmailError('Email Required')
                  : setEmailError('');
              }}
              inputStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
                fontFamily: GlobalInclude.Font.Regular,
              }}
              viewStyle={{
                marginTop: 50,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
              }}
            />

            <GlobalInclude.Text
              text={'Send'}
              textStyle={{
                fontSize: 18,
                color: GlobalInclude.Color.Colorwhite,
                fontFamily: GlobalInclude.Font.Medium,
              }}
              viewStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                backgroundColor: GlobalInclude.Color.ColorOrange,
                marginTop: 40,
                borderRadius: 5,
              }}
              onPress={() => callLoginAPI()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default login;
