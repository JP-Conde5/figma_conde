import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MenuTab } from './MenuTabBottom.navigation'

export function Navigation(){
    return(
        <NavigationContainer>
            <MenuTab/>
        </NavigationContainer>
    )
}