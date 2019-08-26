<template>
<div>
    <img :src="focused ? selectedImage:normalImage" class="myimg">
</div>
</template>
<script>
export default{
    props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
.myimg{
    width:30px;
    height:30px;
}
</style>