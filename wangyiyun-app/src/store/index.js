import { createStore } from 'vuex'
import {getMusicLyric} from '@/assets/request/api/item'
import { getphoneLogin } from '@/assets/request/api/home'
// import { values } from 'core-js/core/array'
export default createStore({
  state: {
    playList: [{
      al:{
      id:497124,
      name:"マクロス SONG COLLECTION",
pic: 109951166784290850,
picUrl:"https://p1.music.126.net/hEI7F4tLEtze2aKEPn9Qqw==/109951166784290850.jpg",
pic_str:"109951166784290850"
      },
      
      
        id:5000646,
        name:"愛・おぼえていますか"
      }],
      
      
    playListIndex: 0,  //默认下标为0
    isbtnShow: true,
    detailShow: false,
    lyricList:{}, //歌词
    currentTime:0, //当前时间
    duration:0,//歌曲总时长
    isLogin:false,
    isFooterMusic:true,
    token:""
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updatelyricList:function(state,value){
      state.lyricList=value
    },
    updatecurrentTime:function(state,value){
      // console.log(state.currentTime);
      state.currentTime=value
    },
    updateDuration:function(state,value){
    state.duration=value
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    }


  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value)
      console.log(res);
      context.commit("updatelyricList",res.data.lrc)
    
  },
  getLogin:async function(context,value){
    let res=await getphoneLogin(value);
    console.log(res);
    return res
  }
},
  
  modules: {}
})

