import React, { useState } from "react";
import { SafeAreaView ,Text, View,StyleSheet, TextInput, Alert} from 'react-native';
import Button from './Button';


const MemberSign = (props) => {

const [userName , setUserName] = useState(null);
const [userSurName , setUserSurName] = useState(null);
const [userAge , setUserAge] = useState(null);
const [userMail , setUserMail] = useState(null);

function HandleSubmit(){
    user = {
        userName,
        userSurName,
        userAge,
        userMail,
    }
    if(!userName || !userSurName || !userAge || !userMail){
        Alert.alert('Eyübün Yeri Spor Salonu', 'Lütfen tüm boşlukları doldurun..')
        return;
    }
    else{
        props.navigation.navigate('MemberSuccess', {user})
    }
}

return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Üye ismi</Text>
        <TextInput style={styles.input}  placeholder='üyenin ismini giriniz...' onChangeText={text =>setUserName(text)} /> 
        <Text style={styles.label}>Üye Soyadı</Text>
        <TextInput style={styles.input}  placeholder='üyenin soyismini giriniz...' onChangeText={setUserSurName} />
        <Text style={styles.label}>Üye Yaşı</Text>
        <TextInput style={styles.input}  placeholder='üyenin yaşını giriniz...' onChangeText={setUserAge} />
        <Text style={styles.label}>Üye E-postası</Text>
        <TextInput style={styles.input}  placeholder='üyenin e-postasını giriniz...' onChangeText={setUserMail}/>
        
        <View style={styles.button_container}>
        <Button title='Kaydı Tamamla' onPress={HandleSubmit} />
        </View>
        
    </SafeAreaView>
)
}

export default MemberSign;


const styles = StyleSheet.create({
    container:{
        margin:10,
    },
    label:{
        fontSize:15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:10,
        marginTop:10,
    },
    info_container:{},
    input:{
        borderColor: '#AFB1AE',
        borderWidth:1,
        borderRadius:5,
        padding:6,
    },
})
