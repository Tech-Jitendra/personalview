import {View} from '@gluestack-ui/themed';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

const RoundedImageWithShadow = ({source, borderRadiusSize}) => {
  return (
    <View style={[styles.shadow, {borderRadius: borderRadiusSize}]}>
      <Image
        source={source}
        style={[styles.image, {borderRadius: borderRadiusSize}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200, // adjust according to your requirement
    height: 200, // adjust according to your requirement
    resizeMode: 'cover',
  },
});

export default RoundedImageWithShadow;
