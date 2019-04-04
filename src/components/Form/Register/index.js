import React from 'react'
import {
  Card,
  Input,
  Radio,
  Form,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  Button
} from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
const  Option = Select.Option;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea
class RegisterExp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userImg:''
    }

  }

  render () {
    const {getFieldDecorator} = this.props.form;
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }
    return (
      <div>
        <Card title="Register Page">
          <Form>
            <FormItem label="username" {...formItemLayout}>
              {
                getFieldDecorator('username',{
                  initialValue:'',
                  rules:[{
                    required: true,
                    message: 'username can not be empty!!'
                  }]
                })(<Input placeholder='please input username'/>)
              }
            </FormItem>

            <FormItem label='password' {...formItemLayout}>
              {
                getFieldDecorator('password',{
                  initialValue: ''
                })(<Input type='password' placeholder='please input ur password'/>)
              }
            </FormItem>
            <FormItem label='Sex' {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  initialValue: '1'
                })(<RadioGroup>
                    <Radio value='1'>male</Radio>
                    <Radio value='2'>female</Radio>
                </RadioGroup>)
              }
            </FormItem>
            <FormItem label='age' {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  initialValue:  18,
                })(<InputNumber min={1} max={199} />)
              }
            </FormItem>
            <FormItem label="Current Status" {...formItemLayout}>
              {
                getFieldDecorator('status',{
                  initialValue: '1'
                })(
                  <Select>
                    <Option value='1'>111</Option>
                    <Option value='2'>222</Option>
                    <Option value='3'>333</Option>
                    <Option value='4'>444</Option>
                    <Option value='5'>555</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label='interest' {...formItemLayout}>
              {
                getFieldDecorator('interest',{
                  initialValue: '1'
                })(
                  <Select mode={'multiple'}>
                    <Option value="1">游泳</Option>
                    <Option value="2">打篮球</Option>
                    <Option value="3">踢足球</Option>
                    <Option value="4">跑步</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">骑行</Option>
                    <Option value="7">桌球</Option>
                    <Option value="8">麦霸</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label='Married' {...formItemLayout}>
              {
                getFieldDecorator('married',{
                  valuePropName:'checked',
                  initialValue: false
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label='Birthday' {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue:moment('2018-08-08')
                })(
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                )
              }
            </FormItem>
            <FormItem label='Address' {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue: 'beijing taiji company'
                })(
                  <TextArea autosize={rowObject}/>
                )
              }
            </FormItem>

            <FormItem label='GetUpTime' {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker/>
                )
              }
            </FormItem>

            <FormItem label='Avatar' {...formItemLayout}>
              {
                getFieldDecorator('avatar')(

                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                  >
                    {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem label='Submit' {...formItemLayout}>
              <Button type='primary' onClick={this.handleSubmit}>Register</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }

  handleSubmit=()=>{
    let usrInfo =  this.props.form.getFieldsValue()
    console.log(JSON.stringify(usrInfo))
  }
}

RegisterExp.propTypes = {}

export default Form.create()(RegisterExp)