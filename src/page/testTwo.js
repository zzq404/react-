import React from 'react'
export default class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
    }
    render() {
        return (
            <div>Test Two页面</div> 
        )
    }
}