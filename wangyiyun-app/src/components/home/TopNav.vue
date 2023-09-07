<template>
    <div class="topNav" >
       <div class="topleft"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gengduo"></use>
</svg> </div>
<div class="topcontent"><span @click="$router.push('/infoUser')" >我的</span><span><strong>发现</strong></span><span>最新</span><span>视频</span></div>
 

<div class="topright">
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-sousuo"></use>
</svg>
</div>
</div>

</template>

<script>
export default {
    data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};


</script>

<style type="text/css" lang="less">
.topNav{width: 100%;
  height: 0.8rem;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;

}
.topcontent{
width: 70%;
height: 100%;
display: flex;
justify-content: space-between;
font-size: 20px;
align-items: center;
}


.bold{
 
}

</style>