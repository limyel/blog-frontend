import {get} from "@/request/http";

const  baseURL = '/blog/posts'

export function apiPostInHome(pageNum) {
    let url = baseURL + '?pageNum=' + pageNum
    return get(url)
}

export function apiPostDetail(slug) {
    let url = baseURL + '/' + slug;
    return get(url);
}

export function apiPostArchive() {
    let url = baseURL + '/archives';
    return get(url);
}

export function apiPostHot() {
    let url = baseURL + '/hot';
    return get(url);
}

export function apiPostTag(slug) {
    let url = baseURL + '/tag/' + slug;
    return get(url);
}

export function apiWeekly() {
    let url = baseURL + '/weekly';
    return get(url);
}