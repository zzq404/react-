import {lazyComponent} from '../untils/importPath.js'
/*
    exact - true时表示严格匹配，为false时为正常匹配。
    name - 当前路由名称
    icon - 当前路由图标
    path - 当前路由地址
    show - 侧边栏是否显示
    component - 组件地址 从page开始 例：page/home
    child - 当前路由下的子路由
*/
const Routers=[
    {
        exact:true,
        name:'系统首页',
        icon:'RocketOutlined',
        path:'/',
        show:true,
        component:'page/home'
    },
    {
        exact:false,
        name:'表格',
        path:'/table',
        show:true,
        component:'page/table',
        child:[
            {
                exact:false,
                name:'测试',
                path:'/test2',
                show:false,
                component:'page/test',
            }
        ]
    },
    {
        exact:false,
        name:'测试3',
        path:'/test3',
        show:true,
        component:'page/testTwo'
    }
]
fillterCom(Routers)

function fillterCom(routers){
    routers.map((item,index) => {
        if(item.children){
            fillterCom(item.children)
        }else{
            if(item.component){
                item.component = lazyComponent(item.component)
            }
        }
        
    })
}

export default Routers