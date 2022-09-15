import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeadersSearch from '../../components/Headers/HeadersSearch'
import { useDispatch, useSelector } from 'react-redux'
import DicoverCard from '../../components/Card/DicoverCard'
import { getMovieBySearch } from '../../redux/actions/movie'
import { useNavigation } from '@react-navigation/native'


const Search = () => {
    const movie = useSelector(store => store.movie);
    const [search, setSearch] = useState(movie?.lastSearch)
    const [activeSearch, setActiveSearch] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const onSearchMovie = (val) => {
        dispatch(getMovieBySearch(val)).then(() => {
            // navigation.navigate('home', {screen: 'Search'})
            setActiveSearch(true)
        })
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSearch(movie?.lastSearch)
        });
        return unsubscribe;
    }, [movie?.lastSearch])

    return (
        <View style={styles.parent}>
            <HeadersSearch />
            <View style={[styles.boxWrapper, { marginTop: 40 }]}>
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
                    value={search}
                    onChangeText={value => setSearch(value)}
                    onSubmitEditing={() => onSearchMovie(search)}
                />
                <Image
                    source={require('../../assets/icon/searching.png')}
                    style={styles.searching} />
            </View>
            {movie?.searchResults?.results?.length > 0 ?
                <FlatList
                    style={styles.flatlistBox}
                    contentContainerStyle={{ paddingleft: 30, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 20 }}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={movie?.searchResults?.results}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                            <DicoverCard
                                ID={item.id}
                                Title={item.original_title.length > 13
                                    ? item.original_title.slice(0, 13) + ' ...'
                                    : item.original_title} UrlImage={item.backdrop_path}
                                Genre={item.genre_ids[0]} />
                        </View>
                    )}
                    keyExtractor={(item, index) => String(index)}
                />
                :
                movie?.searchResults?.length === 0 && activeSearch === false ?
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../assets/img/search.png')}
                            style={styles.images}
                        />
                        <Text style={styles.largeText}>Start Find Your Favorite Movie</Text>
                    </View>
                    :
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../assets/img/notfound.png')}
                            style={styles.images}
                        />
                        <Text style={styles.largeText}>Movie Not Found</Text>
                    </View>
            }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    parent: {
        flexGrow: 1,
        backgroundColor: '#1f1d2c',
        display: 'flex',
        paddingTop: 20,
    },
    boxWrapper: {
        width: "100%",
        paddingHorizontal: 30,
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
        position: 'relative',
        left: 10,
        top: -30
    },
    flatlistBox: {
        width: '100%',
        height: 220,
        backgroundColor: '#1f1d2c',
    },
    imageWrapper: {
        width: '100%',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    images: {
        width: 230,
        height: 230
    },
    largeText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 20
    },
})