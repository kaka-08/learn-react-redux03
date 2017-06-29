import * as ActionTypes from "./constants";

/**
* reminber : reducer里面切忌进行任何逻辑操作
* reducer是一个纯函数，纯函数不应该产生任何的副作用
*/

//定义reducer的初始值
const initialValues = {
	"shape":"square"
};
export default (state,action) =>{
    switch(action.type){
     case ActionTypes.INCREMENT:
	     return Object.assign(initialValues,state,{[action.data.counterCaption]:state[action.data.counterCaption]+1});
     case ActionTypes.DECREMENT:
	     return Object.assign(initialValues,state,action.data);
     default:
    	 return Object.assign(initialValues,state);
   }
}