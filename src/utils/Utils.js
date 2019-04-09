export default {
  dataFormat: function (time) {
    if (!time){
          return '';
    }
    let date = new Date(time);
    return date.getFullYear() + "-" + (date.getMonth()+1) + '-' + date.getDate() + '  '+ date.getHours() + '-' + date.getMinutes() + ": " + date.getSeconds();

  },

  pagination(data,callback){
    return  {
      onChange: (current)=>{
        callback(current);
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: ()=>{
        return `一共${data.result.total}`
      },
      showQuickJumper:true
    }
  }
}