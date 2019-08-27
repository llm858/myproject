<template>
  <div>
    <mt-header fixed title="用户登录">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  </mt-header>
    <mt-field label="用户名：" name="uname" v-model="uname" placeholder="请输入用户名" type="text"></mt-field>
    <mt-field label="密码：" name="upwd" v-model="upwd" placeholder="请输入密码" type="password"></mt-field>
    <mt-button  v-on:click="login" size="large" class="mybtn">登录</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
 export default {
   data(){
     return {
       uname:'',
       upwd:''
       }
     
   },
   methods:{
      login(){
          var url="index/root";
          if(this.uname==''){
            MessageBox.alert("用户名不能为空");return;
          }
          if(this.upwd==''){
            MessageBox.alert("密码不能为空");return;
          }
         var obj={uname:this.uname,upwd:this.upwd};
          this.axios.get(url,{params:obj}).then(result=>{
            console.log(result);
            if(result.data.code==1){
              MessageBox.alert("登录成功");
              this.$router.push('/first');
              this.uname='';
              this.upwd='';
            }else{
              MessageBox.alert("用户名或者密码错误");
            }
          })
      }   
     }
 }  
</script>
<style>
.mybtn{
    margin-top:15px;
    background:#26a2ff;
    color:#fff;
}
.mint-header {
  height:48px;
  font-size:16px;
}
</style>