import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const CaurousalDot = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {data.map((image,index) => {
        const inputRange = [(index - 1)* width, index* width, (index+1)* width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp'
        });
        return(
          <Animated.View 
            key={index.toString()} 
            style={
              [
                styles.dot, 
                {width: dotWidth}
              ]
            }
            />
        )
      })}
    </View>
  )
}

export default CaurousalDot;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#444242',
    marginHorizontal: 3
  }
})