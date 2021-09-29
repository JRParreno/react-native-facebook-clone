import { RouteProp, useFocusEffect, useIsFocused, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Comment } from "../../models/Comment";
import { getComments, postComment } from "../../repository/CommentRepository";
import { HomeParamList } from "../../types";
import { TextInput } from 'react-native-paper';


type IRoute = {
    params: HomeParamList["PostDetail"];
}

export default function PostDetailScreen() {
    const route = useRoute<RouteProp<IRoute, "params">>();

    const post = route.params.post;

    const [comments, setComments] = useState<Array<Comment> | null>(null);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');


    const handleGetComments = () => {
        setLoading(true);
        getComments(post.id)
            .then((data: Array<Comment>) => {
                setComments(data);
            }).catch(error => {
                console.log(error);
            }).finally(() => setLoading(false));
    }


    const handlePostComment = () => {
        setLoading(true);
        postComment(post.id)
            .then((data: Comment) => {
                if (comments) {
                    let comment = comments.concat(data);
                    setComments(comment);
                    setText("");
                }
            }).catch(error => {
                console.log(error);
            }).finally(() => setLoading(false));
    }

    useFocusEffect(useCallback(
        () => {
            handleGetComments();
        },
        [useIsFocused()],
    ));

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <Card>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Divider />
                    <Text>
                        {post.body}
                    </Text>
                </Card>
                <View style={styles.commentContainer}>
                    <Text style={styles.commentTitle}>Comments</Text>
                    <ScrollView>
                        {comments &&
                            comments.map((item, index) => (
                                <ListItem key={index} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title style={{ fontWeight: 'bold', marginBottom: 5 }}
                                            numberOfLines={1}
                                        >{item.name}</ListItem.Title>
                                        <ListItem.Subtitle>{item.body}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{item.postId}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Comment"
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={handlePostComment}
                    />
                </View>
            </View>
        </ViewWithLoading>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commentContainer: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20
    },
    commentTitle: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20
    },
    inputContainer: {
        flex: 0,
        paddingHorizontal: 20,
        marginTop: 20
    }
});