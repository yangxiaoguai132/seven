/*
 * @Author: nanyang.yang
 * @Date: 2020-03-26 15:07:37
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-08 14:36:49
 * @Descripttion: 这个是redux源码书写练习
 */
let createStore = (reducer) => {
    let state;
    let listeners = [];
    let dispatch = (action) => {
        state = reducer(action);
        listeners.forEach((l) => l());
    };
    let getState = () => {
        return state;
    };
    let subscribe = (listen) => {
        listeners.push(listen);
    };
    dispatch();
    return {
        getState,
        dispatch,
        subscribe
    }
};

let combineReducers=(renducers)=>{
    //传入一个renducers管理组，返回的是一个renducer
    return function(state={}, action={}){
        let newState={};
        for(var attr in renducers){
            newState[attr]=renducers[attr](state[attr],action)

        }
        return newState;
    }
}
export {createStore,combineReducers};