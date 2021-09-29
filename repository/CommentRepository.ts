import axios from "axios";
import { Comment } from "../models/Comment";


export async function getComments(postId: string) {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    return axios.get(url,)
        .then(response => {
            return response.data.map((comment: Comment) => new Comment(
                comment.postId,
                comment.id,
                comment.name,
                comment.email,
                comment.body
            ));
        }).catch(error => {
            throw error;
        });
}


export async function postComment(postId: string) {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    return axios.post(url,)
        .then(response => {
            console.log(response.data);
            return new Comment(
                response.data.postId,
                response.data.id,
                response.data.name,
                response.data.email,
                response.data.body
            );
        }).catch(error => {
            throw error;
        });
}