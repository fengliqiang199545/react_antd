import React from 'react'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane
class TabsExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }
  callback=(key)=>{
    console.log(key)
  }
  render () {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    )
  }
}

TabsExp.propTypes = {}

export default TabsExp