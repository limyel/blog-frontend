import {get} from "@/request/http";

export function apiUserInfo(code) {
    let url = '/blog/oauth/github';
    return get(url, {'code': code});
}