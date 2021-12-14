import {get} from "@/request/http";

let baseURL = '/blog/about'

export function apiAbout() {
    let url = baseURL;
    return get(url);
}