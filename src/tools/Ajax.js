import axios from 'axios';
const host = "http://localhost:8000";

/**
 * 发送网络请求
 *
 * @param method            HTTP Status
 * @param url               URL
 * @param bodyParams        HTTP Body
 * @param urlParams         URL Params
 * @returns {AxiosPromise}
 */
export default function (method, url, {bodyParams = {}, urlParams = {}}) {
  // 是否存在Access Token，存在则写入HTTP头
  let headers = {};

  // 将url参数写入URL
  let urlParamsStr = '';
  for (let urlParamsKey in urlParams) {
    urlParamsStr += `${urlParamsKey}=${urlParams[urlParamsKey]}&`;
  }
  if (urlParamsStr.length !== 0) {
    urlParamsStr = `?${urlParamsStr}`.slice(0, -1);
  }

  return axios.request({
    url: `${host}${url}${urlParamsStr}`,
    method,
    headers,
    data: bodyParams
  });
}
