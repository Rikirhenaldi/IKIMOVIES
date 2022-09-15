import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import DicoverCard from '../../components/Card/DicoverCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList, getDiscoverList, getMovieBySearch, getMovieList, SetCategoryActive } from '../../redux/actions/movie'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const [search, setSearch] = useState('')
    const movie = useSelector(store => store.movie);
    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    useEffect(() => {
        dispatch(getDiscoverList()).then(() => {
            //   console.log(movie.discoverList);
        })
        dispatch(getMovieList()).then(() => {
            //   console.log(movie.movieList, "<<<<<<<<< movie list");
        })
        dispatch(getCategoriesList()).then(() => {
            console.log(movie.categoriesList, "<<<<<<<<< movie list");
        })
    }, [])

    const [discover, setdiscover] = useState([1, 2, 3])

    const setCategorytoActive = (val) => {
        dispatch(SetCategoryActive(val))
    }

    const onSearchMovie = (val) => {
        dispatch(getMovieBySearch(val)).then(() => {
            navigation.navigate('home', {screen: 'Search'})
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.parent}>
            <View style={styles.boxWrapper}>
                <View style={styles.boxRow}>
                    <Image
                        source={require('../../assets/img/getStarted.png')}
                        style={styles.profile}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.text1}>Hello, {auth.username === '' ? "Guest" : auth.username}</Text>
                        <Text style={styles.subtext}>Let's mark your favorite movies</Text>
                    </View>
                </View>
                <View style={[styles.boxRow, { marginTop: 30 }]}>
                    <TextInput
                        style={styles.input}
                        w="100%"
                        placeholder="Search product"
                        placeholderTextColor="#9092A6"
                        color="white"
                        variant="unstyled"
                        keyboardType="default"
                        returnKeyType='search'
                        size="lg"
                        autoFocus={true}
                        value={search}
                        onChangeText={value => setSearch(value)}
                        onSubmitEditing={() => onSearchMovie(search)}
                    />
                    <Image
                        source={require('../../assets/icon/searching.png')}
                        style={styles.searching} />
                </View>
            </View>
            <View style={[styles.boxWrapper, { marginTop: 20 }]}>
                <Text style={styles.largeText}>Discover</Text>
            </View>
            <FlatList
                style={styles.flatlistBox}
                contentContainerStyle={{ paddingLeft: 30 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movie?.discoverList}
                renderItem={({ item }) => (
                    <DicoverCard
                        ID={item.id}
                        Title={item.original_title.length > 13
                            ? item.original_title.slice(0, 13) + ' ...'
                            : item.original_title} UrlImage={item.backdrop_path}
                        Genre={item.genre_ids[0]} />
                )}
                keyExtractor={(item, index) => String(index)}
            />
            <View style={[styles.boxWrapper, { marginTop: 20 }]}>
                <Text style={styles.mediumText}>Categories</Text>
            </View>
            <FlatList
                style={{height: 40}}
                contentContainerStyle={{ paddingLeft: 30 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movie?.categoriesList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setCategorytoActive(item.name)} style={movie?.categoryActive === item.name ? styles.buttonCategoriesActive : styles.buttonCategoriesInActive}>
                        <Text style={ movie?.categoryActive === item.name ? styles.categoriesTextActive : styles.categoriesTextInActive }>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => String(index)}
            />
            <View style={[styles.boxWrapper, { marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }]}>
                <Text style={styles.mediumText}>Most Popular</Text>
                <TouchableOpacity onPress={() => navigation.navigate('full-list')}>
                    <Text style={styles.mediumRedText}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatlistBox}
                contentContainerStyle={{ paddingLeft: 30 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movie?.movieList}
                renderItem={({ item, index }) => (
                    index < 10 ?
                    <DicoverCard
                    ID={item.id}
                    Title={item.original_title.length > 13
                        ? item.original_title.slice(0, 13) + ' ...'
                        : item.original_title} UrlImage={item.backdrop_path}
                        Genre={item.genre_ids[0]} />
                    :
                        null
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    parent: {
        flexGrow: 1,
        backgroundColor: '#1f1d2c',
        display: 'flex',
        paddingTop: 30,
    },
    boxWrapper: {
        width: "100%",
        paddingHorizontal: 30,
        display: 'flex',
    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    text1: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 14
    },
    subtext: {
        fontFamily: 'Poppins-Regular',
        color: '#9092A6',
        fontSize: 12
    },
    textWrapper: {
        paddingLeft: 20
    },
    input: {
        backgroundColor: '#262837',
        width: '100%',
        borderRadius: 100,
        height: 40,
        paddingLeft: 40,
        position: 'relative',
        fontSize: 12,
    },
    searching: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10
    },
    largeText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 20
    },
    mediumText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 16
    },
    mediumRedText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#b1060f',
        fontSize: 14
    },
    categoriesTextActive: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: 12
    },
    categoriesTextInActive: {
        fontFamily: 'Poppins-Medium',
        color: '#9092A6',
        fontSize: 12
    },
    flatlistBox: {
        width: '100%',
        height: 220,
        paddingTop: 10
    },
    buttonCategoriesActive: {
        paddingHorizontal: 30,
        height: 30,
        backgroundColor: '#b1060f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 15,
        marginTop: 10
    },
    buttonCategoriesInActive: {
        paddingHorizontal: 30,
        height: 30,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 15,
        marginTop: 10
    }
})