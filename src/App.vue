<template>
<h1>{{this.aegis}}</h1>
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
      .get('https://pokeapi.co/api/v2/pokemon-species/aegislash')
      .then(response=> {console.log(this.aegis=response.data.base_happiness)})


  
}

}
</script>

<style>

</style>