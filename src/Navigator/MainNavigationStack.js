import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../components/screens/SignInScreen'
import GroupAddScreen from '../components/screens/GroupAddScreen'
import GroupScreen from '../components/screens/GroupScreen'
import ChatScreen from '../components/screens/ChatScreen'

const Stack = createStackNavigator()

function ChatFlow(){
    return(
        <NavigationContainer>
            <Stack.Navigator name = 'Chat'>
                <Stack.Screen
                name={'SignInScreen'}
                component ={SignInScreen}
                options={{headerShown:false}}
                />
                 <Stack.Screen
                name={'GroupScreen'}
                component ={GroupScreen}
                options={{title:'Groups'}}
                />
                <Stack.Screen
                name={'GroupAddScreen '}
                component ={GroupAddScreen }
                options={{title:'Add Group'}}
                />
                <Stack.Screen
                name={'ChatScreen'}
                component ={ChatScreen}
                options={{title: 'Chat'}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function MainStackNavigator() {
    return ChatFlow();
}