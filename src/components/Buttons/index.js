import React from 'react'
import {Card,Button} from 'antd'
import './index.less'
class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary" loading>primary</Button>
          <Button>Default</Button>
          <Button type="dashed" size="large">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>disabled</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="delete" ghost="true">删除</Button>
          <Button icon="edit">编辑</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="download">下载</Button>
        </Card>
      </div>
    )
  }
}

Index.propTypes = {}

export default Index