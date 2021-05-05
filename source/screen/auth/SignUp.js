import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GlobalInclude from '../../globalInclude/GlobalInclude';
import Helper from '../../helper/Helper';

const login = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [mobileNoError, setMobileNoError] = useState('');

  const passwordShow = () => {
    if (passwordVisible == true) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
    }
  };

  const callSignUpAPI = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName === '') {
      setFirstNameError('Full Name Required');
    } else if (lastName === '') {
      setLastNameError('Last Name Required');
    } else if (email === '') {
      setEmailError('Email Required');
    } else if (mobileNo === '') {
      setMobileNoError('Mobile Number Required');
    }else if (password === '') {
      setPasswordError('Password Required');
    } else if (reg.test(email) == 0) {
      setEmailError('Email format not valid');
    } else {
      global.global_loader_reff.show_loader(1);

      var url = 'register';
      var Reqobj = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        mobile_no: mobileNo,
        password: password,
        username: 'useless',
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
              text={'Create an Account'}
              textStyle={{
                fontSize: 28,
                color: GlobalInclude.Color.ColorBlack,
                fontFamily: GlobalInclude.Font.Medium,
              }}
            />
            <GlobalInclude.Text
              text={'Signup to continue'}
              textStyle={{
                fontSize: 16,
                marginTop: 5,
                color: GlobalInclude.Color.Gray,
                fontFamily: GlobalInclude.Font.Regular,
              }}
            />

            <GlobalInclude.InputText
              placeholder={'Full Name'}
              autoCapitalize={'words'}
              error={firstNameError}
              onChangeText={(value) => {
                setFirstName(value);
                value === ''
                  ? setFirstNameError('Password Required')
                  : setFirstNameError('');
              }}
              inputStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
              }}
              viewStyle={{
                marginTop: 30,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
                fontFamily: GlobalInclude.Font.Regular,
              }}
            />

            <GlobalInclude.InputText
              placeholder={'Last Name'}
              autoCapitalize={'words'}
              error={lastNameError}
              onChangeText={(value) => {
                setLastName(value);
                value === ''
                  ? setLastNameError('Password Required')
                  : setLastNameError('');
              }}
              inputStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
              }}
              viewStyle={{
                marginTop: 10,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
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
                marginTop: 10,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
              }}
            />
            <GlobalInclude.InputText
              placeholder={'Enter Mobile Number'}
              error={mobileNoError}
              onChangeText={(value) => {
                setMobileNo(value);
                value === ''
                  ? setMobileNoError('Password Required')
                  : setMobileNoError('');
              }}
              inputStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
                fontFamily: GlobalInclude.Font.Regular,
              }}
              viewStyle={{
                marginTop: 10,
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
                marginTop: 10,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              icon={GlobalInclude.Assets.Eye}
              iconStyle={{height: 20, width: 20}}
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
              text={'Signup'}
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
              onPress={() => callSignUpAPI()}
            />

            <View
              style={{
                marginTop: 50,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <GlobalInclude.Text
                text={'Already Have an Account?'}
                textStyle={{
                  fontSize: 16,
                  textAlign: 'center',
                  color: GlobalInclude.Color.Gray,
                  fontFamily: GlobalInclude.Font.Regular,
                }}
              />
              <GlobalInclude.Text
                text={' Login'}
                textStyle={{
                  fontSize: 16,
                  textAlign: 'center',
                  color: GlobalInclude.Color.ColorOrange,
                  fontFamily: GlobalInclude.Font.Medium,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default login;
