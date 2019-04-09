import React from 'react'
import { Table, Card, Divider } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/Utils'


class proTable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      Idorder:'',
      data:[]
    }

  }
  params={
    page:1
  }
  request=()=>{
    let baseURL = 'https://easy-mock.com/mock/5ca55b7ddcc23b30ca628b76/tableList/';
    axios.ajax( {
      url: 'getAll',
      data:{
        params:{
          page:this.params.page
        }
      },
      // status:''
      // isShowLoading: false
    }).then((res)=>{
      let _this = this;
      console.log(JSON.stringify(res));
      if (res.code == 0){
        res.result.list.map((item,index)=>{
          item.key = index;
        })
      }
      this.setState({
        data: res.result.list,
      })

    })
  }
  componentDidMount () {
    this.request();
  }
  render () {
    const columns = [{
      title:'id',
      width:50,
      sorter:(a,b)=>{
        return a.id - b.id
      },
      sortOrder:this.state.Idorder,
      key:'id',
      align:'center',
      dataIndex:'id'
    },
      {
        title: '用户名',
        width:100,
        align:'center',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width:70,
        dataIndex: 'sex',
        render(sex){
          return sex ==1 ?'男':'女'
        }
      },
      {
        title: '状态',
        key: 'state',
        width:100,
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
        width:80,
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
        width:120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width:120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        width:100,
        key: 'time',
        dataIndex: 'time'
      },{
        title:'action',
        key:'action',
        width:120,
        render: (text,record) => <span><a href="javascript:;">Invite{record.userName}</a>
    <Divider type='vertical'/>
    <a href="javascript:;">Delete</a>
  </span>
      }];
    return (
      <div>
        <Card title='固定表头'>
          <Table columns={columns} dataSource={this.state.data}
          pagination={false} scroll={{y:300}}
          bordered onChange={this.handleIdSort}
          />
        </Card>
      </div>
    )
  }

  handleIdSort =(pagination, filters,sorter)=> {
    alert(sorter.order)
    this.setState({
      Idorder:sorter.order
    })
  }
}

proTable.propTypes = {}

export default proTable