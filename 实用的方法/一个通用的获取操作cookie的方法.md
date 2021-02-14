##### 函数形式
```
function cookieUtil (name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); 
		}
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
	}
};
```
##### 也可以写一个包装类
```
window.Cookie = {
	originalString : document.cookie,
    read: function() {
        this.originalString = document.cookie;
    },
    _getCookieHash: function() {
        var cookieArr = this.originalString.split(";");
        var cookieHash = {};
        for (var i=0; i<cookieArr.length; i++) {
            if (cookieArr[i].indexOf("=")!=-1)
                cookieHash[cookieArr[i].split("=")[0].replace(/(^\s*)/g, "").replace(/(\s*$)/g, "")]=unescape(cookieArr[i].split("=")[1]).replace(/(^\s*)/g, "").replace(/(\s*$)/g, ""); 
        }
        return cookieHash;
    }, 
    setCookie: function(sName, sValue, dExpire, sDomain, sPath){
        var _cookieString = sName + "=" + escape(sValue); 
        if (dExpire)   _cookieString += "; expires=" + dExpire.toGMTString();
        if (sDomain)   _cookieString += "; domain=" + sDomain;
        if (sPath) 		_cookieString += "; path=" + sPath;
        document.cookie = _cookieString;
        this.originalString = document.cookie;
        this.values = this._getCookieHash();
    },
    deleteCookie: function(sName, sDomain, sPath) {
        this.setCookie(sName, '', new Date(1), sDomain, sPath);
    },
    refresh : function() {
        this.read();
        Cookie.values = Cookie._getCookieHash();
    }
};
Cookie.values = Cookie._getCookieHash();
```