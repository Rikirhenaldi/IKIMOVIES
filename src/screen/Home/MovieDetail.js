import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useMemo, useState, } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailMovieById } from '../../redux/actions/movie'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBookmark,
    faCalendar,
    faClock,
    faDownload,
    faFilm,
    faShare,
    faShareAltSquare,
    faStar
} from '@fortawesome/free-solid-svg-icons';
import { addFavoriteMovie } from '../../redux/actions/auth'

const MovieDetail = () => {
    const movie = useSelector(store => store.movie);
    const dispatch = useDispatch()
    const [genre, setGenre] = useState([])
    useMemo(() => {
        dispatch(getDetailMovieById(movie?.IdDetailActive)).then(() => {
            setGenre(movie.detailMovie?.genres)
        })
    }, [movie?.IdDetailActive])

    const addMovieToFav = (val) => {
        dispatch(addFavoriteMovie(val))
    }
    return (
        <ScrollView contentContainerStyle={styles.parent} >
            <View style={styles.ImageWrapper}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie?.detailMovie?.backdrop_path}` }}
                    style={styles.bgImage}
                />
                <View style={styles.cardImage}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/original${movie?.detailMovie?.backdrop_path}` }}
                        style={styles.poster}
                    />
                </View>
                <View style={styles.iconRowWrapper}>
                    <View style={styles.contentRow}>
                        <FontAwesomeIcon icon={faCalendar} color={'white'} size={16} />
                        <Text style={styles.textIcon}>{movie?.detailMovie?.release_date?.slice(0, 4)}</Text>
                    </View>
                    <View style={styles.contentRow}>
                        <FontAwesomeIcon icon={faClock} color={'white'} size={16} />
                        <Text style={styles.textIcon}>{movie?.detailMovie?.runtime + " Min"} </Text>
                    </View>
                    <View style={styles.contentRowNoBorder}>
                        <FontAwesomeIcon icon={faFilm} color={'white'} size={16} />
                        {movie?.detailMovie?.genres && <Text style={styles.textIcon}>{movie?.detailMovie?.genres[0]?.name}</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.boxWrapper}>
                <Text style={styles.textLargeTitle}>{movie?.detailMovie?.original_title}</Text>
            </View>
            <View style={[styles.boxWrapper, styles.rowWrapper]}>
                <TouchableOpacity style={styles.favoriteButton} onPress={() => addMovieToFav({ 
                    id: movie?.detailMovie?.id,
                    title: movie?.detailMovie?.original_title,
                    genre: movie?.detailMovie?.genres[0].id,
                    url: `${movie?.detailMovie?.backdrop_path}`
                    })}>
                    <FontAwesomeIcon icon={faBookmark} color={'white'} size={14} style={{top: 3}} />
                    <Text style={styles.textButton}>Mark to Fav</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                    <FontAwesomeIcon icon={faDownload} color={'white'} size={16} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                    <FontAwesomeIcon icon={faShare} color={'white'} size={16} />
                </TouchableOpacity>
            </View>
            <View style={[styles.boxWrapper, {paddingTop: 20}]}>
                <Text style={styles.subTitle}>Story Line</Text>
                <Text style={styles.textDesc}>{movie?.detailMovie?.overview}</Text>
            </View>
        </ScrollView>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    parent: {
        flexGrow: 1,
        backgroundColor: '#1f1d2c',
        display: 'flex',
        paddingBottom: 20
    },
    ImageWrapper: {
        width: '100%',
        position: 'relative'
    },
    bgImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'cover',
        opacity: 0.2,
        borderBottomWidth: 4,
        borderColor: '#1f1d2c'
    },
    cardImage: {
        width: 220,
        height: 300,
        position: 'absolute',
        top: 70,
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 10
    },
    poster: {
        width: 220,
        height: undefined,
        aspectRatio: 0.8,
        resizeMode: 'cover',
        borderRadius: 10
    },
    iconRowWrapper: {
        width: '100%',
        paddingHorizontal: 55,
        position: 'relative',
        top: -40,
        display: 'flex',
        flexDirection: 'row',
    },
    contentRow: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 25,
        width: 80,
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 1.5,
        borderColor: 'white',
        height: 18,
        marginTop: 10
    },
    contentRowNoBorder: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10,
        width: 110,
        alignItems: 'center',
        height: 16,
        marginTop: 10
    },
    textIcon: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: 12,
        marginLeft: 8,
    },
    subTitle: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: 16,
    },
    textDesc: {
        fontFamily: 'Poppins-Medium',
        color: '#9092A6',
        fontSize: 12,
        marginTop: 4
    },
    textLargeTitle: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    textButton: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 12,
        alignSelf: 'center',
        marginLeft: 10,
        top: 1,
    },
    boxWrapper: {
        width: "100%",
        paddingHorizontal: 30,
    },
    favoriteButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#b1060f',
        paddingVertical: 10,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: 10
    },
    circleButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#262837',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    rowWrapper: {
        marginTop: 15, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',}
})