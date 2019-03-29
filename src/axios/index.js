import JsonP from 'jsonp'
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
}