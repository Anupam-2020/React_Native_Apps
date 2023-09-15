import { Animated, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { primeDaySaleImage } from '../json/primeDaySaleImages';
import CaurousalDot from './CaurousalDot';
import { useRef } from 'react';

const PrimeDaySale = () => {
    const displayCarousal = (image) => {
        return(
            <View>
                <Image style={{width: 400, height: 210}} source={{uri: image}}/>
            </View>
        )
    }

    // This is the code for dot animation in courosal.
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        }
                    }
                }
            ],
            {
                useNativeDriver: false
            }
        )(event)
    }

  return (
    <View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment='center'
        onScroll={handleOnScroll}
        data={primeDaySaleImage} 
        renderItem={(item) => displayCarousal(item.item)} 
        keyExtractor={(item, index) => index}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CaurousalDot data={primeDaySaleImage} scrollX={scrollX}/>
        </View>
        
    </View>
  )
}

export default PrimeDaySale

const styles = StyleSheet.create({})