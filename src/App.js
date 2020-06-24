import React from 'react';
import {Route,HashRouter,Switch} from 'react-router-dom';
import { Modal } from 'antd';
import Home from './commponent/home'
import Login from './commponent/login'

export default class App extends React.Component{
  componentWillMount(){
    console.log(window.location)
    // 初次进入 如不是login页面 将路径计入缓存 
    if(window.location.hash !== "#/login"){
      localStorage.setItem("pathname",window.location.hash)
    }else{
      localStorage.removeItem("pathname")
    }

    // 是否已登录,未登录跳转至login页面
    if(localStorage.getItem("isLogin")){
      if(window.location.hash === '#/login'){
        window.location.hash = "#/"
      }
    }else{
      if(window.location.hash && window.location.hash !== '#/login' && window.location.hash !== '#/'){
        // 未登录 
        Modal.warning({
          title: '登录异常',
          okText:'确定',
          content: (
            <div>
              <p>登录已失效,请重新登录...</p>
            </div>
          ),
          onOk() {
            window.location.hash = "#/login"
          },
        });
      }else{
        window.location.hash = "#/login"
      }
      
    }
    

    
    
  }
  render(){
        return(
          <HashRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </HashRouter>
        )
    }
}