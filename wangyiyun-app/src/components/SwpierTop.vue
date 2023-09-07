<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render >
  <van-swipe-item v-for="image in state.images " :key="image"  >
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</div>
</template>

<script>
//import axios from 'axios'
import {reactive,onMounted } from 'vue';
import {getBanner} from '@/assets/request/api/home.js'
// import { get } from 'vant/lib/utils';

//import { get } from 'http';


export default {
    setup() {
    const state =reactive({ images :[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});
    onMounted(async()=>{
    let res = await getBanner();
    state.images=res.data.banners
    console.log(res)
    });
    
    // onMounted(async()=>{
    //     axios.get('http://localhost:3000/banner?type=2').then((res)=>{
    //         console.log(res);
    //        state. images=res.data.banners
    //        console.log(state.images);
    //     })
    //     let res = await getBanner();
    //     state. images=res.data.banners
    //     console.log(res);

    // });
    return { state };
  },
};
</script>

<style lang="less" scoped>
   .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 80px;
    height: 80px;
  }
  #swiperTop{
  .van-swipe swipe{
    width: 100%;
    padding: 10px;}
    .van-swipe-item{
        img{
            width: 100%;
            height: 3rem;
        }
    }
   

    
}
.van-swipe__indicator van-swipe__indicator--active{
    background-color: rgb(rgb(255, 111, 0), rgb(128, 0, 0), blue);
}
    
    
    
    
   



  

</style>