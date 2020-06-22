import React from 'react'
import { Card,Avatar } from 'antd';
const { Meta } = Card;
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentWillMount(){

    }
    render() {
        return (
            <div>
                <Card style={{ width: 400 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar size={32} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="欢迎您登录"
                  />
                </Card>
            </div> 
        )
    }
}