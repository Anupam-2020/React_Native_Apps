import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { plans } from "../data/plans";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDatabase } from "../util/useDatabase";

const PlansScreen = ({navigation, route}) => {

  const email = route.params.email;
  const password = route.params.password;
  const [dbData, setDbData] = useState();

  const dbResponse = async(planName, planPrice) => {
    try {
      const data = await useDatabase(email, password, false, planPrice, planName)
      setDbData(data);
      console.log(dbData)
    } catch(err) {
      console.log(err);
    }
  }


  const navigateToLoadingPage = (name, price) => {
    dbResponse(name, price)
    if( dbData?.message === 'User registered successfully.' ) {
      navigation.navigate('Login')
    } else if(dbData?.error) {
      navigation.navigate('Register', {
        error: dbData?.error
      })
    }
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
      <Pressable style={styles.planContainer} key={id} android_ripple={{color: '#c06464'}} onPress={() => navigateToLoadingPage(name, price)}>
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
