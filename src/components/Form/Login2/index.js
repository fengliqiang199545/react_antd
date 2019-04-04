import React from 'react'
import { Card, Form, Button, Checkbox, Input,message } from 'antd'
const FormItem = Form.Item;

class Login2 extends React.Component {

  constructor (props) {
    super(props)

    this.state = {}

  }

  handleSubmit=()=>{
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields(((errors, values) => {
      if (!errors){
        message.success(`${userInfo.userName} login success!! current password is ${userInfo.password}` )
      }
    }))

  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Card title="Login2 Form">
          <Form style={{width:'30%'}}>
            <FormItem>
              {
                getFieldDecorator('userName',{
                  initialValue:'fengliqinag',
                  rules:[{
                    required:true,
                    message:'username can not be empty!!'
                  }]
                })(<Input placeholder="please input the username"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password',{
                  initialValue: '199545',
                  rules: []
              })(<Input placeholder="please input the password"/>)
              }
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit' onClick={this.handleSubmit}>Login</Button>
            </FormItem>

            <FormItem>
              {getFieldDecorator('remember_me',{
                valuePropName:'checked',
                initialValue: false
              })(<Checkbox>
                  remember me!
              </Checkbox>)}

              <a href="#" style={{float: 'right'}}>forget the password</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

Login2.propTypes = {}

export default Form.create()(Login2)