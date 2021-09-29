import { useFocusEffect, useIsFocused } from "@react-navigation/core";
import * as React from "react";
import { useCallback, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button } from 'react-native-elements';
import { PostCard } from "../../components/Post";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Post } from "../../models/Post";
import { getPostList } from "../../repository/PostRepository";

export default function PostListScreen() {

    const [posts, setPosts] = useState<Array<Post> | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGetPostList = () => {
        setLoading(true);
        getPostList()
            .then((data: Array<Post>) => {
                setPosts(data);
            }).catch(error => {
                console.log(error);
            }).finally(() => setLoading(false));
    }

    useFocusEffect(useCallback(
        () => {
            handleGetPostList();
        },
        [useIsFocused()],
    ));


    return (
        <ViewWithLoading loading={loading}>
            {posts && (
                <PostCard
                    posts={posts}
                />
            )}
        </ViewWithLoading>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});