var contextPath = 'http://localhost:8088/';
var userRequest = {
  toHome: function () {
    location.href = contextPath;
  },
  sendSms: function (phone) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/sms',
      data: {
        phone: phone
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('发送成功');
        } else {
          alert(data.message);
        }
      }
    });
  },
  register: function (phone, password, smsCode) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/register',
      data: {
        phone: phone,
        password: password,
        smsCode: smsCode
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('注册成功');
        } else {
          alert(data.message);
        }
      }
    });
  },
  isLogged: function (callBack) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/isLogged',
      data: {},
      dataType: 'json',
      success: callBack
    });
  },
  login: function (phone, password) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/login',
      data: {
        phone: phone,
        password: password
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('登录成功');
        } else {
          alert(data.message);
        }
      }
    });
  },
  password: function (phone, password, smsCode) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/password',
      data: {
        phone: phone,
        password: password,
        smsCode: smsCode
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('修改成功');
        } else {
          alert(data.message);
        }
      }
    });
  },
  phone: function (phone, password, smsCode) { // 修改手机号
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/phone',
      data: {
        phone: phone,
        password: password,
        smsCode: smsCode
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('修改成功');
        } else {
          alert(data.message);
        }
      }
    });
  },
  quit: function () {
    $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'user/login/quit',
      data: {
        id: id
      },
      dataType: 'json',
      success: function (data) {
        if (data.success) {
          alert('退出成功');
        } else {
          alert(data.message);
        }
      }
    });
  }
};

var fileRequest = {
  toDetail: function (id) {
    location.href = contextPath + "printDetail.html?id=" + id;
  },
  uploadDoc: function (form) {
    form.ajaxSubmit({
      type: "POST",
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'file/upload/doc',
      dataType: "json",
      success: function (data) {
        if (data.success) {
          fileRequest.toDetail(data.data);
        } else {
          alert(data.message);
        }
      },
      error: function(data) {
        alert('上传失败，文件过大或服务器异常');
      }
    });
    form.resetForm();
  },
  convert: function (id) {
    $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      url: contextPath + 'file/convert',
      data: {
        id: id
      },
      dataType: 'json',
      success: function (data) {
        console.info(data);
      }
    });
  }
};

