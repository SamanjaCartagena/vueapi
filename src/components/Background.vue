<template>
<div>
<img :src="this.aegis" style="width:100%; height:100%; zIndex:-1"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    props:{},
    components:{},
    data(){
     return {
        aegis:null
     }
 
    },


mounted(){
 
 axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`)
      .then(response=> {console.log(this.aegis=response.data.hdurl)})


  
}

}
</script>

<style>
body{


}
</style>