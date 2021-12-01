  /**
   * 系统版本
   */
  const getOsInfo = () => {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = 'Unknown';
    var version = 'Unknown';
    if (userAgent.indexOf('win') > -1) {
      name = 'Windows';
      if (userAgent.indexOf('windows nt 5.0') > -1) {
        version = 'Windows 2000';
      } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
        version = 'Windows XP';
      } else if (userAgent.indexOf('windows nt 6.0') > -1) {
        version = 'Windows Vista';
      } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
        version = 'Windows 7';
      } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
        version = 'Windows 8';
      } else if (userAgent.indexOf('windows nt 6.3') > -1) {
        version = 'Windows 8.1';
      } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
        version = 'Windows 10';
      } else {
        version = 'Unknown';
      }
    } else if (userAgent.indexOf('iphone') > -1) {
      name = 'Iphone';
    } else if (userAgent.indexOf('mac') > -1) {
      name = 'Mac';
    } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
      name = 'Unix';
    } else if (userAgent.indexOf('linux') > -1) {
      if (userAgent.indexOf('android') > -1) {
        name = 'Android';
      } else {
        name = 'Linux';
      }
    } else {
      name = 'Unknown';
    }
    return { name, version };
  }
  /**
   * 浏览器版本
   */
  const getExplore = () => {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
      (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
          (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
              (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (Sys.ie) return { BrowserName:'IE' ,BrowserVersion: Sys.ie }
    if (Sys.edge) return { BrowserName:'EDGE' ,BrowserVersion: Sys.edge }
    if (Sys.firefox) return { BrowserName:'Firefox' ,BrowserVersion: Sys.firefox }
    if (Sys.chrome) return { BrowserName:'Chrome' ,BrowserVersion: Sys.chrome }
    if (Sys.opera) return { BrowserName:'Opera' ,BrowserVersion: Sys.opera }
    if (Sys.safari) return { BrowserName:'Safari' ,BrowserVersion: Sys.safari }
    return { BrowserName:'未知' ,BrowserVersion: '未知' }
  }
  const getExploreName = () => {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      return 'Opera';
    }
    else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
      return 'IE';
    }
    else if (userAgent.indexOf("Edge") > -1) {
      return 'Edge';
    }
    else if (userAgent.indexOf("Firefox") > -1) {
      return 'Firefox';
    }
    else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1) {
      return 'Safari';
    }
    else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
      return 'Chrome';
    }
    else if (!!window.ActiveXObject || "ActiveXObject" in window) {
      return 'IE>=11';
    }
    else {
      return 'Unkonwn';
    }
  }
  /**
   * 电量 & 充电状态
   */
  const PowerWithStateOfCharge = (cb) => {
    return navigator.getBattery().then(function(battery) {
      cb(battery)
    })
  }
export default {
  getOsInfo,
  getExplore,
  getExploreName,
  PowerWithStateOfCharge
}