import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { PostDetailScreen, PostListScreen } from '../screens/Post';
import { HomeParamList } from '../types';

const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PostList"
                component={PostListScreen}
                options={{ title: "Posts" }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetailScreen}
                options={{ title: "Post Detail" }}
            />
        </Stack.Navigator>
    );
}