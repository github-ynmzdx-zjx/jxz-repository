import service from "..";
export function getBanner(){ //获取轮播图的数据
    return service({               //返回方法
        method:"GET",
        url:"/banner?type=2"

    })
}
export   function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10",
    })
}
// 登录/login/cellphone?phone=xxx&password=yyy
export   function getphoneLogin(data){
    return service({
        method:"GET",
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
// export function getBanner(){ //获取轮播图的数据
//  return service({
//    method:"GET",
//    url:"/banner?type=2" ,
//  })
//  }


