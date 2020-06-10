import { Post } from "./config"
export function test(params,options){
    let url="java/user-center/notes/getDetail"
    return Post(url,params,options)
}
export function getArtTimeInfo(params,options){
    let url="php/api/artTime/getArtTimeInfo"
    return Post(url,params,options)
}