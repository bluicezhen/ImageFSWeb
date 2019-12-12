const host = 'http://localhost:8000';

/**
 * Send HTTP 
 * 
 * @param {string} method
 * @param {string} url 
 * @param {string} bodyParams 
 * @return {fetch}
 */
export default async function (method, url, { body = {} }) {
    let res = await fetch(`${host}${url}`, {
        method: method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
    });
    let data = res.json()
    return data
}