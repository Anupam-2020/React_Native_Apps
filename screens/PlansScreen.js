import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import React from "react";
import { plans } from "../data/plans";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const PlansScreen = ({navigation}) => {

  const navigateToLoginScreen = (name, price) => {
    // console.log(name, price)
    navigation.navigate('Login', {
      price: price,
      name: name
    })
  }

  const RenderPlans = ({
    devices,
    id,
    name,
    price,
    resolution,
    videoQuality,
  }) => {
    return (
      <Pressable style={styles.planContainer} key={id} android_ripple={{color: '#c06464'}} onPress={() => navigateToLoginScreen(name, price)}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable style={{ backgroundColor: "#c91010", borderRadius: 6, marginBottom: 10, paddingVertical: 5 }}>
            <Text
              style={{
                color: "white",
                paddingVertical: 3,
                width: 100,
                textAlign: "center",
              }}
            >
              {name}
            </Text>
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Price: ₹{price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginBottom: 10 }}>
            <Text>Video Quality: {videoQuality}</Text>
            <Text>Resolution: {resolution}</Text>
          </View>
          <Fontisto name="netflix" size={34} color="black" />
        </View>
        <View>
          <Text>
            Devices You can watch:
            <FlatList
              horizontal
              data={devices}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Entypo
                      style={{ marginLeft: 16 }}
                      name={item.name}
                      size={24}
                      color="red"
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => {
                return index;
              }
              }
            />
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView>
      <View style={{ marginLeft: 10, marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 18 }}>Choose the right plan below</Text>
        <Text>
          <Text style={{ color: "red", fontSize: 18 }}>✓</Text>
          Watch all you want Ad-free
        </Text>
        <Text>
          <Text style={{ color: "red", fontSize: 18 }}>✓</Text>
          Recommendations just for you
        </Text>
        <Text>
          <Text style={{ color: "red", fontSize: 18 }}>✓</Text>
          Change or cancel your plan anytime.
        </Text>
      </View>
      {/* <FlatList
        data={plans}
        renderItem={({ item, index }) => renderPlans(item)}
      /> */}
      {plans.map((data, index) => (
        <View key={index}>
          <RenderPlans
          devices={data.devices}
          id={data.id}
          name={data.name}
          price={data.price}
          resolution={data.resolution}
          videoQuality={data.videoQuality} />
        </View>
      ))}
    </ScrollView>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({
  planContainer: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden'
  },
});
