import ajax from "./Ajax.js";

export default {
  "fileCreate": async function (title) {
    let res = await ajax("POST", "/file/", { bodyParams: { title: title } });
    return [res.data.id, res.data.qiniu_upload_token];
  },
	"fileListGet": async function () {
		let res = await ajax("GET", "/file/", {});
    return res.data;
	},
  "fileUpdateIsUploadQiniu": async function (fileID) {
    await ajax("PATCH", `/file/${fileID}/`, { bodyParams: { is_upload_qiniu: true } })
  }
};