import React, {useState} from 'react';
import {
  View,
  StyleSheet,
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
import SettingTab from '../setting/Setting';
import SearchTab from '../dashboard/Search';
import ProfileTab from '../dashboard/Profile';
import AsyncStorage from '../../../helper/AsyncStorage';

const animation = ({navigation}) => {
  //Drawer
  const [spinAnim1] = useState(new Animated.Value(0));
  const [spinAnimoff] = useState(new Animated.Value(0));
  const [animateRun, setAnimateRun] = useState(false);
  const [animateRun2, setAnimateRun2] = useState(false);
  //Tab
  const [homeFocused, setHomeFocused] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const [settingFocused, setSettingFocused] = useState(false);
  const [profileFocused, setProfileFocused] = useState(false);
  //Modal
  const [notificationShow, setNotificationShow] = useState(false);
  //TabText
  const [textAnim] = useState(new Animated.Value(1));

  //tab Text
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

  //Model
  const notificationicon = (visible) => {
    setNotificationShow(visible);
  };

  //Tab Click
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
  };
  const clickSettingTab = () => {
    setHomeFocused(false);
    setSearchFocused(false);
    setSettingFocused(true);
    setProfileFocused(false);
    animateText();
  };
  const clickProfileTab = () => {
    setHomeFocused(false);
    setSearchFocused(false);
    setSettingFocused(false);
    setProfileFocused(true);
    animateText();
  };
  // marginLeft Drawer
  const marginLeft1 = spinAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [-450, 0],
  });
  const marginLeft1off = spinAnimoff.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -450],
  });
  // marginLeft Home
  const marginLeft2 = spinAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -180],
  });

  const marginLeft2off = spinAnimoff.interpolate({
    inputRange: [0, 1],
    outputRange: [-180, 0],
  });
  // marginTop Home
  const marginTop = spinAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120],
  });
  const marginTopoff = spinAnimoff.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
  });

  //Drawer open
  const animate1 = () => {
    spinAnim1.setValue(0);

    Animated.timing(spinAnim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    }).start();
    setAnimateRun(false);
    setAnimateRun2(true);
  };

  //Drawer close
  const animateoff = () => {
    spinAnimoff.setValue(0);

    Animated.timing(spinAnimoff, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    }).start();
    setAnimateRun(true);
    setTimeout(() => {
      setAnimateRun2(false);
    }, 400);
  };

  const tabView = () => {
    return (
      //Tabbar

      <View
        style={{
          height: '8%',
          backgroundColor: GlobalInclude.Color.TabBG,
          flexDirection: 'row',
          paddingHorizontal: 15,
          borderBottomLeftRadius: animateRun2 ? 30 : 0,
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
    );
  };

  const notificationModal = () => {
    return (
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
            {/* MyStatusBar */}
            <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
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
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
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
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
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
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
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
    );
  };

  return (
    //drawerView
    <View
      style={{
        flex: 1,
        backgroundColor: GlobalInclude.Color.DrawerBG,
      }}>
      {/* <MyStatusBar
        backgroundColor={
          animateRun2
            ? GlobalInclude.Color.DrawerBG
            : GlobalInclude.Color.ColorOrange
        }
      /> */}

      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* drawerHeader */}
        <Animated.View
          style={{
            marginLeft: animateRun ? marginLeft1off : marginLeft1,
            height: '100%',
            width: 450,
            backgroundColor: GlobalInclude.Color.DrawerBG,
          }}>
          <MyStatusBar
            backgroundColor={
              animateRun2
                ? GlobalInclude.Color.DrawerBG
                : GlobalInclude.Color.ColorOrange
            }
          />
          <View
            style={{
              height: 100,
              width: '100%',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <View
                onPress={() => {
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
              </View>
            </View>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <GlobalInclude.Image
                source={GlobalInclude.Assets.Cancel}
                imageStyle={{height: 15, width: 15}}
                viewStyle={{
                  height: 35,
                  width: 35,
                  marginTop: 20,
                  backgroundColor: GlobalInclude.Color.ColorOrange,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}
                onPress={() => animateoff()}
              />
            </View>
          </View>
          {/* drawerItem */}
          {/* item 1 */}
          <View style={styles.mainViewDrawer}>
            <Image
              source={GlobalInclude.Assets.Folder}
              style={{height: 18, width: 24, marginLeft: 5}}
            />
            <Text style={styles.textStyleUnClickDrawer}>Home</Text>
          </View>
          {/* item 2 */}
          <TouchableOpacity
            style={styles.mainViewDrawer}
            onPress={() => {
              navigation.navigate('LeaveList');
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
          {/* logout */}
          <View
            style={{
              flex: 1,
              flexDirection: 'column-reverse',
              marginBottom: 50,
            }}>
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
        </Animated.View>

        {/* dashBord */}

        <Animated.View
          style={{
            marginLeft: animateRun ? marginLeft2off : marginLeft2,
            height: animateRun2 ? 80 + '%' : 100 + '%',
            width: '100%',
            backgroundColor: GlobalInclude.Color.Colorwhite,
            marginTop: animateRun ? marginTopoff : marginTop,
            borderRadius: animateRun2 ? 30 : 0,
            marginBottom: 50,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: GlobalInclude.Color.InputBG,
              borderBottomLeftRadius: animateRun2 ? 30 : 0,
              borderTopLeftRadius: animateRun2 ? 30 : 0,
            }}>
            <View style={{height: '92%'}}>
              {homeFocused ? (
                <View>
                  {animateRun2 ? null : (
                    <MyStatusBar
                      backgroundColor={
                        animateRun2
                          ? GlobalInclude.Color.DrawerBG
                          : GlobalInclude.Color.ColorOrange
                      }
                    />
                  )}

                  {/* Header */}
                  <GlobalInclude.Header
                    rightIcon={GlobalInclude.Assets.DrawerMenu}
                    leftIcon={GlobalInclude.Assets.Notification}
                    headerText={'Leave Management'}
                    onPressRightIcon={() => animate1()}
                    onPressLefttIcon={() => notificationicon(true)}
                    viewStyle={{
                      borderTopLeftRadius: animateRun2 ? 30 : 0,
                      height: animateRun2 ? 55 : 45,
                    }}
                  />
                  {/* Design */}

                  {/* row 1 */}
                  <View
                    style={{
                      height: 150,
                      marginHorizontal: 15,
                      flexDirection: 'row',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                        marginVertical: 15,
                        marginHorizontal: 10,
                        borderRadius: 5,
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                        }}
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
                    </View>

                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                        marginVertical: 15,
                        marginHorizontal: 10,
                        borderRadius: 5,
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                        }}
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
                  </View>
                  {/* row 2 */}
                  <View
                    style={{
                      height: 150,
                      marginHorizontal: 15,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                        marginVertical: 15,
                        marginHorizontal: 10,
                        borderRadius: 5,
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
                    </View>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                        marginVertical: 15,
                        marginHorizontal: 10,
                        borderRadius: 5,
                      }}>
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
                  </View>

                  {/* row 3 */}
                </View>
              ) : null}

              {/* Search Tab */}

              {searchFocused ? <SearchTab /> : null}

              {/* Setting Tab */}

              {settingFocused ? <SettingTab /> : null}

              {/* Profile Tab */}

              {profileFocused ? (
                <ProfileTab
                  BackPress={() => clickHomeTab()}
                  EditProfileClick={() => navigation.navigate('UpdateProfile')}
                />
              ) : null}
            </View>

            {/* Tabbar */}
            {tabView()}

            {/* Modal */}
            {notificationModal()}
          </View>
        </Animated.View>
      </View>
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

export default animation;
