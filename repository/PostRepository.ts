import axios from "axios";
import { Post } from "../models/Post";


export async function getPostList() {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    return axios.get(url,)
        .then(response => {
            return response.data.map((post: Post) => new Post(
                post.id,
                post.userId,
                post.title,
                post.body
            ));
        }).catch(error => {
            throw error;
        });

}