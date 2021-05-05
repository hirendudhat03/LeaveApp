import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import DatePicker from 'react-native-datepicker';
import MyStatusBar from '../../../component/Statusbar';

const updateProfile = ({navigation}) => {
  //designation
  const [designation, setDesignation] = useState(false);
  const [designationEditable, setDesignationEditable] = useState(false);
  const [selectDesignation, setSelectDesignation] = useState('');
  //selectday
  const [selectDay, setSelectDay] = useState(false);
  const [chooseSelectDay, setChooseSelectDay] = useState('');
  //gender
  const [gender, setGender] = useState(false);
  const [selectGender, setSelectGender] = useState('');
  //seniorMember
  const [seniorMember, setSeniorMember] = useState(false);
  const [selectSeniorMember, setSelectSeniorMember] = useState('');
  const [selectSeniorEditable, setSelectSeniorEditable] = useState(false);
  //title
  const [title, setTitle] = useState('');
  //reason
  const [reason, setReason] = useState('');
  //FirstSecond
  const [firstSecond, setFirstSecond] = useState(false);
  const [selectFirstSecond, setSelectFirstSecond] = useState('');
  //date
  const [singleDate, setSingleDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const sendRequest = () => {
    console.log('chooseSelectDay ===>', chooseSelectDay);
    console.log('selectFirstSecond ===>', selectFirstSecond);
    console.log('singleDate ===>', singleDate);
    console.log('startDate ===>', startDate);
    console.log('endDate ===>', endDate);
    console.log('designation ===>', selectDesignation);
    console.log('gender ===>', selectGender);
    console.log('seniorMember ===>', selectSeniorMember);
    console.log('title ===>', title);
    console.log('reason ===>', reason);
    alert('Request Send Successfully..');
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
  const clickSeniarMember = () => {
    if (seniorMember === true) {
      setSeniorMember(false);
    } else {
      setSeniorMember(true);
    }
  };
  const clickFirstSecond = () => {
    if (firstSecond === true) {
      setFirstSecond(false);
    } else {
      setFirstSecond(true);
    }
  };
  const listOfFirstSecond = () => {
    return (
      <ScrollView style={{marginHorizontal: 20}} nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'First Half'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectFirstSecond('First Half');
            setFirstSecond(false);
          }}
        />
        <GlobalInclude.Text
          text={'Second Half'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectFirstSecond('Second Half');
            setFirstSecond(false);
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
  const listOfSeniorMember = () => {
    return (
      <ScrollView style={{marginHorizontal: 20}} nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'Mayur Vadolia'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectSeniorMember('Mayur Vadolia');
            setSeniorMember(false);
          }}
        />
        <GlobalInclude.Text
          text={'Miral Dadhania'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectSeniorMember('Miral Dadhania');
            setSeniorMember(false);
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
            setSelectSeniorEditable(true);
            setSeniorMember(false);
          }}
        />
      </ScrollView>
    );
  };

  const listOfDesignation = () => {
    return (
      <ScrollView style={{marginHorizontal: 20}} nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'React Native'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('React Native');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'PHP'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('PHP');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Designer'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('Designer');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Tester'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setSelectDesignation('Tester');
            setDesignation(false);
          }}
        />
        <GlobalInclude.Text
          text={'Custom'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setDesignationEditable(true);
            setDesignation(false);
          }}
        />
      </ScrollView>
    );
  };
  const clickDays = () => {
    if (selectDay === true) {
      setSelectDay(false);
    } else {
      setSelectDay(true);
    }
  };

  const listOfDays = () => {
    return (
      <ScrollView style={{marginHorizontal: 20}} nestedScrollEnabled={true}>
        <GlobalInclude.Text
          text={'Half Day'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setChooseSelectDay('Half Day');
            setSelectDay(false);
          }}
        />
        <GlobalInclude.Text
          text={'Full Day'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setChooseSelectDay('Full Day');
            setSelectDay(false);
          }}
        />
        <GlobalInclude.Text
          text={'Multiple Day'}
          textstyle={{height: 20}}
          viewStyle={{height: 40, justifyContent: 'center'}}
          onPress={() => {
            setChooseSelectDay('Multiple Day');
            setSelectDay(false);
          }}
        />
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* MyStatusBar */}
      <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
      {/* Header */}
      <GlobalInclude.Header
        rightIcon={GlobalInclude.Assets.LeftArrow}
        headerText={'Leave Request'}
        onPressRightIcon={() => navigation.goBack()}
      />

      {/* Design */}

      <ScrollView nestedScrollEnabled={true}>
        <View style={{marginHorizontal: 20}}>
          <GlobalInclude.InputText
            placeholder={'Select Days'}
            value={chooseSelectDay}
            editable={false}
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
            onPressIcon={() => clickDays()}
          />
          {selectDay === true ? (
            <View
              style={{
                height: 100,
                backgroundColor: GlobalInclude.Color.InputBG,
                marginTop: 20,
              }}>
              {listOfDays()}
            </View>
          ) : null}

          {chooseSelectDay === 'Half Day' ? (
            <GlobalInclude.InputText
              placeholder={'First Half/Second Half'}
              value={selectFirstSecond}
              inputStyle={{
                flex: 5,
                fontSize: 16,
                color: GlobalInclude.Color.Gray,
                marginLeft: 20,
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
              onPressIcon={() => clickFirstSecond()}
            />
          ) : null}
          {firstSecond === true ? (
            <View
              style={{
                height: 80,
                backgroundColor: GlobalInclude.Color.InputBG,
                marginTop: 20,
              }}>
              {listOfFirstSecond()}
            </View>
          ) : null}

          {chooseSelectDay === 'Full Day' ? (
            <DatePicker
              style={{
                width: '100%',
                marginTop: 20,
                height: 45,
                backgroundColor: GlobalInclude.Color.InputBG,
                justifyContent: 'center',
                marginBottom:12
              }}
              date={singleDate}
              mode="date"
              placeholder="Day"
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
                },
                placeholderText: {
                  width: '100%',
                  textAlign: 'left',
                  fontSize: 16,
                  paddingLeft: 20,
                  color: GlobalInclude.Color.Gray,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => setSingleDate(date)}
            />
          ) : null}
          {chooseSelectDay === 'Multiple Day' ? (
            <View style={{flexDirection: 'row',marginBottom:12}}>
              <View style={{flex: 1}}>
                <DatePicker
                  style={{
                    width: '95%',
                    marginTop: 20,
                    height: 45,
                    backgroundColor: GlobalInclude.Color.InputBG,
                    justifyContent: 'center',
                    marginRight: '5%',
                  }}
                  date={startDate}
                  mode="date"
                  placeholder="Start Date"
                  format="DD-MM-YYYY"
                  confirmBtnText="Confirm"
                  iconSource={GlobalInclude.Assets.Calendar}
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      marginRight: 20,
                      height: 20,
                      width: 20,
                    },
                    dateInput: {
                      fontSize: 16,
                      borderWidth: 0,
                    },
                    dateText: {
                      width: '100%',
                      textAlign: 'left',
                      fontSize: 16,
                      paddingLeft: 20,
                      color: GlobalInclude.Color.Gray,
                    },
                    placeholderText: {
                      width: '100%',
                      textAlign: 'left',
                      fontSize: 16,
                      paddingLeft: 20,
                      color: GlobalInclude.Color.Gray,
                    },
                  }}
                  onDateChange={(date) => setStartDate(date)}
                />
              </View>
              <View style={{flex: 1}}>
                <DatePicker
                  style={{
                    width: '95%',
                    marginTop: 20,
                    height: 45,
                    backgroundColor: GlobalInclude.Color.InputBG,
                    justifyContent: 'center',
                    marginLeft: '5%',
                  }}
                  date={endDate}
                  mode="date"
                  placeholder="End Date"
                  format="DD-MM-YYYY"
                  confirmBtnText="Confirm"
                  iconSource={GlobalInclude.Assets.Calendar}
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      marginRight: 20,
                      height: 20,
                      width: 20,
                    },
                    dateInput: {
                      fontSize: 16,
                      borderWidth: 0,
                    },
                    dateText: {
                      width: '100%',
                      textAlign: 'left',
                      fontSize: 16,
                      paddingLeft: 20,
                      color: GlobalInclude.Color.Gray,
                    },
                    placeholderText: {
                      width: '100%',
                      textAlign: 'left',
                      fontSize: 16,
                      paddingLeft: 20,
                      color: GlobalInclude.Color.Gray,
                    },
                  }}
                  onDateChange={(date) => setEndDate(date)}
                />
              </View>
            </View>
          ) : null}

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
          <GlobalInclude.InputText
            placeholder={'Gender'}
            value={selectGender}
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
            placeholder={'Choose Your Senior Members'}
            value={selectSeniorMember}
            editable={selectSeniorEditable}
            onChangeText={(value) => setSelectSeniorMember(value)}
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
            onPressIcon={() => clickSeniarMember()}
          />
          {seniorMember === true ? (
            <View
              style={{
                height: 80,
                backgroundColor: GlobalInclude.Color.InputBG,
                marginTop: 20,
              }}>
              {listOfSeniorMember()}
            </View>
          ) : null}

          <GlobalInclude.InputText
            placeholder={'Title'}
            onChangeText={(value) => setTitle(value)}
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
            placeholder={'Reason'}
            onChangeText={(value) => setReason(value)}
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
            text={'Send'}
            textStyle={{
              fontSize: 18,
              color: GlobalInclude.Color.Colorwhite,
              fontFamily: GlobalInclude.Font.Medium,
            }}
            viewStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              backgroundColor: GlobalInclude.Color.ColorOrange,
              marginTop: 60,
              borderRadius: 5,
              marginBottom: 30,
            }}
            onPress={() => sendRequest()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default updateProfile;
