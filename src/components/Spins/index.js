import React from 'react'
import { Spin,Alert ,Switch} from 'antd'

class SpinExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
    }

  }

  toggle=(value)=>{
    this.setState({
      loading: value
    })
  }
  render () {
    return (
      <div>
        <Spin size="large"/>
        <br/>
        <Spin tip="Loading..." spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{marginTop: 16}}>
          <Switch checked={this.state.loading} onChange={this.toggle}/>
        </div>
      </div>
    )
  }
}

SpinExp.propTypes = {}

export default SpinExp