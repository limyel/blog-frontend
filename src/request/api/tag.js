import {get} from "@/request/http";

const  baseURL = '/blog/tags';

export function apiTagList() {
    let url = baseURL;
    return get(url);
}

export function apiTagDetail(slug) {
    let url = baseURL + '/' + slug;
    return get(url);
}