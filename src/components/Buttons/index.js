import React from 'react'
import {Card,Button} from 'antd'
class Index extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
        </Card>
      </div>
    )
  }
}

Index.propTypes = {}

export default Index