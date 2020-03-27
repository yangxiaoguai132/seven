// 这个是redux源码书写练习
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
        dispatch
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