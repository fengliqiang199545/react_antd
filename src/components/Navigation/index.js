import React from 'react'
import { Menu, Icon } from 'antd';
import './index.less'
import MenuList from './../../resources/menuList.js'
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  componentWillMount () {
    const menuNode = this.rendMenu(MenuList);
    this.setState({
      menuNode
    })
  }

  rendMenu=(data)=>{
    return data.map((item)=>{
      if (item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.rendMenu(item.children)}
          </SubMenu>
        )
      }
        return <Menu.Item key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>


    })
  }

  render () {
    return (
      <div>
        <div className="logo">
          <img src="/asset/logo-ant.svg" alt="React"/>
          <h1>管理系统</h1>
        </div>
        <Menu>
          {this.state.menuNode}
        </Menu>
      </div>
    )
  }
}

Navigation.propTypes = {}

export default Navigation