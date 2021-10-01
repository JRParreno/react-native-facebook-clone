import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { View, Text, StyleSheet, TextInput } from "react-native";
import LottieView from 'lottie-react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginScreen() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.lottieContainer}>
                <LottieView
                    style={{ flex: 0 }}
                    source={require('../../assets/lottiefiles/6081-facebook-with-emojis.json')}
                    autoPlay
                    loop
                />
            </View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        style={[styles.input, { borderBottomWidth: 1 }]}
                        placeholder={"Email or Username"}
                    />
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        placeholder={"Password"}
                    />
                </View>
                <Button
                    type={"solid"}
                    title={"Log In"}
                    buttonStyle={{ borderRadius: 5 }}
                    containerStyle={{ marginVertical: 50 }}
                />
                <TouchableOpacity

                >
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </ViewWithLoading>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    lottieContainer: {
        flex: 1.5,
    },
    input: {
        height: 50,
        padding: 10,
        borderColor: "#878787"
    },
    innerContainer: {
        flex: 0,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#878787",
    },
    forgotText: {
        fontSize: 15,
        color: '#3b5998',
        fontWeight: "bold",
        textAlign: 'center',
    },
    bottomContainer: {
        flex: 1,
    }
});