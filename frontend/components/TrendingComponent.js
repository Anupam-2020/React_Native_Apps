import { ScrollView, StyleSheet, Text, View, Image, Pressable, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import useApi from '../util/useApi';
import ModalScreen from './ModalScreen';


const TrendingComponent = ({middleComponentOfApi, username}) => {

  const [data, setData] = useState();
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const results = useApi(middleComponentOfApi);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => {
    setData(results);
  },[results]);

  const showModal = (details) => {
    setModal(!modal);
    setDetails(details)
  }

  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
      {data && data.results.slice(0,10).map((movie, index) =>{
        return (
          <Pressable key={movie.id} onPress={() => showModal(movie)}>
            <Text style={styles.textOverImage}>{index+1}</Text>
            <Image style={styles.image} source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}/>
          </Pressable>
        )
      })}
      {modal && <ModalScreen username={username} modal={modal} showModal={showModal} details={details}/>}
    </ScrollView>
  )
}

export default TrendingComponent;

const styles = StyleSheet.create({
  image: {
    height: 200, 
    width: 150, 
    objectFit: 'contain'
  },
  textOverImage: {
    color: 'white', 
    fontSize: 90, 
    fontWeight: 'bold', 
    position: 'absolute', 
    zIndex: 10, 
    top: 80, 
    left: 100
  }
})