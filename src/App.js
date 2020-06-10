import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Modal } from 'antd';
import Home from './commponent/home'
import Login from './commponent/login'
export default class App extends React.Component{
  componentWillMount(){
    // console.log(window.location)
    // 初次进入 如不是login页面 将路径计入缓存 
    if(window.location.pathname !== "/login"){
      localStorage.setItem("pathname",window.location.pathname)
    }else{
      localStorage.removeItem("pathname")
    }
    // 是否已登录,未登录跳转至login页面
    if(localStorage.getItem("isLogin")){
      if(window.location.pathname === '/login'){
        window.location.pathname = "/"
      }
    }else{
      if(window.location.pathname !== "/login"){
        Modal.warning({
          title: '登录异常',
          okText:'确定',
          content: (
            <div>
              <p>登录已失效,请重新登录...</p>
            </div>
          ),
          onOk() {
            window.location.pathname = "login"
          },
        });
      }
    }
    
  }
  render(){
        return(
          <Router>
            {
              window.location.pathname !== "/login" && localStorage.getItem("isLogin") ? <Route path="/" component={Home}></Route> : <Route path="/login" component={Login}></Route>
            }
          </Router>
        )
    }
}