import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import MyStatusBar from '../../../component/Statusbar';
import Helper from '../../../helper/Helper';
import AsyncStorage from '../../../helper/AsyncStorage';
import SwipeView from 'react-native-swipeview';

const dashBoard = ({navigation}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [homeFocused, setHomeFocused] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const [settingFocused, setSettingFocused] = useState(false);
  const [profileFocused, setProfileFocused] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const [focused, setfocused] = useState(true);

  const [textAnim, setTextAnim] = useState(new Animated.Value(0));
  const textSize = textAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 18, 14],
  });
  const animateText = () => {
    console.log('animateText');
    textAnim.setValue(0);
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    }).start();
  };

  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spinX = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [3.15, 0],
  });

  const [spinProfile, setSpinProfile] = useState(new Animated.Value(0));
  const profileSpin = spinProfile.interpolate({
    inputRange: [0, 1],
    outputRange: [3.15, 0],
  });

  const [spinSearch, setSpinSearch] = useState(new Animated.Value(0));
  const searchSpin = spinSearch.interpolate({
    inputRange: [0, 1],
    outputRange: [3.15, 0],
  });

  useEffect(() => {
    //animate();
  }, []);

  const animate = () => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const animateProfile = () => {
    Animated.timing(spinProfile, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const animateSearch = () => {
    Animated.timing(spinSearch, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const notificationicon = (visible) => {
    setNotificationShow(visible);
  };

  const clickHomeTab = () => {
    setHomeFocused(true);
    setSearchFocused(false);
    setSettingFocused(false);
    setProfileFocused(false);
    animateText();
  };
  const clickSearchTab = () => {
    setHomeFocused(false);
    setSearchFocused(true);
    setSettingFocused(false);
    setProfileFocused(false);
    animateText();
    animateSearch();
  };
  const clickSettingTab = () => {
    setHomeFocused(false);
    setSearchFocused(false);
    setSettingFocused(true);
    setProfileFocused(false);
    animateText();
    animate();
  };
  const clickProfileTab = () => {
    setHomeFocused(false);
    setSearchFocused(false);
    setSettingFocused(false);
    setProfileFocused(true);
    animateText();
    animateProfile();
  };

  const clickDrawer = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };

  return openDrawer ? (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={GlobalInclude.Color.DrawerBG} />
      <View
        style={{
          flex: 1,
          backgroundColor: GlobalInclude.Color.DrawerBG,
          flexDirection: 'row',
        }}>
        <View style={{flex: 2.5}}>
          <View style={{flex: 6}}>
            <TouchableOpacity
              onPress={() => {
                setOpenDrawer(false);
                navigation.navigate('UpdateProfile');
              }}
              style={{
                height: 70,
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <GlobalInclude.Image
                source={GlobalInclude.Assets.Man}
                imageStyle={{height: 50, width: 50, borderRadius: 50}}
                viewStyle={{
                  height: 70,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <View style={{height: 50, marginLeft: 15}}>
                <GlobalInclude.Text
                  text={'Hiren Dudhat'}
                  textStyle={{
                    fontSize: 17,
                    color: GlobalInclude.Color.Colorwhite,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={{flex: 1, justifyContent: 'center'}}
                />
                <GlobalInclude.Text
                  text={'hirendudhat01@gmail.com'}
                  textStyle={{
                    fontSize: 12,
                    color: GlobalInclude.Color.Colorwhite,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.mainViewDrawer}>
              <Image
                source={GlobalInclude.Assets.Folder}
                style={{height: 18, width: 24, marginLeft: 5}}
              />
              <Text
                style={
                  focused
                    ? styles.textStyleUnClickDrawer
                    : styles.textStyleClickDrawer
                }>
                Home
              </Text>
            </View>
            <TouchableOpacity
              style={styles.mainViewDrawer}
              onPress={() => {
                navigation.navigate('LeaveList');
                clickDrawer();
              }}>
              <Image
                source={GlobalInclude.Assets.LeaveRequest}
                style={{
                  height: 22,
                  width: 20,
                  marginLeft: 5,
                  tintColor: 'white',
                }}
              />
              <Text style={styles.textStyleClickDrawer}>Leave Approvel</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.mainViewDrawer}
              onPress={() => {
                AsyncStorage.removeItem(GlobalInclude.Constant.sessId);
                navigation.replace('Login');
              }}>
              <Image
                source={GlobalInclude.Assets.LogOut}
                style={{
                  height: 22,
                  width: 20,
                  marginLeft: 5,
                  tintColor: 'white',
                }}
              />
              <Text style={styles.textStyleClickDrawer}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <GlobalInclude.Image
              source={GlobalInclude.Assets.Cancel}
              imageStyle={{height: 15, width: 15}}
              viewStyle={{
                height: 32,
                width: 32,
                backgroundColor: GlobalInclude.Color.ColorOrange,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}
              onPress={() => clickDrawer()}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 22,
              borderBottomLeftRadius: 22,
            }}>
            <View style={{height: '92%'}}>
              <View
                style={{
                  height: 40,
                  borderTopLeftRadius: 22,
                  backgroundColor: GlobalInclude.Color.ColorOrange,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <GlobalInclude.Text
                  text={'Le'}
                  textStyle={{
                    color: GlobalInclude.Color.Colorwhite,
                    fontSize: 14,
                  }}
                />
              </View>
              <View style={{height: 120, alignItems: 'flex-end'}}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.Employee}
                  imageStyle={{height: 28, width: 26}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Employ'}
                  textStyle={{
                    fontSize: 14,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </View>

              <View style={{height: 120, alignItems: 'flex-end'}}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.LeaveRequest}
                  imageStyle={{height: 28, width: 28}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Leave Re'}
                  textStyle={{
                    fontSize: 14,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </View>
            </View>
            <View
              style={{
                height: '8%',
                backgroundColor: GlobalInclude.Color.TabBG,
                borderBottomLeftRadius: 22,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: '70%',
                  width: '70%',
                  backgroundColor: GlobalInclude.Color.TabActive,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Image
                  source={GlobalInclude.Assets.Home}
                  style={{height: 18, width: 18}}></Image>

                <Text style={styles.textStyle}>Home</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        </View>
      </View>
    </View>
  ) : (
    <View style={{flex: 1, backgroundColor: GlobalInclude.Color.Colorwhite}}>
      <View style={{height: '92%'}}>
        {homeFocused ? (
          <View>
            <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
            {/* Header */}
            <GlobalInclude.Header
              rightIcon={GlobalInclude.Assets.DrawerMenu}
              leftIcon={GlobalInclude.Assets.Notification}
              headerText={'Leave Management'}
              onPressRightIcon={() => clickDrawer()} //navigation.openDrawer()
              onPressLefttIcon={() => notificationicon(true)}
            />
            {/* Design */}

            <View
              style={{height: 150, marginHorizontal: 20, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => navigation.navigate('Employee')}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.Employee}
                  imageStyle={{height: 32, width: 30}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Employee'}
                  textStyle={{
                    fontSize: 16,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => navigation.navigate('HoliDay')}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.Holiday}
                  imageStyle={{height: 30, width: 30}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Holiday Reminder'}
                  textStyle={{
                    fontSize: 16,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{height: 150, marginHorizontal: 20, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => navigation.navigate('LeaveRequest')}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.LeaveRequest}
                  imageStyle={{height: 32, width: 32}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Leave Request'}
                  textStyle={{
                    fontSize: 16,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => navigation.navigate('LeaveStatus')}>
                <GlobalInclude.Image
                  source={GlobalInclude.Assets.Upcoming}
                  imageStyle={{height: 28, width: 28}}
                  viewStyle={styles.imageView}
                />
                <GlobalInclude.Text
                  text={'Leave Status'}
                  textStyle={{
                    fontSize: 16,
                    fontFamily: GlobalInclude.Font.Medium,
                  }}
                  viewStyle={styles.textView}
                />
              </TouchableOpacity>
            </View>
            {/* <View style={{height: 150, marginHorizontal: 20, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('LeaveRequest')}>
              <GlobalInclude.Image
                source={GlobalInclude.Assets.Notification}
                imageStyle={{height: 30, width: 28}}
                viewStyle={styles.imageView}
              />
              <GlobalInclude.Text
                text={'Notification'}
                textStyle={{fontSize: 16, fontFamily: GlobalInclude.Font.Medium}}
                viewStyle={styles.textView}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('LeaveRequest')}>
              <GlobalInclude.Image
                source={GlobalInclude.Assets.Events}
                imageStyle={{height: 31, width: 30}}
                viewStyle={styles.imageView}
              />
              <GlobalInclude.Text
                text={'Events'}
                textStyle={{fontSize: 16, fontFamily: GlobalInclude.Font.Medium}}
                viewStyle={styles.textView}
              />
            </TouchableOpacity>
          </View> */}
          </View>
        ) : null}

        {/* Search Tab */}

        {searchFocused ? (
          <View
            style={{flex: 1, backgroundColor: GlobalInclude.Color.DrawerBG}}>
            {/* Header */}
            <GlobalInclude.Header
              rightIcon={GlobalInclude.Assets.LeftArrow}
              headerText={'Search'}
              onPressRightIcon={() => clickHomeTab()}
            />
            <Animated.View
              style={{
                height: '100%',
                width: '100%',
                transform: [{rotateX: searchSpin, rotateY: searchSpin}],
                backgroundColor: GlobalInclude.Color.Colorwhite,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <GlobalInclude.Text
                text={'Search Tab'}
                textStyle={{fontSize: 22}}
              />
            </Animated.View>
          </View>
        ) : null}

        {/* Setting Tab */}

        {settingFocused ? (
          <View
            style={{flex: 1, backgroundColor: GlobalInclude.Color.DrawerBG}}>
            {/* Header */}
            <GlobalInclude.Header
              rightIcon={GlobalInclude.Assets.LeftArrow}
              headerText={'Setting'}
              onPressRightIcon={() => clickHomeTab()}
            />
            <Animated.View
              style={{
                height: '100%',
                width: '100%',
                transform: [{rotateX: spinX, rotateY: spinX}],
                backgroundColor: GlobalInclude.Color.Colorwhite,
              }}>
              <View
                style={{
                  height: 150,
                  marginHorizontal: 20,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => navigation.navigate('Employee')}>
                  <GlobalInclude.Image
                    source={GlobalInclude.Assets.Employee}
                    imageStyle={{height: 32, width: 30}}
                    viewStyle={styles.imageView}
                  />
                  <GlobalInclude.Text
                    text={'Employee'}
                    textStyle={{
                      fontSize: 16,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={styles.textView}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => navigation.navigate('HoliDay')}>
                  <GlobalInclude.Image
                    source={GlobalInclude.Assets.Holiday}
                    imageStyle={{height: 30, width: 30}}
                    viewStyle={styles.imageView}
                  />
                  <GlobalInclude.Text
                    text={'Holiday Reminder'}
                    textStyle={{
                      fontSize: 16,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={styles.textView}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  height: 150,
                  marginHorizontal: 20,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => navigation.navigate('LeaveRequest')}>
                  <GlobalInclude.Image
                    source={GlobalInclude.Assets.LeaveRequest}
                    imageStyle={{height: 32, width: 32}}
                    viewStyle={styles.imageView}
                  />
                  <GlobalInclude.Text
                    text={'Leave Request'}
                    textStyle={{
                      fontSize: 16,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={styles.textView}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => navigation.navigate('LeaveStatus')}>
                  <GlobalInclude.Image
                    source={GlobalInclude.Assets.Upcoming}
                    imageStyle={{height: 28, width: 28}}
                    viewStyle={styles.imageView}
                  />
                  <GlobalInclude.Text
                    text={'Leave Status'}
                    textStyle={{
                      fontSize: 16,
                      fontFamily: GlobalInclude.Font.Medium,
                    }}
                    viewStyle={styles.textView}
                  />
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        ) : null}

        {/* Profile Tab */}

        {profileFocused ? (
          <View
            style={{flex: 1, backgroundColor: GlobalInclude.Color.DrawerBG}}>
            {/* Header */}
            <GlobalInclude.Header
              rightIcon={GlobalInclude.Assets.LeftArrow}
              headerText={'Profile'}
              onPressRightIcon={() => clickHomeTab()}
            />
            <Animated.View
              style={{
                height: '100%',
                width: '100%',
                transform: [{rotateX: profileSpin, rotateY: profileSpin}],
                backgroundColor: GlobalInclude.Color.Colorwhite,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <GlobalInclude.Text
                text={'Profile Tab'}
                textStyle={{fontSize: 22}}
              />
            </Animated.View>
          </View>
        ) : null}
      </View>

      {/* Tabbar */}

      <View
        style={{
          height: '8%',
          backgroundColor: GlobalInclude.Color.TabBG,
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <View style={{flex: homeFocused ? 2 : 1}}>
          <TouchableWithoutFeedback onPress={() => clickHomeTab()}>
            <View style={[styles.mainView]}>
              <View
                style={[
                  styles.innerView,
                  {
                    backgroundColor: homeFocused
                      ? GlobalInclude.Color.TabActive
                      : GlobalInclude.Color.TabBG,
                  },
                ]}>
                <Image
                  source={GlobalInclude.Assets.Home}
                  style={{height: 18, width: 18}}></Image>
                {homeFocused ? (
                  <Animated.Text
                    style={{
                      fontSize: textSize,
                      color: GlobalInclude.Color.Colorwhite,
                      marginLeft: 7,
                      fontFamily: GlobalInclude.Font.Regular,
                    }}>
                    Home
                  </Animated.Text>
                ) : //<Text style={styles.textStyle}>Home</Text>
                null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flex: searchFocused ? 2 : 1}}>
          <TouchableWithoutFeedback onPress={() => clickSearchTab()}>
            <View style={styles.mainView}>
              <View
                style={[
                  styles.innerView,
                  {
                    backgroundColor: searchFocused
                      ? GlobalInclude.Color.TabActive
                      : GlobalInclude.Color.TabBG,
                  },
                ]}>
                <Image
                  source={GlobalInclude.Assets.Search}
                  style={{height: 17, width: 17}}></Image>
                {searchFocused ? (
                  <Animated.Text
                    style={{
                      fontSize: textSize,
                      color: GlobalInclude.Color.Colorwhite,
                      marginLeft: 7,
                      fontFamily: GlobalInclude.Font.Regular,
                    }}>
                    Search
                  </Animated.Text>
                ) : // <Text style={styles.textStyle}>Search</Text>
                null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flex: settingFocused ? 2 : 1}}>
          <TouchableWithoutFeedback onPress={() => clickSettingTab()}>
            <View style={styles.mainView}>
              <View
                style={[
                  styles.innerView,
                  {
                    backgroundColor: settingFocused
                      ? GlobalInclude.Color.TabActive
                      : GlobalInclude.Color.TabBG,
                  },
                ]}>
                <Image
                  source={GlobalInclude.Assets.Setting}
                  style={{height: 16, width: 16}}></Image>
                {settingFocused ? (
                  <Animated.Text
                    style={{
                      fontSize: textSize,
                      color: GlobalInclude.Color.Colorwhite,
                      marginLeft: 7,
                      fontFamily: GlobalInclude.Font.Regular,
                    }}>
                    Filter
                  </Animated.Text>
                ) : //<Text style={styles.textStyle}>Filter</Text>
                null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flex: profileFocused ? 2 : 1}}>
          <TouchableWithoutFeedback onPress={() => clickProfileTab()}>
            <View style={styles.mainView}>
              <View
                style={[
                  styles.innerView,
                  {
                    backgroundColor: profileFocused
                      ? GlobalInclude.Color.TabActive
                      : GlobalInclude.Color.TabBG,
                  },
                ]}>
                <Image
                  source={GlobalInclude.Assets.Profile}
                  style={{height: 19, width: 15}}></Image>
                {profileFocused ? (
                  <Animated.Text
                    style={{
                      fontSize: textSize,
                      color: GlobalInclude.Color.Colorwhite,
                      marginLeft: 7,
                      fontFamily: GlobalInclude.Font.Regular,
                    }}>
                    Profile
                  </Animated.Text>
                ) : //<Text style={styles.textStyle}>Profile</Text>
                null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      {/* Modal */}

      <Modal
        animationType={'slide'}
        transparent={false}
        visible={notificationShow}
        onRequestClose={() => {
          alert('try Model close');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: GlobalInclude.Color.Colorwhite,
            }}>
            {/* Header */}
            <GlobalInclude.Header
              rightIcon={GlobalInclude.Assets.LeftArrow}
              headerText={'Profile'}
              onPressRightIcon={() => notificationicon(false)}
            />
            <View
              style={{
                height: 70,
                marginHorizontal: 30,
                marginTop: 15,
                borderColor: 'gray',
                flexDirection: 'row',
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
              <View style={{flex: 3, justifyContent: 'center', marginLeft: 15}}>
                <GlobalInclude.Text
                  text={'Hiren Dudhat'}
                  textStyle={{
                    fontSize: 17,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Medium,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'Today Birthday'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <GlobalInclude.Text
                  text={'13th Des 2020'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Regular,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'05:00 PM'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
            </View>

            {/* Example */}
            <View
              style={{
                height: 70,
                marginHorizontal: 30,
                marginTop: 15,
                borderColor: 'gray',
                flexDirection: 'row',
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
              <View style={{flex: 3, justifyContent: 'center', marginLeft: 15}}>
                <GlobalInclude.Text
                  text={'Hiren Dudhat'}
                  textStyle={{
                    fontSize: 17,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Medium,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'Today Birthday'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <GlobalInclude.Text
                  text={'13th Des 2020'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Regular,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'05:00 PM'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: 70,
                marginHorizontal: 30,
                marginTop: 15,
                borderColor: 'gray',
                flexDirection: 'row',
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
              <View style={{flex: 3, justifyContent: 'center', marginLeft: 15}}>
                <GlobalInclude.Text
                  text={'Hiren Dudhat'}
                  textStyle={{
                    fontSize: 17,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Medium,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'Today Birthday'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <GlobalInclude.Text
                  text={'13th Des 2020'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    fontFamily: GlobalInclude.Font.Regular,
                    marginVertical: 5,
                  }}
                />
                <GlobalInclude.Text
                  text={'05:00 PM'}
                  textStyle={{
                    fontSize: 14,
                    color: GlobalInclude.Color.ColorBlack,
                    marginVertical: 5,
                    fontFamily: GlobalInclude.Font.Regular,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    height: '60%',
    width: '70%',
    flexDirection: 'row',
    marginVertical: '40%',
    marginHorizontal: '15%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: 12,
    marginLeft: 7,
    fontFamily: GlobalInclude.Font.Regular,
  },
  mainViewDrawer: {
    height: 30,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  textStyleUnClickDrawer: {
    color: GlobalInclude.Color.ColorOrange,
    textAlign: 'left',
    fontFamily: GlobalInclude.Font.Regular,
    marginLeft: 15,
    fontSize: 17,
  },
  textStyleClickDrawer: {
    color: GlobalInclude.Color.Colorwhite,
    textAlign: 'left',
    width: '100%',
    fontFamily: GlobalInclude.Font.Regular,
    marginLeft: 15,
    fontSize: 17,
  },
});

export default dashBoard;
