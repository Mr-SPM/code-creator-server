// 重置数据库，并删除所有模版文件，请谨慎使用。
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
function resetDatebase() {
  try {
    fs.writeFileSync(path.join(__dirname, "db/tpls.json"), "[]");
    fs.writeFileSync(path.join(__dirname, "db/log.json"), "[]");
    fs.writeFileSync(
      path.join(__dirname, "db/setting.json"),
      `{
    "prefix": "{{",
    "content": "[A-Za-z0-9_]",
    "suffix": "}}"
}`
    );
    console.log("数据库重置成功！");
  } catch (e) {
    console.log("数据库不存在，请执行初始化");
  }
}

function del(path) {
  return new Promise((resolve) => rimraf(path, resolve));
}

function deleteUploads() {
  const tmpPath = path.resolve(__dirname, "./public/uploads/*");
  del(tmpPath).then(
    () => {
      console.log("已删除所有模版文件!");
    },
    (error) => {
      console.log("删除模版文件失败，请手动删除 public/uploads目录下所有文件!");
    }
  );
}

function main() {
  resetDatebase();
  deleteUploads();
}

main();
