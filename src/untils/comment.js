const moment = require('moment')
console.log(moment)
export function timeFormat(time,pattern = 'YYYY-MM-DD HH:mm:ss'){
   if(time){
    return moment(Number(time)).format(pattern);
   }else{
       return null
   }
}