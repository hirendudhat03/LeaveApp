import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import {scale} from '../../../theme/Scalling';
import Helper from '../../../helper/Helper';

const dashBoard = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GlobalInclude.Color.Colorwhite,
      }}>
      <ImageBackground source={GlobalInclude.Assets.LoginBG} style={{flex: 1}}>
        <View
          style={{
            height: scale(30),
            alignItems: 'flex-end',
            marginTop: Platform.OS === 'ios' ? scale(45) : scale(35),
          }}>
          <GlobalInclude.Image
            source={GlobalInclude.Assets.LeftArrow}
            imageStyle={{height: scale(10), width: scale(15)}}
            viewStyle={{
              height: scale(30),
              width: scale(30),
              backgroundColor: GlobalInclude.Color.Gray,
              marginRight: scale(20),
              borderRadius: scale(5),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={props.BackPress}
          />
        </View>
        <View style={{flex: 1, marginBottom: 90}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <GlobalInclude.Image
              source={GlobalInclude.Assets.Man}
              imageStyle={{
                height: '100%',
                width: '100%',
                borderRadius: scale(100),
              }}
              viewStyle={{
                height: scale(100),
                width: scale(100),
                borderRadius: scale(100),
                borderWidth: scale(4),
                borderColor: GlobalInclude.Color.Colorwhite,
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <GlobalInclude.Text
              text={global.firstname + ' ' + global.lastname}
              textStyle={{
                fontSize: 26,
                fontFamily: GlobalInclude.Font.Bold,
                color: GlobalInclude.Color.Colorwhite,
                textAlign: 'center',
                marginTop: scale(10),
              }}
            />
            <GlobalInclude.Text
              text={'React Native Developer'}
              textStyle={{
                fontSize: 18,
                fontFamily: GlobalInclude.Font.Regular,
                color: GlobalInclude.Color.Colorwhite,
                textAlign: 'center',
                marginTop: scale(5),
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1.1,
          backgroundColor: GlobalInclude.Color.Colorwhite,
          backgroundColor: GlobalInclude.Color.Colorwhite,
          borderTopLeftRadius: scale(30),
          borderTopRightRadius: scale(30),
          marginTop: scale(-30),
        }}>
        <View
          style={{
            height: scale(100),
            marginHorizontal: scale(40),
            marginTop: scale(-50),
            backgroundColor: GlobalInclude.Color.Colorwhite,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <GlobalInclude.Text
              text={'Email'}
              textStyle={{
                fontSize: 18,
                color: GlobalInclude.Color.ColorOrange,
                fontFamily: GlobalInclude.Font.Medium,
                textAlign: 'center',
              }}
            />
            <GlobalInclude.Text
              text={global.email}
              textStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.ColorBlack,
                fontFamily: GlobalInclude.Font.Regular,
                textAlign: 'center',
                marginTop: scale(3),
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <GlobalInclude.Text
              text={'Mobile Number'}
              textStyle={{
                fontSize: 18,
                color: GlobalInclude.Color.ColorOrange,
                fontFamily: GlobalInclude.Font.Medium,
                textAlign: 'center',
              }}
            />
            <GlobalInclude.Text
              text={'9638257250'}
              textStyle={{
                fontSize: 16,
                color: GlobalInclude.Color.ColorBlack,
                fontFamily: GlobalInclude.Font.Regular,
                textAlign: 'center',
                marginTop: scale(3),
              }}
            />
          </View>
        </View>
        <GlobalInclude.Text
          text={'Other Details'}
          textStyle={{
            fontSize: 24,
            color: GlobalInclude.Color.ColorBlack,
            fontFamily: GlobalInclude.Font.Medium,
            textAlign: 'center',
            marginTop: scale(15),
          }}
        />
        <ScrollView style={{flex: 1}}>
          {/* Line 1 */}
          <GlobalInclude.Text
            text={'Emergency Contact Number'}
            textStyle={{
              fontSize: 18,
              color: GlobalInclude.Color.ColorOrange,
              fontFamily: GlobalInclude.Font.Medium,
              textAlign: 'center',
              marginTop: 15,
            }}
          />
          <GlobalInclude.Text
            text={'9638257250'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Regular,
              textAlign: 'center',
              marginTop: scale(3),
            }}
          />

          {/* Line 1 */}
          <GlobalInclude.Text
            text={'Birthdate'}
            textStyle={{
              fontSize: 18,
              color: GlobalInclude.Color.ColorOrange,
              fontFamily: GlobalInclude.Font.Medium,
              textAlign: 'center',
              marginTop: 15,
            }}
          />
          <GlobalInclude.Text
            text={'13th Des 2000'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Regular,
              textAlign: 'center',
              marginTop: scale(3),
            }}
          />

          {/* Line 1 */}
          <GlobalInclude.Text
            text={'Gender'}
            textStyle={{
              fontSize: 18,
              color: GlobalInclude.Color.ColorOrange,
              fontFamily: GlobalInclude.Font.Medium,
              textAlign: 'center',
              marginTop: 15,
            }}
          />
          <GlobalInclude.Text
            text={'Male'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Regular,
              textAlign: 'center',
              marginTop: scale(3),
            }}
          />

          {/* Line 1 */}
          <GlobalInclude.Text
            text={'Adress'}
            textStyle={{
              fontSize: 18,
              color: GlobalInclude.Color.ColorOrange,
              fontFamily: GlobalInclude.Font.Medium,
              textAlign: 'center',
              marginTop: 15,
            }}
          />
          <GlobalInclude.Text
            text={
              '203 2nd Floor, Anand Plaza, Raiya Road Circle, Rajkot-360007'
            }
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Regular,
              textAlign: 'center',
              marginTop: scale(3),
            }}
          />

          <GlobalInclude.Text
            text={'Edit Profile'}
            textStyle={{
              fontSize: scale(16),
              color: GlobalInclude.Color.Colorwhite,
              fontFamily: GlobalInclude.Font.Bold,
            }}
            viewStyle={{
              height: scale(40),
              marginHorizontal: scale(20),
              backgroundColor: GlobalInclude.Color.ColorOrange,
              alignItems:'center',
              justifyContent:'center',
              marginTop:scale(20),
              borderRadius:scale(5),
              marginBottom:scale(10)
            }}
            onPress={props.EditProfileClick}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default dashBoard;
