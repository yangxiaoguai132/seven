/*
 * @Author: nanyang.yang
 * @Date: 2020-04-09 07:58:14
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-09 08:01:23
 * @Descripttion: useEffect的一个简单的内部实现
 */

let _deps; // _deps 记录 useEffect 上一次的 依赖
function useEffect(callback, depArray) {
  const hasNoDeps = !depArray; // 如果 dependencies 不存在
  const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
    : true;
  /* 如果 dependencies 不存在，或者 dependencies 有变化*/
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray;
  }
}