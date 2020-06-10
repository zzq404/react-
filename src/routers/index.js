// import App from '../App'
// import Test from '../page/test'
// import Test2 from '../page/testTwo'
import React from 'react';
const Test = React.lazy(() => import('../page/test'));
const Test2 = React.lazy(() => import('../page/testTwo'));
const routers=[
    {
        exact:true,
        name:'系统首页',
        icon:'RocketOutlined',
        path:'/',
        show:true,
        component:Test
    },
    {
        exact:false,
        name:'测试',
        path:'/test2',
        show:true,
        component:Test2
    },
    {
        exact:false,
        name:'测试3',
        path:'/test3',
        show:false,
        component:Test2
    }
]
export default routers