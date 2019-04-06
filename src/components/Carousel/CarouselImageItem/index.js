import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    width,
    height,
  },
});

export default index;
