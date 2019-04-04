import React from 'react'
import { Button, Card, Divider, message, Modal, Table } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/Utils'

const dataSource = [
  {
    id:'0',
    userName:'Jack',
    sex:'1',
    state:'1',
    interest:'1',
    birthday:'2000-01-01',
    address:'北京市海淀区奥林匹克公园',
    time:'09:00'
  },
  {
    id: '1',
    userName: 'Tom',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2000-01-01',
    address: '北京市海淀区奥林匹克公园',
    time: '09:00'
  },
  {
    id: '2',
    userName: 'Lily',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2000-01-01',
    address: '北京市海淀区奥林匹克公园',
    time: '09:00'
  },];

const columns = [{
  title:'id',
  key:'id',
  dataIndex:'id'
},
  {
    title: '用户名',
    key: 'userName',
    dataIndex: 'userName'
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
    render(sex){
      return sex ==1 ?'男':'女'
    }
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    render(state){
      let config  = {
        '1':'咸鱼一条',
        '2':'风华浪子',
        '3':'北大才子',
        '4':'百度FE',
        '5':'创业者'
      }
      return config[state];
    }
  },
  {
    title: '爱好',
    key: 'interest',
    dataIndex: 'interest',
    render(abc) {
      let config = {
        '1': '游泳',
        '2': '打篮球',
        '3': '踢足球',
        '4': '跑步',
        '5': '爬山',
        '6': '骑行',
        '7': '桌球',
        '8': '麦霸'
      }
      return config[abc];
    }
  },
  {
    title: '生日',
    key: 'birthday',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    dataIndex: 'time'
  },{
  title:'action',
    key:'action',
   render: (text,record) => <span><a href="javascript:;">Invite{record.userName}</a>
    <Divider type='vertical'/>
    <a href="javascript:;">Delete</a>
  </span>
  }];
class TableExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data:[]
    }

  }

  onRowClick=(record,index)=>{
    let selectKey = [index];
    this.setState({
       selectedRoeKey: selectKey,
      selectedItem: record
    })
  }

  render () {
    const selectedRowKeys = this.state.selectedRoeKey;
    const selectedRowKeys2 = this.state.selectedRoeKey;
    const selectedRowKeys3 = this.state.selectedRoeKey;

    const rowSelectConfig = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckedSelectConfig = {
      type: 'checkbox',
      selectedRowKeys2,
      onChange: (selectedRowKeys2,selectedRow)=>{
        this.setState({
          selectedRowKeys2,
          selectedRow
        })
      }
    }

    const pageTable = {
      type: 'checkbox',
      selectedRowKeys3,

    }
    return (
      <div>

      <Card>
        <Table dataSource={dataSource} columns={columns}/>
      </Card>

        <Card title='动态渲染数据'>
          <Table dataSource={this.state.data} columns={columns}/>
        </Card>
        <Card title='动态渲染数据+单选按钮'>
          <Table rowSelection={rowSelectConfig}
                 onRow={(record,index)=>{
                   return{
                     onClick:()=>{
                       this.onRowClick(record,index)
                     }
                   }


                 }}
                 dataSource={this.state.data} columns={columns}/>
        </Card>

        <Card title='动态渲染数据+复选按钮'>
          <div>
            <Button onClick={this.handleDelete}>Delete</Button>
          </div>
          <Table rowSelection={rowCheckedSelectConfig}

                 dataSource={this.state.data} columns={columns}/>
        </Card>
        <Card title='动态渲染数据+复选按钮+分页'>
          <div>
            <Button onClick={this.handleDelete}>Delete</Button>
          </div>
          <Table rowSelection={rowCheckedSelectConfig}
              pagination={Utils.pagination()}
                 dataSource={this.state.data} columns={columns}/>
        </Card>
      </div>


    )
  }

  handleDelete=()=>{
    let rows = this.state.selectedRow;
    let ids = [];
    rows.map((item)=>{
      ids.push(item.id)
    })

    Modal.confirm({
      title: 'tishi',
      content : `are u sure delete this data??  ${ids.join(',')}`,
      onOk:()=>{
        message.success('Delete Success!!')
      }
    })
  }
  componentDidMount () {
    let baseURL = 'https://easy-mock.com/mock/5ca55b7ddcc23b30ca628b76/tableList/';
    axios.ajax( {
      url: 'getAll',
      data:{
        param:{

        }
      },
      status:''
      // isShowLoading: false
    }).then((res)=>{
      console.log(JSON.stringify(res))
      this.setState({
        data: res.result
      })

    })
  }


}

TableExp.propTypes = {}

export default TableExp