import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import HeadersDetail from '../../components/Headers/HeadersDetail'
import ListComponent from '../../components/ListProfile/ListComponent'
import { profileGeneral, profilePreference, profileInformation } from '../../DummyData/profiledata'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../redux/actions/auth'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [activeIndicator, setActiveIndicator] = useState(false)
    const refRBSheet = useRef();

    const onLogout = () => {
        dispatch(authLogout())
        navigation.reset({
            index: 0,
            routes: [{ name: 'login' }],
        });
    }
  return (
    <ScrollView style={styles.parent} contentContainerStyle={{paddingBottom: 30}}>
    <HeadersDetail/>
      <View style={styles.boxWrapper}>
        <View style={styles.circleImageWrapper}>
            <Image style={styles.images}
            source={require('../../assets/img/getStarted.png')}/> 
        </View>
        <Text style={styles.largeText}>{auth.username === '' ? "Guest" : auth.username}</Text>
      </View>
      <View>
      <ListComponent
            Title={profilePreference.title}
            Section={profilePreference.section}
            Logout={() => this.Logout.open()}
          />
        <ListComponent
            Title={profileInformation.title}
            Section={profileInformation.section}
            Logout={() => this.Logout.open()}
          />
        <ListComponent
            Title={profileGeneral.title}
            Section={profileGeneral.section}
            Logout={() => refRBSheet.current.open()}
          />
      </View>

      <RBSheet
          closeOnDragDown={true}
          ref={refRBSheet}
          height={261}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingRight: 52,
              paddingLeft: 52,
              paddingBottom: 45,
              paddingTop: 25,
              backgroundColor: '#1f1d2c'
            },
          }}>
          <View style={styles.boxAlertWrapper}>
            <Text style={styles.textWhiteInAlert}>Are you sure?</Text>
            <Text style={styles.textGreyInAlert}>You want to logout</Text>
            <TouchableOpacity
              style={styles.buttonRedPrimary}
            //   disabled={disable}
              onPress={() => onLogout()}
              >
              {activeIndicator ? (
                <ActivityIndicator size="small" color="#34A0A4" />
              ) : (
                <Text style={styles.buttonTextWhite}>Yes</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTransparentNoBorder}
              onPress={() => refRBSheet.current.close()}>
              <Text style={styles.textRed}>Nah, i’ll check again</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>

    </ScrollView>
  )
}

export default Profile

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
        justifyContent: 'center',
        alignItems: 'center',
        top: -30
    },
    circleImageWrapper: {
        width: 120,
        height: 120,
        borderRadius: 120,
        borderColor: '#b1060f',
        borderWidth: 3,
        overflow: 'hidden'
    },
    images: {
        width: 120,
        height: 120,
    },
    largeText: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 16,
        marginTop:  10
    },
    boxAlertWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
      },
      textWhiteInAlert: {
        fontSize: 18,
        // lineHeight: 21,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        marginBottom: 4,
      },
      textGreyInAlert: {
        fontSize: 12,
        // lineHeight: 14,
        color: '#9092A6',
        fontFamily: 'Poppins-Bold',
        marginBottom: 15,
      },
      buttonRedPrimary: {
        width: '100%',
        backgroundColor: '#b1060f',
        paddingVertical: 14,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonTextWhite: {
        fontSize: 16,
        // lineHeight: 20,
        color: 'white',
        fontFamily: 'Poppins-Bold',
      },
      buttonTransparentNoBorder: {
        width: '100%',
        backgroundColor: 'transparent',
        paddingVertical: 15,
        marginTop: 9,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textRed: {
        fontSize: 11,
        // lineHeight: 12,
        color: '#B54343',
        fontFamily: 'Poppins-Bold',
      },
})