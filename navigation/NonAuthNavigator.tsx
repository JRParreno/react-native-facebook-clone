/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NonAuthParamList } from '../types';

import { LoginScreen } from "../screens/NonAuth";

const NonAuthStack = createStackNavigator<NonAuthParamList>();

export default function NonAuthNavigator() {
    return (
        <NonAuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <NonAuthStack.Screen
                name="Login"
                component={LoginScreen}
            />
            {/* <NonAuthStack.Screen
                 name="Registration"
                 component={RegistrationNavigator}
             />
             <NonAuthStack.Screen
                 name="ForgotPassword"
                 component={ForgotPasswordNavigator}
             /> */}
        </NonAuthStack.Navigator>
    );
}
