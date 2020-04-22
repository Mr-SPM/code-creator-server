var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(path.join(process.cwd(), '/db/tpls.json'));
const adapterSetting = new FileSync(
  path.join(process.cwd(), '/db/setting.json')
);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
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
// 读取整个列表
router.get('/list', function (req, res, next) {
  const db = low(adapter);
  const rs = db.read().filter({ delete: 0 }).value();
  console.log(rs);
  res.send(rs);
});

// 获取单个package
router.get('/getPackage', function (req, res, next) {
  const db = low(adapter);
  const rs = db.read().filter({ delete: 0, name: req.query.name }).value();
  console.log(rs);
  res.send(rs);
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
      url: data.path,
    }
  });
});
// 新增package
var cpUpload = upload.array('file');
router.post('/savePackage', cpUpload, function (req, res, next) {
  const db = low(adapter);
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
      db.read()
        .find({ delete: 0, name: data.name })
        .update((r) => ({ ...r, ...data }))
        .write();
    }
  } else {
    db.read().push(initPackage(data)).write();
  }
  res.send('操作成功');
});

//#region 设置
router.get('/getSetting', function (req, res, next) {
  const db = low(adapterSetting);
  const rs = db.read().value();
  res.send(rs);
});

router.post('/updateSetting', function (req, res, next) {
  const db = low(adapterSetting);
  if (req.body.rule) {
    const rs = db.set('rule', req.body.rule).write();
    res.send({
      message: '操作成功',
    });
  }
});
//#endregion

module.exports = router;
