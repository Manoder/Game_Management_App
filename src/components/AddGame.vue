<template>
  <HeaderPage/>
  <h1>Add</h1>
  <form class="add">
    <input type="text" name="name" v-model="game.name" placeholder="Enter name"> 
    <input type="text" name="type" v-model="game.type" placeholder="Enter type"> 
    <input type="text" name="device" v-model="game.device" placeholder="Enter device"> 
    <button type="button" v-on:click="addGame">Add New Game</button>
  </form>
</template>

<script>
import axios from 'axios'
import HeaderPage from './Header.vue'
export default {
  name: "AddGame",
  components:{
    HeaderPage
  },
  data()
  {
    return {
      game:{
        name:'',
        type:'',
        device:''
      }
    }
  },
  methods:{
    async addGame() {
            const result = await axios.post("http://localhost:3000/games", {
                name: this.game.name,
                type: this.game.type,
                device: this.game.device
            })
            if(result.status==201){
                this.$router.push({name:'HomeH'})
            }
            console.log("result", result)
        }
  },
  mounted()
  {
    let user = localStorage.getItem('user-info')
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
  }
};
</script>