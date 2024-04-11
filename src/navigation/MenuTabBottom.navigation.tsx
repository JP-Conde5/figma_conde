import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { ScreenHome, ScreenOptions } from '../screens'
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import React from 'react';

type MenuTabParam = {
    Home: undefined
    Options: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">

export type MenuTabTypes ={
    navigation: MenuScreenNavigation
}

export function MenuTab(){
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ScreenHome} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home-circle" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name="Options" component={ScreenOptions} options={{
                tabBarIcon: () => (
                    <FontAwesome6 name="gear" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}