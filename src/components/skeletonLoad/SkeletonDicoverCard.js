import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonDicoverCard = () => {

    return (
        <View style={styles.containerCard}>
            <SkeletonPlaceholder
                highlightColor="#9092A650"
                backgroundColor="#55587090" style={styles.movieImage}>
                <View style={styles.movieImage} />
            </SkeletonPlaceholder>
            <View style={styles.textWrapper}>
                <SkeletonPlaceholder
                    highlightColor="#9092A650"
                    backgroundColor="#55587090" style={styles.titleSkeleton}>
                    <View style={styles.titleSkeleton} />
                </SkeletonPlaceholder>
                <SkeletonPlaceholder
                    highlightColor="#9092A650"
                    backgroundColor="#55587090" style={styles.subTitleSkeleton}>
                    <View style={styles.subTitleSkeleton} />
                </SkeletonPlaceholder>
            </View>
        </View>
    )
}

export default SkeletonDicoverCard

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
    },
    titleSkeleton: {
        width: 50,
        height: 15,
        marginTop: 2,
        borderRadius: 5
    },
    subTitleSkeleton: {
        width: 40,
        height: 12,
        marginTop: 8,
        borderRadius: 3
    }
})