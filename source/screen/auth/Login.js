import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GlobalInclude from '../../globalInclude/GlobalInclude';
import Helper from '../../helper/Helper';
import AsyncStorage from '../../helper/AsyncStorage';

const login = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const passwordShow = () => {
    if (passwordVisible == true) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
    }
  };

  const callLoginAPI = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === '') {
      setEmailError('Email Required');
    } else if (password === '') {
      setPasswordError('Password Required');
    } else if (reg.test(email) == 0) {
      setEmailError('Email format not valid');
    } else {
      global.global_loader_reff.show_loader(1);

      var url = 'login';
      var Reqobj = {
        username: email,
        password: password,
      };

      Helper.UrlReq(url, Reqobj).then((response) => {
        if (response.data.responseCode === 1) {
          navigation.replace('Animation');
          Helper.ToastShow(response.data.message, 'success');

          global.sessid = response.data.data.sessid;
          global.firstname = response.data.data.user_detail.firstname;
          global.lastname = response.data.data.user_detail.lastname;
          global.email = response.data.data.user_detail.email;

          AsyncStorage.setItem(GlobalInclude.Constant.sessId,response.data.data.sessid);
          AsyncStorage.setItem(GlobalInclude.Constant.firstname,response.data.data.user_detail.firstname);
          AsyncStorage.setItem(GlobalInclude.Constant.lastname,response.data.data.user_detail.lastname);
          AsyncStorage.setItem(GlobalInclude.Constant.email,response.data.data.user_detail.email);
          
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
              text={'Welcome to Login!'}
              textStyle={{
                fontSize: 28,
                color: GlobalInclude.Color.ColorBlack,
                fontFamily: GlobalInclude.Font.Medium,
              }}
            />
            <GlobalInclude.Text
              text={'Login to continue'}
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
            <GlobalInclude.InputText
              placeholder={'Password'}
              error={passwordError}
              onChangeText={(value) => {
                setPassword(value);
                value === ''
                  ? setPasswordError('Password Required')
                  : setPasswordError('');
              }}
              inputStyle={{
                flex: 5,
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
                fontFamily: GlobalInclude.Font.Regular,
              }}
              viewStyle={{
                marginTop: 20,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              icon={GlobalInclude.Assets.Eye}
              iconStyle={{height: 22, width: 22}}
              iconView={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginRight: 20,
              }}
              secureTextEntry={passwordVisible}
              onPressIcon={() => passwordShow()}
            />

            <GlobalInclude.Text
              text={'Forgot Password?'}
              textStyle={{
                fontSize: 16,
                marginTop: 10,
                textAlign: 'right',
                color: GlobalInclude.Color.Gray,
                fontFamily: GlobalInclude.Font.Regular,
              }}
              onPress={() => navigation.navigate('ForgotPassword')}
            />

            <GlobalInclude.Text
              text={'Login'}
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

            <View
              style={{
                marginTop: 50,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <GlobalInclude.Text
                text={'Dont Have an Account?'}
                textStyle={{
                  fontSize: 16,
                  textAlign: 'center',
                  color: GlobalInclude.Color.Gray,
                  fontFamily: GlobalInclude.Font.Regular,
                }}
              />
              <GlobalInclude.Text
                text={' Signup'}
                textStyle={{
                  fontSize: 16,
                  textAlign: 'center',
                  color: GlobalInclude.Color.ColorOrange,
                  fontFamily: GlobalInclude.Font.Medium,
                }}
                onPress={() => navigation.navigate('SignUp')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default login;
