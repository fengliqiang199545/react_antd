import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
  static jsonP (options) {
    return new Promise((resolve,reject)=>{
      JsonP(options.url,{
        param:'callback'
      },function (err, data) {
        //to-do

        if (data.status == "1"){

          resolve(data);
        } else {
          reject(data.info);
        }
      })
    })
  }

  static ajax(options){
    let loading;
    if (options.data && options.data.isShowLoading !== false ) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block';
    }
    return new Promise((resolve, reject)=>{
      axios({
        url: options.url,
        method: 'get',
        baseURL:"https://easy-mock.com/mock/5ca55b7ddcc23b30ca628b76/tableList/",
        timeout: 3000,
        param: (options.data && options.data.params) || ''
      }).then((respose)=>{
        if (options.data && options.data.isShowLoading !== false ) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none';
        }
        if (respose.status == '200' ){
          if (respose.data.code == '0'){
            resolve(respose.data)
          } else {
            Modal.info({
              title: 'error',
              content: "Something Wrong!!"
            })
          }
        } else {
          reject(respose.data.msg)
        }
      })
    })
  }
}