import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, check, request, RESULTS} from 'react-native-permissions';
import DatePicker from 'react-native-datepicker';
import MyStatusBar from '../../../component/Statusbar';
import Helper from '../../../helper/Helper';

const options = {
  mediaType: 'photo',
  maxWidth: 512,
  maxHeight: 512,
  quality: 1,
  includeBase64: false,
  saveToPhotos: true,
};

const updateProfile = ({navigation}) => {
  //CamearGallery option
  const [editOption, setEditOption] = useState(false);
  //birthdate
  const [birthdate, setBirthDate] = useState('');
  //FullName
  const [fullName, setFullName] = useState(global.firstname);
  //LastName
  const [lastName, setLastName] = useState(global.lastname);
  //Email
  const [email, setEmail] = useState(global.email);
  //EmergencyMobileNum
  const [emergencyMobileNum, setEmergencyMobileNum] = useState('');
  //mobileNum
  const [mobileNum, setMobileNum] = useState('');
  //Address
  const [address, setAddress] = useState('');
  //Image get
  const [Image, setImage] = useState('');
  const [imageresponse, setImageResponse] = useState();

  //designation
  const [designation, setDesignation] = useState(false);
  const [designationEditable, setDesignationEditable] = useState(false);
  const [selectDesignation, setSelectDesignation] = useState('');
  //gender
  const [gender, setGender] = useState(false);
  const [selectGender, setSelectGender] = useState('');

  const editBtn = (visible) => {
    setEditOption(visible);
  };

  const updateProfile = () => {
    console.log('fullName ===>', fullName);
    console.log('lastName ===>', lastName);
    console.log('email ===>', email);
    console.log('birthdate ===>', birthdate);
    console.log('mobileNum ===>', mobileNum);
    console.log('emergencyMobileNum ===>', emergencyMobileNum);
    console.log('designation ===>', selectDesignation);
    console.log('gender ===>', selectGender);
    console.log('address ===>', address);

    if (fullName === '') {
      Helper.ToastShow('Enter Full Name', 'fail');
    } else if (lastName === '') {
      Helper.ToastShow('Enter Last Name', 'fail');
    } else if (email === '') {
      Helper.ToastShow('Enter Email', 'fail');
    } else if (mobileNum === '') {
      Helper.ToastShow('Enter Mobile Number', 'fail');
    } else if (emergencyMobileNum === '') {
      Helper.ToastShow('Enter Emergency Number', 'fail');
    } else if (selectDesignation === '') {
      Helper.ToastShow('Enter Designation', 'fail');
    } else if (birthdate === '') {
      Helper.ToastShow('Enter Birthdate', 'fail');
    } else if (selectGender === '') {
      Helper.ToastShow('Enter Gender', 'fail');
    } else if (address === '') {
      Helper.ToastShow('Enter Address', 'fail');
    } else {
      //API fetch here

      alert('Profile Update Successfully..');
    }
  };

  const clickdesignation = () => {
    if (designation === true) {
      setDesignation(false);
    } else {
      setDesignation(true);
    }
  };
  const clickgender = () => {
    if (gender === true) {
      setGender(false);
    } else {
      setGender(true);
    }
  };

  const listOfDesignation = () => {
    return (
      <ScrollView
        style={{marginHorizontal: 20, height: 100}}
        nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'React Native'}
          textStyle={{
            height: 20,
            fontSize: 14,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('React Native');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'PHP'}
          textStyle={{
            height: 20,
            fontSize: 14,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('PHP');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Designer'}
          textStyle={{
            height: 20,
            fontSize: 14,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('Designer');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Tester'}
          textStyle={{
            height: 20,
            fontSize: 14,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('Tester');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Custom'}
          textStyle={{
            height: 20,
            fontSize: 14,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setDesignationEditable(true);
            setDesignation(false);
          }}
        />
      </ScrollView>
    );
  };

  const listOfGender = () => {
    return (
      <ScrollView style={{marginHorizontal: 20}} nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'Male'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectGender('Male');
            setGender(false);
          }}
        />
        <GlobalInclude.Text
          text={'Female'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectGender('Female');
            setGender(false);
          }}
        />
      </ScrollView>
    );
  };

  const opengallery = () => {
    setEditOption(false);

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then((result) => {
        if (
          result['android.permission.READ_EXTERNAL_STORAGE'] &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          launchImageLibrary(options, (response) => {
            console.log(response);
            //setImageResponse(response);
            setImage(response.uri);
          });
        } else if (
          result['android.permission.READ_EXTERNAL_STORAGE'] ||
          result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            'never_ask_again'
        ) {
          alert(
            'Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue',
          );
        }
      });
    } else {
      handlephotoPermission();
    }
  };
  const handlephotoPermission = async () => {
    const res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    console.log('res => ', res);

    if (res === RESULTS.GRANTED) {
      launchImageLibrary(options, (response) => {
        console.log(response);
        setImage(response.uri);
      });
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (res2 === RESULTS.GRANTED) {
        launchImageLibrary(options, (response) => {
          console.log(response);
          setImage(response.uri);
        });
      }
    } else if (res === RESULTS.LIMITED) {
      launchImageLibrary(options, (response) => {
        console.log(response);
        setImage(response.uri);
      });
    }
  };

  const openCamera = () => {
    setEditOption(false);

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]).then((result) => {
        if (result['android.permission.CAMERA'] === 'granted') {
          launchCamera(options, (response) => {
            console.log(response);
            //setImageResponse(response);
            setImage(response.uri);
          });
        } else if (result['android.permission.CAMERA'] === 'never_ask_again') {
          alert(
            'Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue',
          );
        }
      });
    } else {
      handleCameraPermission();
    }
  };

  const handleCameraPermission = async () => {
    const res = await check(PERMISSIONS.IOS.CAMERA);

    if (res === RESULTS.GRANTED) {
      launchCamera(options, (response) => {
        alert('launchCamera');
        setImage(response.uri);
      });
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.CAMERA);
      if (res2 === RESULTS.GRANTED) {
        launchCamera(options, (response) => {
          console.log(response);
          setImage(response.uri);
        });
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* MyStatusBar */}
      <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
      {/* Header */}
      <GlobalInclude.Header
        rightIcon={GlobalInclude.Assets.LeftArrow}
        headerText={'Update Profile'}
        onPressRightIcon={() => navigation.goBack()}
      />

      {/* Design */}

      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            height: 180,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <GlobalInclude.Image
            uri={true}
            source={Image}
            imageStyle={{height: 100, width: 100, borderRadius: 70}}
            viewStyle={{
              height: 100,
              width: 100,
              borderRadius: 70,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: GlobalInclude.Color.Gray,
            }}
          />
          <GlobalInclude.Image
            source={GlobalInclude.Assets.Camera}
            imageStyle={{height: 11, width: 13}}
            viewStyle={{
              height: 23,
              width: 23,
              backgroundColor: GlobalInclude.Color.ColorOrange,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 60,
              marginTop: -20,
            }}
            onPress={() => editBtn(true)}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <GlobalInclude.InputText
            placeholder={'FirstName'}
            value={fullName}
            autoCapitalize={'words'}
            onChangeText={(value) => setFullName(value)}
            inputStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              marginLeft: 20,
              fontFamily: GlobalInclude.Font.Regular,
            }}
            viewStyle={{
              height: 45,
              backgroundColor: GlobalInclude.Color.InputBG,
              justifyContent: 'center',
            }}
          />
          <GlobalInclude.InputText
            placeholder={'LastName'}
            value={lastName}
            autoCapitalize={'words'}
            onChangeText={(value) => setLastName(value)}
            inputStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              marginLeft: 20,
              fontFamily: GlobalInclude.Font.Regular,
            }}
            viewStyle={{
              height: 45,
              backgroundColor: GlobalInclude.Color.InputBG,
              justifyContent: 'center',
            }}
          />
          <GlobalInclude.InputText
            placeholder={'Enter Email'}
            value={email}
            autoCapitalize={'none'}
            onChangeText={(value) => setEmail(value)}
            inputStyle={{
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
            }}
          />
          <GlobalInclude.InputText
            placeholder={'Mobile Number'}
            value={mobileNum}
            keyboardType={'numeric'}
            onChangeText={(value) => setMobileNum(value)}
            inputStyle={{
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
            }}
          />
          <GlobalInclude.InputText
            placeholder={'Emergency Contact Number'}
            value={emergencyMobileNum}
            keyboardType={'numeric'}
            onChangeText={(value) => setEmergencyMobileNum(value)}
            inputStyle={{
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
            }}
          />

          <GlobalInclude.InputText
            placeholder={'Designation'}
            value={selectDesignation}
            editable={designationEditable}
            onChangeText={(value) => setSelectDesignation(value)}
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
            icon={GlobalInclude.Assets.DownArrow}
            iconStyle={{height: 18, width: 18}}
            iconView={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
            }}
            onPressIcon={() => clickdesignation()}
          />
          {designation === true ? (
            <View
              style={{
                height: 100,
                backgroundColor: GlobalInclude.Color.InputBG,
                marginTop: 20,
              }}>
              {listOfDesignation()}
            </View>
          ) : null}

          <DatePicker
            style={{
              width: '100%',
              marginTop: 20,
              height: 45,
              backgroundColor: GlobalInclude.Color.InputBG,
              justifyContent: 'center',
              marginBottom: 12,
            }}
            date={birthdate}
            mode="date"
            placeholder="Birthdate"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            iconSource={GlobalInclude.Assets.Calendar}
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                // flex: 1,
                // justifyContent: 'center',
                // alignItems: 'flex-end',
                marginRight: 20,
                height: 20,
                width: 20,
              },
              dateInput: {
                // flex: 5,
                fontSize: 16,
                // color: GlobalInclude.Color.Gray,
                // paddingLeft: 20,
                borderWidth: 0,
              },
              dateText: {
                width: '100%',
                textAlign: 'left',
                fontSize: 16,
                paddingLeft: 20,
                color: GlobalInclude.Color.Gray,
                fontFamily: GlobalInclude.Font.Regular,
              },
              placeholderText: {
                width: '100%',
                textAlign: 'left',
                fontSize: 16,
                paddingLeft: 20,
                color: GlobalInclude.Color.Gray,
                fontFamily: GlobalInclude.Font.Regular,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => setBirthDate(date)}
          />

          <GlobalInclude.InputText
            placeholder={'Gender'}
            value={selectGender}
            editable={designationEditable}
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
            icon={GlobalInclude.Assets.DownArrow}
            iconStyle={{height: 18, width: 18}}
            iconView={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
            }}
            onPressIcon={() => clickgender()}
          />
          {gender === true ? (
            <View
              style={{
                height: 80,
                backgroundColor: GlobalInclude.Color.InputBG,
                marginTop: 20,
              }}>
              {listOfGender()}
            </View>
          ) : null}
          <GlobalInclude.InputText
            placeholder={'Address'}
            value={address}
            keyboardType={'numeric'}
            onChangeText={(value) => setAddress(value)}
            inputStyle={{
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
            }}
          />

          <GlobalInclude.Text
            text={'Submit'}
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
              marginTop: 60,
              borderRadius: 5,
              marginBottom: 30,
            }}
            onPress={() => updateProfile()}
          />
        </View>
      </ScrollView>

      {/* Model */}
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={editOption}
        onRequestClose={() => {
          alert('try Model close');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              height: 220,
              marginHorizontal: 20,
              backgroundColor: GlobalInclude.Color.Colorwhite,
              borderRadius: 20,
            }}>
            <GlobalInclude.Image
              source={GlobalInclude.Assets.Close}
              imageStyle={{height: 25, width: 25}}
              viewStyle={{
                alignItems: 'flex-end',
                marginHorizontal: 20,
                marginTop: 20,
              }}
              onPress={() => editBtn(false)}
            />

            <GlobalInclude.Text
              text={'Gallery'}
              viewStyle={{
                height: 50,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'gray',
                marginTop: 20,
              }}
              onPress={() => opengallery()}
            />
            <GlobalInclude.Text
              text={'Camera'}
              viewStyle={{
                height: 50,
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'gray',
                marginTop: 20,
              }}
              onPress={() => openCamera()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default updateProfile;
