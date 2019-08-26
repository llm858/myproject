<template>
  <div>
    <mt-field label="用户名：" name="uname" placeholder="请输入用户名" type="text"></mt-field>
    <mt-field label="密码：" name="upwd" placeholder="请输入密码" type="password"></mt-field>
    <mt-button type="primary" @click="login()" size="large" class="mybtn">登录</mt-button>
  </div>
</template>
<script>
 export default {
   data(){
     return {
       }
     
   },
   methods:{
      login(){
         // let url='/index/root';

         // data={uname:uname,upwd:upwd};
      }   
     }
 }  
</script>
<style>
.mybtn{
    margin-top:15px;
}
</style>