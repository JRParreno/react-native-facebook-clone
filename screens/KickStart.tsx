import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../components/ViewWithLoading";
import { View, Text, StyleSheet } from "react-native";

export default function NameScreen() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);


    return (
        <ViewWithLoading loading={loading}>
            <View>

            </View>
        </ViewWithLoading>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});