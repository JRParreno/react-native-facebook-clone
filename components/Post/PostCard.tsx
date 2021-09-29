import * as React from "react";
import { FlatList, ScrollView, StyleSheet, View, Text } from "react-native";
import { Post } from "../../models/Post";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";


interface IProps {
    posts: Array<Post>;
}


export default function PostCard(props: IProps) {

    const navigation = useNavigation();


    const _renderItem = ({ item, index }) => {
        return (
            <Card
                key={item.id}
            >
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <Text>
                    {item.body}
                </Text>
                <Button
                    title={"View Post"}
                    onPress={() => navigation.navigate("PostDetail", { post: item })}
                    style={{ marginTop: 10, }}
                    buttonStyle={{ borderRadius: 10 }}
                />
            </Card>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.posts}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flexGrow: 1
    }
});