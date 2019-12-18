import Ajax from "./Ajax.js";

export default {
    "fileCreate": async function (title) {
        let res = await Ajax("POST", "/file/", { body: { title: title } });
        return [res.id, res.qiniu_upload_token];
    },
	"fileListGet": async function () {
		let res = await Ajax("GET", "/file/", {});
        return res.results;
	},
    "fileUpdateIsUploadQiniu": async function (fileID) {
        await Ajax("PATCH", `/file/${fileID}/`, { body: { is_upload_qiniu: true } })
    }
};