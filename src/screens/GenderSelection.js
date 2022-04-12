import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native"
import { colors } from "../constants/cnst";
import Button from "../components/button";

const GenderSelection = () => 
{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    My Body Type Is...
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button>
                    Male
                </Button>    
            </View>
            <View style={styles.buttons}>
                <Button>
                    Female
                </Button>    
            </View>
            <View style={styles.buttons}>
                <Button>
                    Other
                </Button>    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        overflow: "hidden",
        backgroundColor: colors.green,
    },
    buttons:
    {
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.white,
        alignContent: "center",
        justifyContent: "center",
    },
    text:
    {
        marginVertical:10,
        fontSize: 24,
        color: colors.white,
        // alignContent:"center",
        // justifyContent: "center",
        // alignSelf:"center"
    },
    textContainer:
    {
        marginVertical: 15,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
}); 

export default GenderSelection;