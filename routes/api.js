var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const resUtils = require('../utils/res');

const adapter = new FileSync(path.join(__dirname, '../db/tpls.json'));
const adapterSetting = new FileSync(path.join(__dirname, '../db/setting.json'));
const adapterLog = new FileSync(path.join(__dirname, '../db/log.json'));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads/'));
  },
  filename: function (req, file, cb) {
    const filenames = file.originalname.split('.');
    cb(null, filenames[0] + Date.now() + '.' + filenames[1]);
  },
});

var upload = multer({ storage: storage });

function versionToNumber(version) {
  return Number(version.replace(/\D/g, ''));
}

function mergeItems(array, key, value) {
  return array.filter((item) => item[key] === key);
}
// 读取整个列表
router.get('/list', function (req, res, next) {
  const db = low(adapter);
  const rs = db.read().filter({ delete: 0 }).reverse().value();
  res.send(rs);
});

// 获取单个package
router.get('/getPackage', function (req, res, next) {
  const db = low(adapter);
  const rs = db
    .read()
    .find({ delete: 0, name: req.query.name, version: req.query.version })
    .value();
  res.send(resUtils.success(rs));
});

/** 初始化package */
function initPackage(data) {
  return { version: '1.0.0', delete: 0, ...data };
}

var cpUpload = upload.single('file');
router.post('/upload', cpUpload, function (req, res, next) {
  const data = req.file;
  res.send({
    success: true,
    data: {
      url: data.path.substring(data.path.indexOf('uploads\\') - 1),
    },
  });
});
// 新增package
router.post('/savePackage', function (req, res, next) {
  const db = low(adapter);
  const db2 = low(adapterLog);
  const data = req.body;
  const exist = db.read().find({ delete: 0, name: data.name }).value();
  if (exist) {
    // 更新
    if (versionToNumber(exist.version) >= versionToNumber(data.version)) {
      res.send({
        success: false,
        message: '版本号小于等于当前版本',
      });
    } else {
      db.read().find({ delete: 0, name: data.name }).assign(data).write();
      db2
        .read()
        .push({ name: data.name, version: data.version, files: data.files })
        .write();
    }
  } else {
    db.read().push(initPackage(data)).write();
    db2
      .read()
      .push({
        name: data.name,
        version: data.version || '1.0.0',
        files: data.files,
      })
      .write();
  }
  res.send(resUtils.success('操作成功'));
});

//#region 设置
router.get('/getSetting', function (req, res, next) {
  const db = low(adapterSetting);
  const rs = db.read().value();
  res.send(rs);
});

router.post('/updateSetting', function (req, res, next) {
  const db = low(adapterSetting);
  if (req.body) {
    Object.keys(req.body).forEach((item) => {
      db.set(item, req.body[item]).write();
    });
    res.send(resUtils.success());
  }
});
//#endregion

module.exports = router;
