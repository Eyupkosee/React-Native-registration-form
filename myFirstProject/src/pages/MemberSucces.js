import React from "react";
import { SafeAreaView,Text,StyleSheet } from 'react-native';


function MemberSuccess({route}){

    const {user} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Kayıt Tamamlandı</Text>
            <Text style={styles.text}>Kullanıcı Adı : {user.userName}</Text>
            <Text style={styles.text}>Kullanıcı Soyadı : {user.userSurName}</Text>
            <Text style={styles.text}>Kullanıcı Yaşı : {user.userAge}</Text>
            <Text style={styles.text}>Kullanıcı E-postası : {user.userMail}</Text>
        </SafeAreaView>
    )
}

export default MemberSuccess;


const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
    },
    title:{
        fontSize:24,
        color: 'black',
        textAlign: 'center',
        margin:10,
    },
    text:{
        padding:5,
        color: 'black',
        fontWeight: '600'
    }
})