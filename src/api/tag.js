import {get} from "@/api/http";

const  baseURL = '/tag';

export function apiPageTag(pageNum) {
    let params = {
        "pageNum": pageNum
    };
    return get(baseURL, params);
}