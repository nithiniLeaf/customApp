/**
 * Created by Nithin for iLeaf Solutions Pvt.Ltd
 * on June 11, 2020
 * LoginScreen - LoginScreen Styles
 */

import {StyleSheet, I18nManager} from 'react-native';
import Constants from '../../config/constants';
import {normalizedHeight, normalizedWidth} from '../../config/common';
import {ceil} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img_container: {
    width: '100%',
    height: 300,
  },
  background_text: {
    backgroundColor: 'red',
  },
  text_container: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  google_login: {
    width: 192,
    height: 48,
  },
  insta_background: {
    backgroundColor: 'red',
    marginTop: 5,
  },
  insta_login: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles;
