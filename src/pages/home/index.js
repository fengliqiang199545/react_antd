import React from 'react'
import './index.less'
class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div className="home-wrap">
        欢迎使用测试管理系统
      </div>
    )
  }
}

Home.propTypes = {}

export default Home