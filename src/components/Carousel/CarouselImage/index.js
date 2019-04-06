import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { deviceWidth, deviceHeight } from '../../../utils/dimensions';

const index = ({ url }) => (
  <Image
    style={styles.image}
    source={{
      uri: url,
    }}
    resizeMode="contain"
  />
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default index;
