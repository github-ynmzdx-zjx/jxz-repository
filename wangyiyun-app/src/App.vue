<template>
 <div> <FooterMusic v-show="$store.state.isFooterMusic"></FooterMusic>  
  
  <router-view/>
  </div>
</template>


<script>
import FooterMusic from "../src/components/home/item/FooterMusic.vue"
export default {
  components:{
    FooterMusic


}}
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  .icon{ width:4rem;
    height: 4rem;


  }
  .icon{
width: 0.5rem;
height: 0.5rem;

  }
}
a{
  color: black;
}
</style>
