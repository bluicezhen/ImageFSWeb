import Ajax from "./Ajax.js";

export default {
    "fileCreate": async function (title) {
        let res = await Ajax("POST", "/file/", { body: { title: title } });
        return [res.id, res.qiniu_upload_token];
    },
    "fileUpdateIsUploadQiniu": async function (fileID) {
        await Ajax("PATCH", `/file/${fileID}/`, { body: { is_upload_qiniu: true } })
    }
};