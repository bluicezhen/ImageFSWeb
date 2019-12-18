const host = 'http://localhost:8000';

/**
 * Send HTTP 
 * 
 * @param {string} method
 * @param {string} url 
 * @param {string} bodyParams 
 * @return {fetch}
 */
export default async function (method, url, { body = null }) {
    let fetchParams = {
        method: method,
        headers: { "content-type": "application/json" },
    }
    
    if (body !== null) {
        fetchParams["body"] = body
    }
    
    let res = await fetch(`${host}${url}`, );
    let data = res.json()
    return data
}