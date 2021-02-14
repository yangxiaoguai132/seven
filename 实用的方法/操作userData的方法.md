```
<script type="text/javascript">
    var UserData = {
        userData: null,
        name: document.location.hostname,

        init: function() {
            if (!this.userData) {
                try {
                    this.userData = document.createElement("INPUT");//创建HTML标签
                    this.userData.type = "hidden";
                    this.userData.style.display = "none";
                    this.userData.addBehavior("#default#userData");//给HTML标签添加样式behavior:url(‘#default#userData’)或者js给HTML对象设置.addBehavior ("#default#userData")
                    document.body.appendChild(this.userData);
                    var expires = new Date();
                    expires.setDate(expires.getDate() + 365);
                    this.userData.expires = expires.toUTCString();//设置数据过期时间
                } catch (e) {
                    return false;
                }
            }
            return true;
        },

        setItem: function(key, value) {
            if (this.init()) {
                this.userData.load(this.name);//载入UserData文件
                this.userData.setAttribute(key, value);//存入数据
                this.userData.save(this.name);
            }
        },

        getItem: function(key) {
            if (this.init()) {
                this.userData.load(this.name);
                return this.userData.getAttribute(key)//读取数据
            }
        },

        remove: function(key) {
            if (this.init()) {
                this.userData.load(this.name);
                this.userData.removeAttribute(key);
                this.userData.save(this.name);
            }
        }
    };
</script>
```