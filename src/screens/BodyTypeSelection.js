import React, {Component} from "react";
import {
    View,
    StyleSheet,
} from "react-native"
import { colors } from "../constants/cnst";
import Button from "../components/button";

const BodyTypeSelection = () => 
{
    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button>
                    Ectomorph
                </Button>    
            </View>
            <View style={styles.buttons}>
                <Button>
                    Ectomorph
                </Button>    
            </View>
            <View style={styles.buttons}>
                <Button>
                    Ectomorph
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
        overflow: "hidden",
        marginVertical: 20,
        borderColor: colors.white,
        borderRadius: 5,
        alignContent: "center",
        justifyContent: "center",
    }
}); 

export default BodyTypeSelection;
