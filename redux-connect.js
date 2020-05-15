/*
 * @Author: nanyang.yang
 * @Date: 2020-04-13 19:56:40
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-14 07:39:15
 * @Descripttion: redux里面的connect函数，一个大致的框架
 */

function Connect(mapDispatchFromProps, mapDispatchFromState){
    return function wrapper(Component){
        class WrapperComponent {
            render(){
                <Component {...mapStateFromProps() ...mapDispatchFromProps()} />
            }
        }
        return WrapperComponent;
    }
}