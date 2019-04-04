import React from 'react'
import {Tabs,Icon,Radio} from 'antd'
const TabPane = Tabs.TabPane
class TabsExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mode:'top'
    }

  }
  callback=(key)=>{
    console.log(key)
  }

  handleModeChange=(e)=>{
    const mode1 = e.target.value;
    this.setState({
      mode:mode1
    })
  }
  render () {
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange}  value={this.state.mode}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="2" onChange={this.callback}
          tabPosition={this.state.mode}
              type="card"
        >
          <TabPane tab={<span><Icon type="apple"/>Tab 1</span>} key="1" disabled>Content of Tab 1</TabPane>
          <TabPane tab="tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="tab 3" key="3">Content of Tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
          <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
          <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
          <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
          <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
          <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
          <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
          <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
        </Tabs>
      </div>
    )
  }
}

TabsExp.propTypes = {}

export default TabsExp