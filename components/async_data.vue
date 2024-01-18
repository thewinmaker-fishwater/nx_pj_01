<!-- pages/user.vue -->
<template>
    <div>
        <p>hello</p>
        <p>user2 : {{ user2 }}</p>
    </div>
</template>
  

<script>
import axios from 'axios';

export default {
  name : 'async-data',

  data() {
    return {
        user2: {},
    }
  },
  
  // params의 id가 1이라고 가정
  async asyncData({ params, $http }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/2`);
    this.user2 = response.data;
    return { user2 }
  },


  // data() {
  //   return {
  //       user2: {},
  //   }
  // },
  // methods: {
  //   async fetchUser1() {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
  //       this.user2 = response.data;
  //   }
  // },
  // created() {
  //   this.fetchUser1();
  // },


}
</script>
 