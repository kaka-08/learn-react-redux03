import React,{ Component } from "react";
import store from "./Store";
import ReactDOM from "react-dom";
// react-redux 提供的 Provider： 提供包含store的context 
import { Provider } from "react-redux"; 
import TestProvider from "./containers/test-provider";


export default class Root extends Component{
   render(){
     return(
     	 <Provider store={store}>
            <TestProvider />
     	 </Provider>
     	)
   }
}

ReactDOM.render(
    <Root />,
    document.getElementById('container')
)