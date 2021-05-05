import NetInfo from '@react-native-community/netinfo';
//import {showToast} from '../utils/Toast';
import {Alert} from 'react-native';

export default class NetworkUtils {
  static async isNetworkAvailable() {
    NetInfo.fetch().then((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      if (state.isConnected === false) {
        Alert.alert(
          'No Internet connection',
          'Please check your Internet connection',
          [
            {
              text: 'OK',
            },
          ],
          {cancelable: false},
        );
      }
    });
  }
}
