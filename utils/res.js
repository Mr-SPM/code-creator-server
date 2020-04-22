function fail(message) {
  return {
    success: false,
    message,
  };
}

function success(data, message = "操作成功") {
  return {
    success: true,
    message,
    data,
  };
}

module.exports = {
  fail,
  success,
};
