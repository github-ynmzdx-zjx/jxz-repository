<template>
<div class="footerMusic"> 
   
    <div class="footerleft" @click="updateDetailShow"> 
        <img :src="playList[playListIndex].al.picUrl" alt="" > </div>
    <div>
        <p @click="updateDetailShow">{{ playList[playListIndex].name }} </p>
        <span></span> </div>
    <div class="footerright"> 
        <svg class="icon" aria-hidden="true"  @click="play"  v-if="isbtnShow">
    <use xlink:href="#icon-bofang"   ></use> 
</svg>
<svg class="icon" aria-hidden="true"   @click="play" v-else>
    <use xlink:href="#icon-zanting1"  ></use> </svg>
    <svg class="icon1" aria-hidden="true"    >
    <use xlink:href="#icon-playlistMusic"  ></use> </svg>
    
    

    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }" :overlay="false" >
       
        <MusicDetail :musicList="playList[playListIndex]"  :isbtnShow="isbtnShow" :play="play" :addDuration="addDuration" />

    </van-popup>
   
</div>
<mapMutations/>
<mapState></mapState>
<audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`">

</audio>


</div>


</template>
<script>

// import { FUNCTION_TYPES } from '@babel/types';
import MusicDetail from "@/components/home/item/MusicDetail.vue"
import {mapMutations,mapState} from 'vuex'
import { createApp } from 'vue';
import  {Popup}  from 'vant';
const app = createApp();
app.use(Popup);
export default {
    data(){
        return{
            Interval:0
        }
    },

    computed:{
        ...mapState(['playList','playListIndex','isbtnShow','detailShow']),
    },
    mounted(){
        console.log(this.$refs);
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.updateTime()
        
    },
    updated(){
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id);
        this.addDuration()
    },
    methods:{
        play:function(){
            //判断
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.updateIsbtnShow(false)
                this.updateTime() //播放就调用函数就行传值
            }else{
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.Interval)//暂停清除定时器
            }
        
            // this.$refs.audio.play()
            

        },
        addDuration:function(){
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime:function(){
          this.setInterval=  setInterval(()=>{
            this.updatecurrentTime(this.$refs.audio.currentTime)
        },1000)
        },
        ...mapMutations(["updateIsbtnShow","updateDetailShow","updatecurrentTime","updateDuration"]),

    },
    watch:{
        playListIndex:function(){
            this.$refs.audio.autoplay=true;
            if(this.$refs.audio.paused){ //
                this.updateIsbtnShow(false)
            }
        }
    
    },

    component:{
        MusicDetail,
        
    }
};



</script>
<style lang="less" scoped>
.footerMusic{
    width: 100%;
    height: 1.4rem;
    background-color:white;
    position: fixed;
    bottom: 0;
    border: 1px solide paleturquoise;
    display: flex;
    margin-top: 30px;
    
    justify-content: space-between;
    color:pink;
    align-items: center;
    src{
        height: 150px;
    }


}
.footerleft{
    width: 20%;
    height: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1px;
    
    
    
    img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        


    }

}

.footerright{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 60%;
    margin-left: 80px;
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        margin-left: 125px;
        padding-left: 1px;
        

    }
    .icon1{
    margin-left: 20px;
    height: 30px;
    width: 30px;
    
    
  }  
}



  

</style>