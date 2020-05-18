// 声明要操作的数据集合
const db = wx.cloud.database().collection('list');
Page({
  data:{
    id:"" , 
    name:"" , 
    age:""
  } , 

// 获取表单中的value值
  getId(event){
   this.setData({
     id:event.detail.value
   })
  } , 
  getName(event){
    this.setData({
      name: event.detail.value
    })
  } , 
  getAge(event){
    this.setData({
      age: event.detail.value
    })
  } ,

// 插入数据
  insert(){
    var _this = this;
    db.add({
      data: {
        _id: _this.data.id, 
        name: _this.data.name, 
        age: _this.data.age  
      },
      success: function (res) {
        console.log(res);
      }
    })
  } , 

// 查询数据
  select() { 
    var _this = this;
    
    // 指定查询（一条）
    // db.doc(_this.data.id).get({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // 条件查询（一条或多条）
    // db.where({
    //   name: _this.data.name ,
    //   age: _this.data.age
    // })
    // .get({
    //     success: function (res) {
    //       console.log(res)
    //     }
    //   })

    // 所有查询（全部）
    db.get({
      success: function (res) {
        console.log(res.data)
      }
    })
  } ,

// 更新数据
  update() { 
    var _this = this;
    db.doc(_this.data.id).update({
      data: {
        name: _this.data.name , 
        age:_this.data.age
      },
      success: function (res) {
        console.log(res)
      }
    })
  } ,

  // 删除数据
  delete() {
    var _this = this;
    db.doc(_this.data.id).remove({
      success: function (res) {
        console.log(res)
      }
    })
   }
})
