<template>
  <div class="iconlist">
        <div class="iconItem">
        <svg class="icon1" aria-hidden="true">
    <use xlink:href="#icon-ic-today"></use>
</svg> 
<span>每日推荐</span>
 </div>
 <div class="iconItem">
        <svg class="icon1" aria-hidden="true">
    <use xlink:href="#icon-sirendingzhi"></use>
</svg> 
<span>私人FM</span>
 </div>
 <div class="iconItem">
        <svg class="icon1" aria-hidden="true">
    <use xlink:href="#icon-gedan"></use>
</svg> 
<span>歌单</span>
 </div>
 <div class="iconItem">
        <svg class="icon1" aria-hidden="true">
    <use xlink:href="#icon-paihangbang"></use>
</svg> 
<span>排行榜</span>
 </div>
 
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>



<style lang="less">
.iconlist{
    width: 100%;
    height: 2rem;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;}

.iconItem{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.icon1{
    width: 1rem;
    height: 1rem;
}

</style>