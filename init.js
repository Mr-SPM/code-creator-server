// 初始化
const fs = require("fs");
const path = require("path");
function createDatebase() {
  try {
    fs.mkdirSync(path.join(__dirname, "db"));
    fs.writeFileSync(path.join(__dirname, "db/tpl.json"), "[]");
    fs.writeFileSync(path.join(__dirname, "db/log.json"), "[]");
    fs.writeFileSync(
      path.join(__dirname, "db/setting.json"),
      `{
    "prefix": "{{",
    "content": "[A-Za-z0-9_]",
    "suffix": "}}"
}`
    );
    console.log("数据库创建成功！");
  } catch (e) {
    console.log("数据库已存在，无需初始化");
  }
}

function createUploads() {
  fs.mkdir(
    path.join(__dirname, "/public/uploads"),
    (error) => {
      if (error) {
        console.log('上传文件夹已存在');
      } else {
        console.log("上传文件夹创建成功");
      }
    }
  );
}

function main() {
  createDatebase();
  createUploads();
}

main();
