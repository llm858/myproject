<template>
<div> 
  <!-- 底部导航栏 -->
<mt-tabbar v-model="selected" v-show="isShow" fixed>
  <mt-tab-item id="first" @click.native="changeState(0)">
    <tabbaricon
       :selectedImage="require('../assets/index1.png')"
       :normalImage="require('../assets/index.png')"
       :focused="currentIndex[0].isSelect"
      ></tabbaricon>
    首页
  </mt-tab-item>
  <mt-tab-item id="cart" @click.native="changeState(1)">
    <tabbaricon
       :selectedImage="require('../assets/cart1.png')"
       :normalImage="require('../assets/cart.png')"
       :focused="currentIndex[1].isSelect"
      ></tabbaricon>
    购物车
  </mt-tab-item>
  <mt-tab-item id="login" @click.native="changeState(2)">
    <tabbaricon
       :selectedImage="require('../assets/user1.png')"
       :normalImage="require('../assets/user.png')"
       :focused="currentIndex[2].isSelect"
      ></tabbaricon>
    登录
  </mt-tab-item>
</mt-tabbar>
</div>
</template> 
<script>
import tabbarIcon from './tabbarIcon.vue'
export default {
  data(){
    return{
      selected:"first",
        currentIndex:[
         {isSelect:true},
         {isSelect:false},
         {isSelect:false}
       ]
    }
  },
  methods:{
    changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
        if(n==i){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      }
    }
  },
  computed:{
    isShow:function(){
      return true;
    }
  },
  watch: {
      'selected': {
        handler(){
          if (this.selected == "first") {
            this.$router.push('/first');
          }
          if (this.selected == "cart") {
            this.$router.push('/cart');
          }
          if (this.selected == "login") {
            this.$router.push('/login');
          }
          } 
          
        }
      },
  components:{
    "tabbaricon":tabbarIcon
  }
}
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  color:red;
}
</style>
