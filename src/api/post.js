import {get} from "@/api/http";

const  baseURL = '/post';

export function apiPostInHome(pageNum) {
  let url = baseURL + '/with-year'
  let params = {
    "pageNum": pageNum
  };
  return get(url, params);
}

export function apiPostInTag(tagSlug, pageNum) {
  let url = baseURL + '/with-year';
  let params = {
    "tagSlug": tagSlug,
    "pageNum": pageNum
  };
  return get(url, params);
}