import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import DicoverCard from '../../components/Card/DicoverCard';

const FullListMovie = () => {
    const movie = useSelector(store => store.movie);
    return (
        <FlatList
            style={styles.flatlistBox}
            contentContainerStyle={{ paddingleft: 30,justifyContent: 'center', alignItems: 'center', paddingTop: 80, paddingBottom: 20 }}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            data={movie.movieList}
            renderItem={({ item, index }) => (
                <View style={{marginHorizontal: 10, marginBottom: 10}}>
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
    )
}

export default FullListMovie

const styles = StyleSheet.create({
    parent: {
        flexGrow: 1,
        backgroundColor: '#1f1d2c',
        display: 'flex',
        paddingBottom: 20
    },
    flatlistBox: {
        width: '100%',
        height: 220,
        backgroundColor: '#1f1d2c',
    },
})