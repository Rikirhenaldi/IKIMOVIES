import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faStore,
    faChevronRight,
    faClock,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';


export default function ListComponent({ Title, Section, Logout}) {
    const navigation = useNavigation();
    return (
        <View style={styles.boxWrapperRow}>
            <Text style={{
                fontFamily: 'WorkSans-Bold',
                fontSize: 16,
                color: 'white',
                marginBottom: 8
            }}>
                {Title}
            </Text>
            {Section.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={
                            item.route === 'logout'
                                ? Logout
                                : () => navigation.navigate(item.route)
                        }>
                        <View style={styles.boxRow}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                size={22}
                                color={'white'}
                                style={{ marginLeft: -8, marginRight: 24 }}
                            />
                            <View style={{
                                width: 250,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: 'WorkSans-Bold',
                                        fontSize: 14,
                                        color: 'white',
                                        marginBottom: 5,
                                    }}>
                                    {item.sectionName}
                                </Text>
                                <Text style={{
                                    fontFamily: 'WorkSans-Bold',
                                    fontSize: 12,
                                    color: 'white',
                                }}>
                                    {item.description}
                                </Text>
                            </View>
                            <View>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    size={15}
                                    color={'white'}
                                />
                            </View>
                        </View>
                        <View style={styles.linewrap}>
                            <View style={styles.line}></View>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    boxWrapper: {
        width: '100%',
        paddingHorizontal: 30,
        flex: 0.4,
        paddingTop: 50,
    },
    boxBottom: {
        width: '100%',
        flex: 0.9,
        position: 'relative',
        // top : "45%",
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        marginTop: 28,
        // paddingVertical: 34
    },
    boxProfile: {
        // backgroundColor: 'yellow',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: 25,
        paddingBottom: 29,
    },
    images: {
        width: 112,
        height: 112,
        borderRadius: 112,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 13,
    },
    boxWrapperRow: {
        // backgroundColor: 'yellow',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 17,
    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 10,
    },
    boxRowTablet: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 20,
    },
    // boxMiddle: {
    //   backgroundColor: 'yellow',
    //   width: Device === "Tablet" ? '80%' : 250,
    // },
    line: {
        width: '100%',
        height: 1,
        borderWidth: 0.8,
        borderColor: '#F2F2F2',
    },
    linewrap: {
        paddingLeft: 45,
        paddingRight: 20,
        marginTop: 11,
        paddingBottom: 6,
    },
    line: {
        width: '100%',
        height: 1,
        borderWidth: 0.5,
        borderColor: '#F2F2F2',
      },
      linewrap: {
        paddingLeft: 45,
        paddingRight: 20,
        marginTop: 11,
        paddingBottom: 6,
      },
      boxRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 10,
      },
});
