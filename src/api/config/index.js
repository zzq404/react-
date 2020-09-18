
import {baseUrl} from '../baseUrl'
import { message } from 'antd';
export function Post(url,params,options){
    // 请求头信息
    let defaultHeaders = {
        'Content-Type': 'application/json;charset=utf-8;',
        'Accept-Charset': 'utf-8',
        'art-client-type': localStorage.getItem('art-client-type') ? localStorage.getItem('art-client-type') : 1,
        'art-user-token': localStorage.getItem('art-user-token') ? localStorage.getItem('art-user-token') : '',
        // 'Content-Type': 'application/json',
        'art-version': '9.9.9'
    };
    let newHeaders = {...defaultHeaders, ...options};
    return new Promise(function (resolve, reject) {
        fetch(baseUrl+url,{
            body: JSON.stringify(params), // 请求参数
            headers: newHeaders, // 请求Header头
            method: 'POST', // 请求方式  *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, cors, *same-origin
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // *client, no-referrer,
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, same-origin *omit
        }).then(res =>{
            if(res.ok && res.status){
                FetchFun(res.json()).then(response=>{
                    if(response.code === 600){
                        resolve(response.data)
                    }else{
                        message.error(response.message);
                    }
                })
                
            }
        }).catch(err =>{
            message.error(err);
            reject(err)
        })
  })
}
export function Get(url,params,options){
    console.log("请求参数",JSON.stringify(params))

    // 请求头信息
    let defaultHeaders = {
        'Content-Type': 'application/json;charset=utf-8;',
        'Accept-Charset': 'utf-8',
        'art-client-type': localStorage.getItem('art-client-type') ? localStorage.getItem('art-client-type') : 1,
        'art-user-token': localStorage.getItem('art-user-token') ? localStorage.getItem('art-user-token') : '',
        // 'Content-Type': 'application/json',
        'art-version': '9.9.9'
    };
    let newHeaders = {...defaultHeaders, ...options};
    return new Promise(function (resolve, reject) {
        fetch(baseUrl+url,{
            body: JSON.stringify(params), // 请求参数
            headers: newHeaders, // 请求Header头
            method: 'GET', // 请求方式  *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, cors, *same-origin
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // *client, no-referrer,
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, same-origin *omit
        }).then(res =>{
            if(res.ok && res.status){
                FetchFun(res.json()).then(response=>{
                    if(response.code === 600){
                        resolve(response.data)
                    }else{
                        console.log("异常",response.message)
                    }
                })
                
            }
        }).catch(err =>{
            reject(err)
        })
  })
}
function FetchFun(request){
    return new Promise(function (resolve, reject) {
        resolve(request)
    })
}