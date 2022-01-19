import {get} from "@/request/http";

let baseURL = '/blog/abouts'

export function apiAboutList() {
    let url = baseURL;
    return get(url);
}