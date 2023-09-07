<template>
    
<div class="itemMusicTop">
   <img :src='playlist.coverImgUrl' alt="" class="bgimg"> 
    <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
    <use xlink:href="#icon-jiantou_xiangzuo"></use>
</svg>
<span>歌单</span>
    </div>
    <div class="itemRight">
        <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-sousuo"></use>
</svg>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-31liebiao"></use>
</svg>

    </div>
    
  <div class="onetop"  > 
    <div class="img-top"><img :src="playlist.creator.backgroundUrl" alt=""  :height="160" :width="200" >
       
</div>
<div><span >{{playlist.name }}</span >
</div>

    <div class="onetop1">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-pinglun"></use>
</svg>
<span>:{{ playlist.shareCount}}</span>
</div>
<div class="onetop2"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-fenxiang"></use>
</svg>
<span>:{{ playlist.shareCount }}</span>
</div>
<div class="onetop3">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-yidingyue"></use> 
</svg>
<span >:{{ playlist.subscribedCount}}</span>  
</div>
<div class="onetop4"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-shiyongtongji-01"></use>
</svg>
<span>:{{ playlist.playCount}}</span>
 </div>
</div >
</div>



</template>
<script>
import { createApp } from 'vue';
import { Icon } from 'vant';
const app = createApp();
app.use(Icon);

export default{
    //通过props属性进行传值，判断如果数据拿不到，就获取sessionstorege中的
    
    setup(props) {
        if((props.playlist.creator="")){
            props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
        }
    
        // console.log(props);
    },
    props:['playlist']
        
    
}




</script>
<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
  height: 1rem;
justify-content: space-around;
align-items: center;
padding: 0.1rem;
}

.itemLeft{
    width: 20%;
  height: 100%;
display: flex;
justify-content:space-between;
float: left;

}
  .icon2{
    fill: #fff;
   
}
.itemRight{
    width: 20%;
  height: 100%;
display: flex;
justify-content: space-between;
float:right;
margin: 1px auto;


}
.bgimg{
    width: 100%;
    height: 5rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
    
}
.onetop1{
    float: left;
    width: 25%;
  height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
color: #fff;
padding: 6px;

}
.onetop2{
    width: 25%;
  height: 100%;
display: flex;
float: left;
justify-content: space-around;
align-items: center;
color: #fff;
padding: 6px;
}
.onetop3{
    width: 25%;
  height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
float: left;
color: #fff;
padding: 6px;
}
.onetop4{
    width: 25%;
  height: 100%;
display: flex;
justify-content: space-around;
float:right;
align-items: center;
color: #fff;
padding: 6px;



   
}
.onetop0{
  

    width: 25%;
  height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
box-sizing: 6rem;


}

.img-top{
  height: 30%;
  width: 30%;
  img{


margin-top: 10px;






  }
}





</style>
