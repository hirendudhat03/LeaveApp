import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import MyStatusBar from '../../../component/Statusbar';

const leaveStatusArray = [{}];
const leaveStatus = ({navigation}) => {
  const [listItems, setListItems] = useState(leaveStatusArray);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
        <Text
          style={{padding: 10, fontSize: 18, height: 44}}
          onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };

  return (
    <View style={{flex: 1}}>
      {/* MyStatusBar */}
      <MyStatusBar backgroundColor={GlobalInclude.Color.ColorOrange} />
      {/* Header */}
      <GlobalInclude.Header
        rightIcon={GlobalInclude.Assets.LeftArrow}
        headerText={'Leave Status'}
        onPressRightIcon={() => navigation.goBack()}
      />

      {/* leaveStatus */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 30,
          backgroundColor: '#ffffff',
          shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
          padding: 15,
          borderRadius: 5,
        }}>
        <View style={{height: 60, flexDirection: 'row'}}>
          <View style={{flex: 4, justifyContent: 'center'}}>
            <GlobalInclude.Text
              text={'Leave Request'}
              textStyle={{fontSize: 17, fontFamily: GlobalInclude.Font.Medium}}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: GlobalInclude.Color.ColorOrange,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <GlobalInclude.Text
                text={'12'}
                textStyle={{
                  fontSize: 22,
                  color: GlobalInclude.Color.Colorwhite,
                  fontFamily: GlobalInclude.Font.Bold,
                }}
              />
              <GlobalInclude.Text
                text={'Feb'}
                textStyle={{
                  fontSize: 14,
                  color: GlobalInclude.Color.Colorwhite,
                  fontFamily: GlobalInclude.Font.Regular,
                }}
              />
            </View>
          </View>
        </View>
        <GlobalInclude.Text
          text={'Hiren Dudhat'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
        />
        <GlobalInclude.Text
          text={'React Native Developer'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
          viewStyle={{marginTop: 7}}
        />
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <GlobalInclude.Text
            text={'Half Day'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Light,
            }}
          />
          <GlobalInclude.Text
            text={'|'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Light,
            }}
            viewStyle={{marginLeft: 10}}
          />
          <GlobalInclude.Text
            text={'Full Day'}
            textStyle={{fontSize: 16, color: GlobalInclude.Color.Gray}}
            viewStyle={{marginLeft: 10, fontFamily: GlobalInclude.Font.Light}}
          />
        </View>
        <GlobalInclude.Text
          text={'I fill not well today. so I am not come at office.'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
          viewStyle={{marginTop: 7}}
        />
        <GlobalInclude.Text
          text={'Approved'}
          textStyle={{
            fontSize: 17,
            color: GlobalInclude.Color.LightGreen,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{marginTop: 15}}
        />
      </View>
      {/* leaveStatus */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 30,
          backgroundColor: '#ffffff',
          shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
          padding: 15,
          borderRadius: 5,
        }}>
        <View style={{height: 60, flexDirection: 'row'}}>
          <View style={{flex: 4, justifyContent: 'center'}}>
            <GlobalInclude.Text
              text={'Leave Request'}
              textStyle={{fontSize: 17, fontFamily: GlobalInclude.Font.Medium}}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: GlobalInclude.Color.ColorOrange,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <GlobalInclude.Text
                text={'12'}
                textStyle={{
                  fontSize: 22,
                  color: GlobalInclude.Color.Colorwhite,
                  fontFamily: GlobalInclude.Font.Bold,
                }}
              />
              <GlobalInclude.Text
                text={'Feb'}
                textStyle={{
                  fontSize: 14,
                  textAlign: 'center',
                  color: GlobalInclude.Color.Colorwhite,
                  fontFamily: GlobalInclude.Font.Regular,
                }}
              />
            </View>
          </View>
        </View>
        <GlobalInclude.Text
          text={'Hiren Dudhat'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
        />
        <GlobalInclude.Text
          text={'React Native Developer'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
          viewStyle={{marginTop: 7}}
        />
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <GlobalInclude.Text
            text={'Half Day'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Light,
            }}
          />
          <GlobalInclude.Text
            text={'|'}
            textStyle={{
              fontSize: 16,
              color: GlobalInclude.Color.Gray,
              fontFamily: GlobalInclude.Font.Light,
            }}
            viewStyle={{marginLeft: 10}}
          />
          <GlobalInclude.Text
            text={'Full Day'}
            textStyle={{fontSize: 16, color: GlobalInclude.Color.Gray}}
            viewStyle={{marginLeft: 10, fontFamily: GlobalInclude.Font.Light}}
          />
        </View>
        <GlobalInclude.Text
          text={'I fill not well today. so I am not come at office.'}
          textStyle={{
            fontSize: 16,
            color: GlobalInclude.Color.Gray,
            fontFamily: GlobalInclude.Font.Light,
          }}
          viewStyle={{marginTop: 7}}
        />
        <GlobalInclude.Text
          text={'Approved'}
          textStyle={{
            fontSize: 17,
            color: GlobalInclude.Color.LightGreen,
            fontFamily: GlobalInclude.Font.Medium,
          }}
          viewStyle={{marginTop: 15}}
        />
      </View>

      {/* <FlatList
        data={listItems}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </View>
  );
};

export default leaveStatus;
