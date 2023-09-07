<template>
    <div class="item-father">
        <br>
        <br><br><br><br><br><br><br><br><br><br><br>


<div class="item"    v-for="(item,index) in ItemList" :key="item"  @click="playMusic(index)">
<span class="item1">{{ index + 1  }}</span> 

<p class="item2">{{ item.name }}</p>

<svg class="icon3" aria-hidden="true">
    <use xlink:href="#icon-31liebiao"></use></svg>




</div>


    


</div>
 

  

    
    
</template>

<script>
import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { mapMutations } from 'vuex';

const app = createApp();
app.use(Swipe);
app.use(SwipeItem);
export default{
    setup(props) {
        


       
        
        
    
    console.log(props);
},
props:["ItemList"],
methods:{
    playMusic:function(index){
    this.updatePlayList(this.ItemList),
    this.updatePlayListIndex(index)
},
...mapMutations(['updatePlayList','updatePlayListIndex',])
}
};




</script>
<style>
.item-father{
    /* align-items: center;
    width: 100%;
    height: 30%;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    margin-left: -100px; */

height: 30%;

    
    
   
   
    
    
    

   
   
 
    
   
    
    
    
   


   


}

.item2{
    /* width: 30%;
    height: 50px;
    display: flex;
    width: 100%;
   align-items: center;
   justify-content: space-around;
   flex-direction: column; */
   margin-left: 60px;
   margin-top: -20px;
   width: 50%;
   float:  top ;
   align-items: center;
  

}   

    
  





.item1{
   /* width: 50%;
   display: flex;
   height: 50px;
   justify-content: space-around;
   flex-direction: column;
   align-items: center; */
   float: top;
   width: 10%;
   align-items: center;
   
  
   
   
  
  
   
   
   
    
    
 

  


}
    

.icon3{
    /* height: 20px;
    display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column; 
   width: 20%; */
   width: 20px;
   
   
   margin-left: 380px;
   margin-top: -85px;
   float: bottom;
   justify-content: space-around;
  align-content: center;
   
   
   
   
  
   
    
   
}
    
    
   
 
   
    
   
    

 


</style>