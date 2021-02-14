<!--
 * @Author: nanyang.yang
 * @Date: 2020-07-05 10:39:26
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-07-05 10:40:40
 * @Descripttion: 手动去重
--> 
```
function sort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
```