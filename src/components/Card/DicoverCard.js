import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SetIdDetailActive } from '../../redux/actions/movie'

const DicoverCard = ({ID, Title, UrlImage, Genre}) => {
    const movie = useSelector(store => store.movie);
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const setMovie = () => {
        dispatch(SetIdDetailActive(ID))
        navigation.navigate('movie-detail')
    }
    return (
        <TouchableOpacity style={styles.containerCard} onPress={() => setMovie()}>
            <Image
                source={{uri: `https://image.tmdb.org/t/p/original${UrlImage}`}}
                style={styles.movieImage} 
                />
            <View style={styles.textWrapper}>
                <Text style={styles.textTitle}>{Title}</Text>
                <Text style={styles.textTitleGrey}>{
                Genre === 28? "Action" :
                Genre === 12? "Adventure" :
                Genre === 16? "Animation" :
                Genre === 878 ? "Science-Fiction" :
                "Drama" }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DicoverCard

const styles = StyleSheet.create({
    containerCard: {
        width: 140,
        height: 210,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#262837',
        marginRight: 10,
        marginBottom: 10
    },
    movieImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'cover',
        alignItems: 'center'
    },
    textWrapper: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 8
    },
    textTitle: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 12,
    },
    textTitleGrey: {
        fontFamily: 'Poppins-Regular',
        color: 'grey',
        fontSize: 10,
    }
})