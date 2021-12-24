import {get} from "@/request/http";

export function apiMemberInfo(code) {
    let url = '/blog/oauth/github';
    return get(url, {'code': code});
}