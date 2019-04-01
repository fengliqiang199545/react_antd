import React from 'react'
import { Button, Card ,message} from 'antd'

class Messages extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }
  showMessage=()=>{
    message.success("显示成功！");
  }
  render () {
    return (
      <div>
        <Card title="Message 组件">
          <Button onClick={this.showMessage}>Show Message</Button>
        </Card>
      </div>
    )
  }
}

Messages.propTypes = {}

export default Messages