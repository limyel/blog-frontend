import {get} from "@/api/http";

const  baseURL = '/post';

export function apiPostInHome(pageNum) {
  let params = {
    "pageNum": pageNum
  };
  return get(baseURL, params);
}