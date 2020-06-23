import React,{ Suspense } from 'react';
import {BrowserRouter as Router , Route,Link,HashRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb,Dropdown,Spin } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import './home.css'
import Logo from "../logo.svg"
import * as Icon from '@ant-design/icons';
import Routers from '../routers'

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

let UNLISTEN;
export default class Home extends React.Component{
  state = {
      content:'',
      collapsed: false,
      pathname:'/'
  };
  componentWillMount() {
    // 是否已登录,未登录跳转至login页面
    if(!localStorage.getItem("isLogin")){
      window.location.hash = "#/login"
    }
    this.setState({
      pathname: window.location.hash && window.location.hash.split("#")[1]
    })
  }
  componentDidMount(){
    // UNLISTEN变量用来接收解绑函数
    UNLISTEN = this.props.history.listen(route => {
      this.setState({
        pathname:route.pathname
      })
    });
  }
  componentWillUnmount(){
    UNLISTEN && UNLISTEN(); // 执行解绑
  }
  onChange = (e)=>{
    this.setState({
      content:e.target.value
    })
    // this.setState({
    //   content:e.target.value
    // },()=>{
    //   console.log(this.state.content)
    // })
  }
  // 渲染侧边栏
  fillterSidebar=()=>{
    return Routers.map((item,index)=>{
      if(item.show){
        if(item.child && item.child.length > 0 && this.isDrop(item.child)){
          return (
            <SubMenu key={item.path} icon={ React.createElement(Icon['UserOutlined']) } title={item.name}>
              {
                item.child.map((ele,i)=>{
                  if(ele.show){
                    return ele.icon ?<Menu.Item key={ele.path} icon={ React.createElement(Icon[ele.icon]) }><Link to={ele.path}>{ele.name}</Link></Menu.Item> : <Menu.Item key={ele.path}><Link to={ele.path}>{ele.name}</Link></Menu.Item>
                  }
                })
              }
            </SubMenu>
          )
        }else{
          return item.icon ?<Menu.Item key={item.path} icon={ React.createElement(Icon[item.icon]) }><Link to={item.path}>{item.name}</Link></Menu.Item> : <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
        }
      }
    })
  }
  // 判断当前侧边栏下的子级 是否显示
  isDrop=(children)=>{
    return children.some((ele)=>{
      return ele.show == true
    })
  }
  outLogin=()=>{
    localStorage.removeItem("isLogin")
    window.location.hash = "#/login"
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
        return(
        <Spin spinning={false}>
          <HashRouter>
            <Layout id="body" >
              <Header className="header">
                <div className="logo">
                  <img onClick={this.toggle} className="logoImg" src={Logo} alt=""/>
                  <span className="title">瞎写的后台</span>
                </div>
                <div className="userInfo">
                  {/* <Avatar size="large" style={{backgroundColor: '#87d068'}} icon={ React.createElement(Icon['UserOutlined']) }/> */}
                  <Dropdown 
                  overlay={<Menu>
                            <Menu.Item icon={<ExportOutlined />} onClick={this.outLogin} style={{color:'#f5222d'}}>退出登录</Menu.Item>
                          </Menu>} placement="bottomCenter">
                    <span className="ant-dropdown-link">郑铁柱 { React.createElement(Icon['DownOutlined'])}</span>
                  </Dropdown>
                </div>
              </Header>
              <Layout>
                <Sider width={210} collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="site-layout-background">
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.state.pathname]}
                    selectedKeys={[this.state.pathname]}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    {this.fillterSidebar()}
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 12px 12px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                    }}
                  >
                    
                    {Routers.map((item,index)=>{
                      return(
                        <Suspense key={index} fallback={<Spin size="large"></Spin>}>
                          <Route exact={item.exact} path={item.path} component={item.component} />
                        </Suspense>
                      )
                    })}

                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </HashRouter>
        </Spin>
        )
    }
}