import { StyleSheet, Text, View, Modal, Button, Alert, Image, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { actions } from '../store/favouriteSlice';

const ModalScreen = ({modal, showModal, details}) => {

    const dispatch = useDispatch();
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
    console.log(details);

    const submtHandler = () => {
        dispatch(actions.addToFavs(details));
        showModal(false);
    }

  return (
    <View style={styles.modalContainer}>
        <Modal
            visible={modal} 
            onRequestClose={() => [showModal(false)]} 
            animationType='slide'
            transparent={true}
        >
            <View style={styles.modalContentContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.details}>
                        <Image style={styles.image} 
                            source={{uri: IMAGE_BASE_URL+details.poster_path}}
                        />
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.detailsTitle}>
                                {details.name ? details.name : details.original_title}
                            </Text> 
                            <Text style={styles.releaseDate}>
                                {details.first_air_date ? details.first_air_date : details.release_date}
                            </Text> 
                            <Text style={styles.detailsOverview}>
                                {details?.overview?.length > 150 ? details.overview.slice(0, 150)+'....' : details.overview}
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 10, marginHorizontal: '30%'}}>
                        <Pressable style={styles.addToFavPressable} onPress={submtHandler}>
                        <Entypo name="controller-play" size={24} color="black" />
                            <Text>Add to Favs.</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 40
    },
    modalContentContainer: {
        marginTop: 510, 
        flex: 1, 
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: '#4a4848', 
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10, 
        overflow: 'hidden'
    },
    details: {
        flexDirection: 'row', 
        height: 200
    },
    image: {
        width: 110, 
        height:150, 
        marginRight: 5
    },
    detailsTitle: {
        color: 'white', 
        fontSize: 15, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        marginTop: 6
    },
    releaseDate: {
        color: 'grey'
    },
    detailsOverview: {
        color: 'white', 
        fontSize: 15
    },
    addToFavPressable: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: 'white',
        width: 150,
        justifyContent: 'center' ,
        paddingVertical: 10,
        borderRadius: 10
    }
})