/* use Axios */
import axios from 'axios';
import Constant from '../theme/Constant';
import NetInfo from '@react-native-community/netinfo';

const helpers = {
  ToastShow: function (name, style) {
    if (style == 'success') {
      global.toast_reff.show_toast(name, '1');
    } else {
      global.toast_reff.show_toast(name, '0');
    }
  },

  NetworkInfo: async function () {
    try {
      const netInfo = await NetInfo.addEventListener();

      console.log('Connection type', netInfo.type);
      console.log('Is connected?', netInfo.isConnected);

      return netInfo;
    } catch (error) {}
  },

  UrlReq: async function (url, bodydata) {
    try {
      console.log('try');
      const response = await axios.post(Constant.baseURL + url, bodydata);

      console.log('============================================');
      console.log('Helper Url -->', Constant.baseURL + url);
      console.log('Helper BodyData -->', bodydata);
      console.log('Helper Responce -->', response.data);

      return response;
    } catch (err) {
      console.log('catch');
      responce.push(err);
      console.log('error', err);
      return responce[0];
    }
  },
};
export default helpers;

/* use Fetch */

// const helpers = {

//   UrlReq: async function (url, method, bodydata) {
//     let responce = [];

//     let headers = new Headers();
//     headers.set('apikey', '');

//     const loginString = JSON.stringify(bodydata);

//     // console.log('URL => ', url);
//     // console.log('Method => ', method);
//     // console.log('BODY_DATA => ', loginString);
//     // console.log('baseurl =>', global.api_url + url);

//     var formdata = new FormData();
//     formdata.append('data', loginString);
//     // console.log('formdata => ',formdata)

//     try {
//       const response = await fetch(global.api_url + url, {
//         method: method,
//         body: JSON.stringify(bodydata),
//         headers: headers,
//       });
//       let responseJson = await response.json();

//       console.log('Url =>', global.api_url + url);
//       console.log('BodyDataJson ==>', JSON.stringify(bodydata));
//       console.log('BodyDataString ==>', loginString);
//       console.log('responseJson => ', responseJson);

//       responce.push(responseJson);
//       return responce[0];
//     } catch (err) {
//       responce.push(err);
//       console.log('error', err);
//       return responce[0];
//     }
//   },
// };
// export default helpers;
