<template>
    <div>
        <p>user3 : {{ user3 }}</p>
        <p><img src="../assets/8003896.png" alt="document" /></p>
    </div>
</template>
  
<script>
  import axios from 'axios';
  import '~/assets/css/test.css'
  
  export default {
    name : 'fetchData',
    data() {
      return {
        user3: {},
      }
    },
    async fetch() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      this.user3 = res.data;
      condole.log(res.data);
    },
  }
</script>


<style>
    h1 {
    font-family: 'FarAwayGalaxy', sans-serif;
    }
</style>
   

<style lang="scss">
    @use "~/assets/scss/main.scss";
</style>