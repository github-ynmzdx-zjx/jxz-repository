<template>
 <div> <TopNav></TopNav>
 <SwpierTop></SwpierTop>
 <IconList></IconList>
 <MusicList></MusicList>
</div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue';
import SwpierTop  from "@/components/SwpierTop.vue"
import IconList from "@/components/home/IconList.vue"
import MusicList from "@/components/home/MusicList.vue"


export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwpierTop,
    IconList,
    MusicList
  
   
 
   
  }
}
</script>
