import JsonP from 'jsonp'
export default class Axios {
  static jsonP (options) {
    return new Promise((resolve,reject)=>{
      JsonP(options.url,{
        param:'callback'
      },function (err, data) {
        //to-do
        debugger;
        if (data.status == "1"){
          debugger;
          resolve(data);
        } else {
          reject(data.info);
        }
      })
    })
  }
}