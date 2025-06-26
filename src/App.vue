<template>
<div>
<Background class="background-component">

</Background>
<div class="content">
Hello There
<h1>
Welcome to my website
</h1>
</div>
</div>
</template>
<script>
import Background from './components/Background.vue'
export default {
    props:{},
    components:{Background},
    data(){
     return {
     }
 
    },




}
</script>

<style scoped>

.background-component{
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind other content */
  }
  .content{
  position:relative;
  z-index:1;
  color:black;
  }
</style>