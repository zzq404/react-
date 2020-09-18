import React from 'react'
import { Card,Avatar } from 'antd';
import {timeFormat} from '../untils/comment'
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
                      style={{maxHeight:200}}
                      alt="example"
                      src="https://fableedu-dev.oss-cn-beijing.aliyuncs.com/app/admin_component/image/2020/06/24/art_1592993152_498887_1080_1350.jpg"
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar size={32} src="https://fableedu-dev.oss-cn-beijing.aliyuncs.com/app/admin_component/image/2020/06/24/art_1592993129_149602_1080_1080.jpg" />}
                    title={JSON.parse(localStorage.getItem('basic')).username}
                    description={`登录时间 ${timeFormat(localStorage.getItem('loginTime'))}`}
                  />
                </Card>
            </div> 
        )
    }
}