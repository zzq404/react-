import React from 'react'
import { test,getArtTimeInfo } from "../api/ZZQ"

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content:props.location.query ? props.location.query.content : '暂无最新消息'
        };
    }
    goNext(value){
        this.props.history.push({pathname:'/test2',query:{content:value}})
    }
    componentWillMount(){
        // getArtTimeInfo({id:5}).then(res=>{
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div onClick={this.goNext.bind(this,123)}>{this.state.content}</div> 
        )
    }
}