import React from "react";
import { SafeAreaView,Text,StyleSheet, ImageBackground,} from 'react-native';
import Button from './Button'

const image = {uri: 'https://www.elitefts.com/wp/wp-content/uploads/2014/10/elitefts-black-fade.jpg'}

const Welcome = (props) => {

    function goToNavigate (){
        props.navigation.navigate('MemberSign');
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}  >
                <Text style={styles.title}>Gold Fitness</Text>
                <Button title='Üye Ol' onPress={goToNavigate} />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex: 1,
        alignSelf: 'stretch',
    },
    title:{
        color: "#AFB1AE",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        marginTop:80,
        marginBottom:400,
    },
})