import React from 'react'
import { Button,Card,Modal } from 'antd'

class ModalExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible1: false,
      visible2: false,
      visible3: false
    }

  }

  handleOK=(type)=>{
    this.setState({
      [type]:false
    })
  }
  handleCancel=(type)=>{
    this.setState({
      [type]:false
    })
  }

  showVis=(type)=>{
    this.setState({
      [type]:true
    })
  }
  render () {
    return (
      <div>
        <Card title="Modal框" className="card-wrap">
        <Button onClick={()=>this.showVis("visible1")}>Open</Button>
        <Button onClick={()=>this.showVis("visible1")}>自定义页脚</Button>
        <Button onClick={()=>this.showVis("visible1")}>something</Button>
        <Button onClick={()=>this.showVis("visible1")}>Open</Button>
        </Card>
        <Modal
          title="FirstModal"
          visible={this.state.visible1}
          onOk={()=>this.handleOK("visible1")}
          onCancel={()=>this.handleCancel("visible1")}
        >
        <p>This is the First Modal!!</p>
        <p>This is the First Modal!!</p>
        <p>This is the First Modal!!</p>
        </Modal>
      </div>
    )
  }
}

ModalExp.propTypes = {}

export default ModalExp