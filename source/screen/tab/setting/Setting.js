import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';

const dashBoard = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GlobalInclude.Color.ColorRed,
      }}></View>
  );
};

export default dashBoard;
