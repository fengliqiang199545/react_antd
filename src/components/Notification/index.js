import React from 'react'
import { Button, Icon, notification, Select } from 'antd'
const optinos = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
class NodificationExp extends React.Component {

  constructor (props) {
    super(props)

    this.state = {}

  }
  showNO=()=>{
    notification.error({
      message:'notification title',
      description: 'This is the content of the notification',
      icon: <Icon type="smile" style={{color: 'red'}}/>
    })
  }
  render () {
    return (
      <div>
        <Select
          defaultValue='topRight'
          style={{width:120,marginRight:10}}
          onChange={(val)=>{
            notification.config({
              placement:val,
            })
          }}
        >
          {optinos.map(value => <option value={value} key={value}>{value}</option> )}
        </Select>
        <Button type="primary" onClick={this.showNO}>Show Notification</Button>
      </div>
    )
  }
}

NodificationExp.propTypes = {}

export default NodificationExp