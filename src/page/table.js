import React from 'react'
import { Table,Button,Modal  } from 'antd';
const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible:false
        };
    }
    handleOk=(e)=>{
      console.log(e)
      this.setState({
        visible: false,
      })
    }
    handleCancel=(e)=>{
      console.log(e)
      this.setState({
        visible: false,
      })
    }
    showModal = ()=>{
      this.setState({
        visible: true,
      })
    }
    componentWillMount(){

    }
    render() {
        return (
            <div>
                <Button style={{marginBottom:20}} type="primary" onClick={this.showModal}>新增用户+</Button>
                <Table dataSource={dataSource} columns={columns}/>
                <Modal
                  title="新增用户"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div> 
        )
    }
}