<template>
<div class="main">
      <myheader></myheader>
      <div class="item">
        <div class="my-item">
            <h5 class="my-font">Tasty bread</h5>
            <p class="text-muted mb-3 my-font1">口感深香有回味,吃在口中香软诱人</p>
            <router-link to='/cart' class="my-font1">立刻订购？</router-link>
        </div>
        </div>
        <div>
            <div class="text-white my-font2">品牌介绍</div>
            <div class="w-100"></div>
        </div>
        <div>
            <div class="my-img1 mb-3" style="border:0"></div>
            <img class="my-img2" src="../assets/img/index/index-2.png" alt="">
        </div>
        <div class=" my-font3 text-center">
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <p>所有产品都在店内现做、现烘、现卖，提供新鲜即食的食品，大玻璃透视的作业空间，完全展现在顾客眼前，使店员、顾客、商品三者之间作最人性化的直接交流。</p>
            <router-link class='router-link2' to='/cart'>了解更多</router-link>
        </div>
    <div class="pt-5">
        <div class="text-white my-font2">产品系列</div>
        <div class="w-100"></div>
    </div>
    <div class="my-t mb-5">
        <div class="my-picture1 mt-5">
            <img src="../assets/img/product/product-8.png" alt="">
        </div>
        <div class="my-item2 text-center">
          <h2>BREAD</h2>
          <h5>面包系列</h5>
          <p class="px-5">甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
          <router-link class='router-link2' to='/cart'>了解更多</router-link>
        </div>
    </div>
    <div>
        <div class="my-picture2">
         <img  src="../assets/img/product/product-9.png" alt="">
        </div>
        <div class="my-item2  text-center">
          <h2>BREAD</h2>
          <h5>面包系列</h5>
          <p class="px-5">甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
          <router-link class='router-link2' to='/cart'>了解更多</router-link>
        </div>
    </div>
    <div class="my-t mb-5">
          <div class="my-picture1 mt-5">
              <img  src="../assets/img/product/product-10.png" alt="">
          </div>
          <div class="my-item2  text-center">
            <h2 class="mt-2">BREAD</h2>
            <h5>面包系列</h5>
            <p class="px-5">甄选小麦粉，纯天然自制酵母发酵面团 使用牛奶代替纯净水揉面</p>
            <router-link class='router-link2' to='/cart'>了解更多</router-link>
          </div>
    </div>
  </div>
</template>
<script>
import myheader from './myheader'
export default{
    
    data(){
        return{}
    },
    components:{
        "myheader":myheader
    }
}
</script>
<style scoped>
/*设置背景*/
a{
    text-decoration: none;
}
.item{
    position: relative;
    width:100%;height:300px;
    background:url("../assets/img/index/index-1.png") no-repeat center center;
    background-size:180% 100%;
}
/*设置小div背景样式*/
.my-item{
    background-color:rgba(255, 255, 255, 0.75);
    border:0 solid rgb(246, 246, 246);
    width:200px;height:200px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-100px;margin-left:-100px;
    text-align: center;
}
/*设置字体样式*/
.my-font{
    margin-top:50px;
    font-family: "Peaches Cream";
    color:rgb(177, 105, 57);
    margin-bottom:10px;
}
.my-font1{
    color:rgb(177, 105, 57);
    font-size:8px;
    margin-top:20px;
}
.my-font2{
    margin-top:50px;
    background-color:rgb(177, 105, 57);
    font-size:16px;
    width:150px;height:60px;
    text-align: center;
    line-height: 60px;
    border-radius:80px 0;
    
}
/*设置下划线*/
.my-font2+div{
    border-bottom:2px solid rgb(177, 105, 57);
}
/*设置图片*/
   .my-img1,.my-img2{
    width:80%;height:200px;}
    .my-img2{
   margin-top:-300px;
   /* margin-left:43px; */
   }
   .my-img1{
       margin-top:80px;
       /* margin-left:23px; */
   }
  /* .my-picture1,.my-picture2,.my-picture3{
       width:200px;height:200px;
   } */
   .my-picture2{
       margin-bottom:50px;
   }
.my-img1,.my-img2{
    background-color:rgb(234, 212, 193);
}
/*设置字体样式*/
.my-font3{
    margin-top:10px;
    color:rgb(177, 105, 57);
    line-height:35px;
    text-indent:35px;
    padding:10px;
}
.router-link1,.router-link2{
    width:150px;height:50px;
    display: block;
    border:3px solid rgb(177, 105, 57);
    color:rgb(177, 105, 57);
    background-color:#fff;
    text-align: center;
    line-height: 50px;
     margin:0 auto;
}
/*设置背景样式*/
.item1{
    width:100%;height:600px;
    background:url("../assets/img/index/index-3.png") no-repeat center center;
    background-size:200% 100%;
    display: flex;
    flex-direction: column;
}
/*三个div的样式*/
.my-style1,.my-style2,.my-style3{
    background-color:rgba(255, 255, 255, 0.75);
    border:0 solid rgb(246, 246, 246);
    width:80%;height:150px;
    text-align:left;
    color:rgb(177, 105, 57);
    background-image:url("../assets/img/index/index-7.png");
    background-size:20% 20%;
    background-repeat:no-repeat;
    background-position:left center;
    font:5%;
    border-radius:5px;
    /* margin-left:50px; */
    margin-top:30px;
}
.my-style2{
    margin-top:30px;
    background-image:url("../assets/img/index/index-8.png");
}
.my-style3{
    margin-top:30px;
    background-image:url("../assets/img/index/index-9.png");
}
.my-big{
    margin-top:50px;
}
/*设置产品的样式*/
.my-t{
    margin-top:30px;
    margin-bottom: 100px;
}
.my-item2{
    margin-top:50px;
    color:rgb(177, 105, 57);
}

</style>