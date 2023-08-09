import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const RestScreen = ({ navigation }) => {
  const [timer, setIimer] = useState(3);

  const decreaseTimer = () => {
    setIimer((timer) => timer - 1);
  };

  useEffect(() => {
    if (timer <= 0) {
      navigation.goBack();
    }
    const id = setTimeout(decreaseTimer, 1000);

    // clean up.
    return () => clearTimeout(id);
  }, [decreaseTimer]);

  // const decreaseTimer = () => {
  //     setTimeout(() => {
  //         setIimer(timer - 1);
  //     }, 1000)
  //     if(timer <= 0) {
  //         navigation.goBack();
  //         setIimer(3);
  //         clearTimeout(timer);
  //     }
  // }

  // useEffect(() => {
  //     decreaseTimer();
  //     return () => {
  //         clearTimeout(timer);
  //     }
  // })

  return (
    <View style={styles.restImageView}>
      <Image
        style={styles.restImage}
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
      />
      <Text style={styles.restText}>Take A Break!</Text>
      <Text style={styles.timeBtreak}>{timer}</Text>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  restImageView: {
    marginTop: 50,
  },
  restImage: {
    height: 300,
    width: "100%",
  },
  restText: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "900",
    textTransform: "uppercase",
    textAlign: "center",
  },
  timeBtreak: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "900",
  },
});
