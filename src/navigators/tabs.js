import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { HomeScreen }  from "../screens";

import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name = "HomeScreen"
            component = {HomeScreen}
            options = {{
                tabBarIcon: ({focused}) => (
                    <Image
                    source={icons.cutlery}
                    resizeMode = "contain"
                    style = {{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary
                    }}
                    />
                )
            }}
            />
        </Tab.Navigator>
    )
}