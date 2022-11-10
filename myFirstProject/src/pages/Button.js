import React from "react";
import { TouchableOpacity ,Text,StyleSheet } from "react-native";

const width_proportion = '50%';

const Button = (props) => {


    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress} >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#AFB1AE',
        alignItems: 'center',
        marginLeft:80,
        marginRight:80,
        margin:10,
        padding:10,
        borderRadius:5,
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:15,
    },
})