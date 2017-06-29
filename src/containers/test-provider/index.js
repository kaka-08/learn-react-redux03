import React,{Component} from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";


class TestProvider extends Component{
   constructor(props) {
   	//这里由于provider是自己写的，所以tontext参数需要传过来
    super(props);
    this.state = {
      value:""
     };
    }

   componentDidMount(){
   	const name = this.props.name || "wahaha";
   	this.setState({
   		value:name
   	})
   }

   render(){
   	  const name = this.state.value;
   	  return (
          <div>
             welcome to Beijing,{name} .
          </div>
         )
   }

}

//字面意思： 把state递给props,这里的state是store.getState()
function mapStateToProps(state) {
  return state;
}

//字面意思： 把dispatch递给props
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}


//这两个函数执行完成之后： props里面就有了dispatch和state



// connect 干了两件事儿： #1 把store上的状态转化为内层傻瓜组件的props; 
// #2 把内层傻瓜组件中的用户动作转化为派送给store的动作  
// 总结： 内层傻瓜对象的输入，内层傻瓜对象的输出，就是把傻瓜组件的状态和store紧密连接起来。

export default connect(mapStateToProps,mapDispatchToProps)(TestProvider);