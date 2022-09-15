import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { authLogin, authLoginGuest, getRequestToken, resetLoginMessage, SetFirstOpenAppsUser } from '../../redux/actions/auth'
import { showMessage } from 'react-native-flash-message';
import {
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Login = () => {
    const auth = useSelector(store => store.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [activeIndicator, setActiveIndicator] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SetFirstOpenAppsUser(false))
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getRequestToken()).then(() => {
                console.log(auth.requestedToken, "<<<<<<< token");
            })
        });
        return unsubscribe;
    }, [])

    const onLogin = (token, username, password) => {
        dispatch(authLogin(token, username, password)).then(() => {
            if (auth.errMsg !== '') {
                showMessage({
                    message: 'Login Failed',
                    type: 'success',
                    duration: 1000,
                    backgroundColor: "#b1060f"
                });
                dispatch(resetLoginMessage())
            } else {
                showMessage({
                    message: 'Login Success',
                    type: 'success',
                    duration: 1000,
                    backgroundColor: "#055CC4"
                });
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'home' }],
                    });
                }, 1000);
            }
        })
    }

    const onLoginGuest = () => {
        dispatch(authLoginGuest()).then(() => {
            if (auth.errMsg !== '') {
                showMessage({
                    message: 'Login Failed',
                    type: 'success',
                    duration: 1000,
                    backgroundColor: "#b1060f"
                });
                dispatch(resetLoginMessage())
            } else {
                showMessage({
                    message: 'Login Success',
                    type: 'success',
                    duration: 1000,
                    backgroundColor: "#055CC4"
                });
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'home' }],
                    });
                }, 1000);
            }
        })
    }

    return (

        <KeyboardAvoidingView
            // style={styles.parent}
            behavior="height"
            keyboardVerticalOffset={-200}
            enabled>
        <ScrollView contentContainerStyle={styles.parent}>
            <Image
                source={require('../../assets/img/login.png')}
                style={styles.bgImage}
            />
            <View style={styles.cardWhite}>
                <View style={styles.boxWrapper}>
                    <Text style={styles.largeText}>Welcome Back</Text>
                    <Text style={styles.subText}>Please login before continue</Text>
                </View>
                <View style={[styles.boxWrapper, styles.marginBox]}>
                    <Text style={styles.subTextBlack}>Username</Text>
                    <TextInput
                        placeholder={'Your username'}
                        hideUnderline
                        keyboardType={'default'}
                        style={styles.input}
                        value={username}
                        onChangeText={value => setUsername(value)}
                    />
                </View>
                <View style={[styles.boxWrapper, styles.marginBox]}>
                    <Text style={styles.subTextBlack}>Password</Text>
                    <TextInput
                        placeholder={'Your password'}
                        hideUnderline
                        keyboardType={'default'}
                        style={styles.input}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={!showPassword}
                    />
                    {showPassword ?
                        <TouchableOpacity style={styles.showPassIcon} onPress={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={faEye} color={'black'} size={14} style={{ top: 3 }} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.showPassIcon} onPress={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={faEyeSlash} color={'black'} size={14} style={{ top: 3 }} />
                        </TouchableOpacity>}
                </View>
                <View style={[styles.boxWrapper, styles.marginBox]}>
                    <TouchableOpacity
                        style={styles.buttonRedPrimary}
                        onPress={() => onLogin(auth.requestedToken.request_token, username, password)}
                    >
                        <Text style={styles.buttonTextWhite}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxWrapper, { alignItems: 'center', marginTop: 20 }]}>
                    <TouchableOpacity onPress={() => onLoginGuest()}>
                        <Text style={styles.subTextBlue}>Log in as a Guest</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login


const styles = StyleSheet.create({
    parent: {
        flexGrow: 1,
        backgroundColor: '#1f1d2c',
        display: 'flex',
        paddingTop: 20,
        alignItems: 'center',
        paddingBottom: 20
    },
    boxWrapper: {
        width: "100%",
        paddingHorizontal: 30,
        display: 'flex',
    },
    bgImage: {
        width: '65%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'cover',
        borderBottomWidth: 4,
        borderColor: '#1f1d2c',
        marginTop: 60
    },
    cardWhite: {
        height: '80%',
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        paddingTop: 20
    },
    largeText: {
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 24
    },
    subText: {
        fontFamily: 'Poppins-Bold',
        color: '#9092A6',
        fontSize: 13
    },
    subTextBlack: {
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 13,
        marginBottom: 5
    },
    subTextBlue: {
        fontFamily: 'Poppins-Bold',
        color: '#055CC4',
        fontSize: 13,
        marginBottom: 5
    },
    input: {
        backgroundColor: '#F8FBFF',
        fontFamily: 'Poppins-Medium',
        color: '#9092A6',
        paddingHorizontal: 20,
        borderRadius: 6,
        fontSize: 12,
    },
    marginBox: {
        marginTop: 20,
    },
    buttonRedPrimary: {
        width: '100%',
        backgroundColor: '#b1060f',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonTextWhite: {
        fontSize: 14,
        // lineHeight: 20,
        color: 'white',
        fontFamily: 'Poppins-Bold',
    },
    showPassIcon: {
        position: 'relative',
        left: '90%',
        backgroundColor: 'transparent',
        bottom: '35%'
    }
})