<template>
    <div>
        <div @click="this.$router.go(-1)"> <svg class="icon" aria-hidden="true" >
    <use xlink:href="#icon-jiantou_xiangzuo"></use>
</svg></div>
    <div class="login">
        
        <img src="../assets/login.jpg" alt="" class="back-img">
        <h1 class="login-h">欢迎登录</h1>
        <br><br><br><br><br>
       <input type="text" placeholder="请输入手机号码" v-model="phone">
        <br>
        <input type="password" placeholder="请输入密码" v-model="password">
       <br>
        
        <button @click="Login">登录</button>
    </div>
</div>
</template>
<script>
export default{
    data() {
        return {
            phone:'',
            password:''

        }
    },
    methods: {
        Login:async function(){
        let res= await   this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
console.log(res);
if(res.data.code===200){ //如果返回的code等于200，就说明登录成功，就跳转个人中心页面
    this.$store.commit('updateIsLogin',true)
    this.$store.commit('updateToken',res.data.token)
    this.$router.push('/infoUser')
}else{
    alert("手机号码或者密码错误")
    this.password=''
}
        }
    }
}


</script>
<style>
.login{
    align-items: center;
    justify-content: center;
    margin: 100px    auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    
    
   
    
   

}
.login-h{
    color:white;
}
.back-img{
    width: 100%;
    height: 150%;
    z-index: -1;
    filter: blur(8px);
    position: absolute;
    
}

</style>