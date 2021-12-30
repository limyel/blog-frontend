import {get, post} from "@/request/http";

const  baseURL = '/blog/comments'

export function apiCommentSave(comment) {
    let url = baseURL;
    return post(url, comment);
}

export function apiCommentByPostId(postId) {
    let url = baseURL + '/post/' + postId;
    return get(url);
}

export function apiCommentLatest() {
    let url = baseURL + '/latest';
    return get(url);
}