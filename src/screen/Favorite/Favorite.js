import { View, Text, StyleSheet, Image, FlatList, } from 'react-native'
import React from 'react'
import HeadersSearch from '../../components/Headers/HeadersSearch'
import { useSelector } from 'react-redux'
import DicoverCard from '../../components/Card/DicoverCard'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faStar
} from '@fortawesome/free-solid-svg-icons';

const Favorite = () => {
    const auth = useSelector(store => store.auth);
    return (
        <View style={styles.parent}>
            <View style={[styles.boxWrapper]}>
                <FontAwesomeIcon icon={faStar} color={'white'} size={20} style={{top: -3.5, marginRight: 8}} />
                <Text style={styles.largeText}>Your Fav List :</Text>
            </View>
            {auth.data.length > 0 ?
                <FlatList
                    style={styles.flatlistBox}
                    contentContainerStyle={{ paddingleft: 30, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 20 }}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={auth.data}
                    renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                            <DicoverCard
                                ID={item.id}
                                Title={item.title.length > 13
                                    ? item.title.slice(0, 13) + ' ...'
                                    : item.title}
                                UrlImage={item.url}
                                Genre={item.genre} />
                        </View>
                    )}
                    keyExtractor={(item, index) => String(index)}
                />
                :
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../../assets/img/notfound.png')}
                        style={styles.images}
                    />
                    <Text style={styles.largeText}>You Don't Have List Favorite</Text>
                </View>
            }
        </View>
    )
}

export default Favorite

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
        display: 'flex',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    largeText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 20
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
        width: 200,
        height: 200
    },
})