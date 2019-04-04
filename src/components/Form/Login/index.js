import React from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd';

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class HorizontalLoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  componentDidMount () {
    //To disabled submit button at the beginning
    this.props.form.validateFields();
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err,value)=>{
      if (!err){
        console.log('Received values of form : ',value);
      }
    })
  }
  render () {
    const {getFieldDecorator,getFieldsError,getFieldError,isFieldTouched} = this.props.form;
    //only show error after a field is touched
    const userNameError = isFieldTouched('userName')&&getFieldError('userName');
    const passwordError = isFieldTouched('password')&&getFieldError('password');

    return (
      <div>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError? 'error':''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName',{rule:[{required:true,message:'please input the username!'}]})(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>

          )}
        </Form.Item>

        <Form.Item
          validateStatus={passwordError?'error':''}
          help={passwordError || ''}

        >
          {getFieldDecorator('password',{rule: [{required: true,message:'please input the password!'}]})(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>

          )
          }
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>




    )
  }
}

HorizontalLoginForm.propTypes = {}

export default Form.create({name:'LoginForm'})(HorizontalLoginForm)