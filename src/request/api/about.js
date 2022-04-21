import {get} from "@/request/http";

let baseURL = '/blog/posts/about'

export function apiAbout() {
    let url = baseURL;
    return get(url);
}