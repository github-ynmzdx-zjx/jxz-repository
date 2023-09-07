<template> 

<div class="detailTop">

    <Vue3Marquee></Vue3Marquee>
    <img :src="musicList.al.picUrl" alt="" class="bjimg">  

<div class="detailTop-top">
<div class="detailTopleft">
    <svg class="icon" aria-hidden="true"  @click="backHome">
    <use xlink:href="#icon-jiantou_xiangzuo"></use></svg>
    <Vue3Marquee class="pmd"> {{musicList.al.name}} </Vue3Marquee>
   <!-- <span>{{ musicList.al.name }}</span> -->
   
</div>
<div class="detailTopRight"> <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-fenxiang"></use></svg></div>
</div>
    <div class="detailcontent" v-show="!isLyricShow">

        <img src="@/assets/needle-ab.png" alt="" class="img1" :class="{img1_active:!isbtnShow}">
        <img src="@/assets/disc-plus.png" alt="" class="img2">
        <img :src="musicList.al.picUrl" alt="" class="img3" @click="isLyricShow=true"  :class="{img3_active:!isbtnShow,img3_pauesd:isbtnShow}">
    </div>
    <div class="lyric" ref="musicLYRIC" v-show="isLyricShow">
        <p v-for="item in lyric" :key="item" :class="{ active:(currentTime*1000>=item.time && currentTime*1000<item.pre)}"> 
            <br><br>
            {{ item.lrc }}</p>
    </div>

    <div class="footer">
<div class="footer-top">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-aixin"></use></svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use></svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xuanzeanniu"></use></svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-shouye"></use></svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-zantingxunhuan"></use></svg>  
</div>
<div class="footer-content">
    <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
</div>
<div class="bootom">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-danxunhuan"></use></svg>
    <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
    <use xlink:href="#icon-gl-previous"></use></svg>

    <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow" >
    <use xlink:href="#icon-bofang"  ></use></svg>

    <svg class="icon" aria-hidden="true"  @click="play" v-else>
    <use xlink:href="#icon-zanting1"></use></svg>

    <svg class="icon" aria-hidden="true"  @click="goPlay(1)">
    <use xlink:href="#icon-gl-next"></use></svg>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-playlistMusic"></use></svg>
</div>

    </div >
    
</div>

</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations,mapState } from 'vuex';
export default{
    data(){
        return{
            isLyricShow:false
        }
    },
    computed:{
        ...mapState(["lyricList",'currentTime','playListIndex','playList','duration']),
    
    lyric:function(){
        let arr;
        if(this.lyricList.lyric){
            arr=this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                let min =item.slice(1,3);
                let sec =item.slice(4,6);
                let mill =item.slice(7,10);
                let lrc =item.slice(11,item.length)
                let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);


                if(isNaN(Number(mill))){
                    mill=item.slice(7,9);
                    lrc=item.slice(10,item.length)
                    time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
                }
            //  console.log(min,sec,Number(mill),lrc,time);
            return {min,sec,mill,lrc,time}
        })
        arr.forEach((item,i)=> {
            if(i===arr.length-1 || isNaN(arr[i+1].time)){
                item.pre=100000;
            }else{
                item.pre=arr[i+1].time;
            }
        });
    }
        
    // console.log(arr);
    return arr;
},
},
    
    mounted() {
        
    
    // console.log(this.musicList);
    // console.log(this.lyricList.lyric);
    this.addDuration()

},


props:["musicList","isbtnShow","play","addDuration"],
methods:{
    backHome:function(){
        this.isLyricShow=false
        this.updateDetailShow()
    },
    goPlay:function(num){
        let index=this.playListIndex+num
        if(index<0){
            index=this.playList.length-1
        }else if(index==this.playList.length){
            index=0
        }
this.updatePlayListIndex(index)
        },
    
    ...mapMutations(['updateDetailShow','currentTime','updatePlayListIndex'])
},
watch:{
    currentTime:function(newValue){
        let p=document.querySelector("p.active");
        if(p){
        // console.log([p]);
        if(p.offsetTop>300){
            this.$refs.musicLYRIC.scrollTop=p.offsetTop-200;
        //   console.log  ([this.$refs.musicLYRIC])
        }
    }
    


if(newValue===this.duration){
    if(this.playListIndex===this.playList.length-1){
        this.updatePlayListIndex(0);
        this.play()
    }else{
        this.updatePlayListIndex(this.playListIndex+1);
    }}},},

components:{Vue3Marquee}
}





</script>

<style lang="less" scoped >
.detailTop{
    
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 20%;
    
    
    
    
    
    
    
    
    
}
.detailTop-top{
    
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 15px;
    
}
.detailTopleft{
    
   align-items: center;
    justify-content: space-around;
    float: left;
    width: 15%;
    height: 10px;
    
    
    
   
    
   
   
   
   
    .icon{
        width: 35px;
        height: 35px;
        
        justify-content: center;
        align-items: center;
        margin-top: -5px;
        
       
        
    
    }}
        
        
    .pmd{
        
        justify-content: space-between;
        display: flex;
        align-content: center;
        width: 200px;
        margin-left: 115px;
        margin-top: -28px;
        
        }      
       
        
       

        
    



.detailTopRight{
    
   align-items: center;
    justify-content: space-around;
    float: right ;
    width: 15%;
    
    
   
    
    
    

    .icon{
        
        
        justify-content: space-around;
        align-items: center;
      
        width: 20px;
        right: 20px;
        margin-left: 45px;
        
    
        
}}
.bjimg{
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(80px);
    position: absolute;
    
}
.detailcontent{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
    height: 9rem;
}
.img1{
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-10deg);
    transition: all 2s;}
.img1_active{
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;

}
.img2{
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
}
.img3{
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
}
.footer-top{
    margin: 1px auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
        
        align-items: center;
        width: 25px;
        height: 25px;
        justify-content: space-around;
        display: flex;
        
        float:right;
        
        
        
        
    
}}
.footer{
    align-items: center;
    justify-content:space-around;
    justify-items: center;
    height: 20%;

    
   
    
}
.bootom{
    margin: 1px auto;
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    
    .icon{
        float: left;
        align-items: center;
        width: 25px;
        height: 25px;
        justify-content: space-between;
        display: flex;
        
        
        
        
        
    
}}
.img3{
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
    animation: rotate 10s linear infinite;
}
.img3_active{
    animation-play-state: running;

}
.img3_pauesd{
 animation-play-state:paused;
}
@keyframes rotate{
    0%{
        transform: rotate(0deg);
    }
100%{
    transform: rotate(360deg);
}}
.lyric{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.2rem;
    overflow: scroll;
    p{
        color:white;
        margin-bottom: 0.4rem;
        
        
        
        
    }
    .active{
        color:rgb(211, 204, 204);
        font-size: .5rem;}
        
    
}
.range{
    width: 100%;
    height: 0.6rem;
}
</style>