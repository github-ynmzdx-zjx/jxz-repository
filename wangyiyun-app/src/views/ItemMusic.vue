<template>
    <div>
<ItemMusicTop :playlist="state.playlist"/>
<ItemMusicList :ItemList="state.ItemList" :songs="state.songs"/>
</div>
</template>
<script>
import {useRoute} from 'vue-router'
import {onMounted,reactive} from "vue"
import  { getMusicItemList,getItemList } from "@/assets/request/api/item.js"
import ItemMusicTop  from "@/components/home/item/ItemMusicTop.vue"
import ItemMusicList   from "@/components/home/item/ItemMusicList.vue"
export default{
    setup() {
        const state =reactive({
            playlist:{},//歌单详情页的数据
            ItemList:[]//歌单的歌曲
        })
        onMounted(async ()=>{
            let id = useRoute().query.id;
            console.log(id);
            let res = await getMusicItemList(id);
            console.log(res);
            //获取歌单歌曲
            state.playlist = res.data.playlist
            //获取歌单歌曲
            let result = await getItemList(id);
            console.log(result);
            state.ItemList = result.data.songs
           
            //防止页面刷新，数据丢失，降数据保存到sessionstorege中
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return {state}
    },
    components:{
        ItemMusicTop,
        ItemMusicList,
    }
};



</script>
<!-- <script>
import {useRoute} from 'vue-router'
import {onMounted} from "vue"
import  { getMusicItemList } from "@/assets/request/api/item"
export default{
    setup(){
        onMounted( async()=>{
            let id=useRoute().query.id
            console.log(id);
            let res = await getMusicItemList(id);
            console.log(res);

        });
    },
};
</script> -->