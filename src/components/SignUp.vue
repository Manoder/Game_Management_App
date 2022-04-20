<template>
  <img class="logo" src="../assets/logo.jpg" />
  <h1>SignUp</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <input type="text" v-model="email" placeholder="Enter your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password"
    />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    // API sometimes gives late response therefore we use async await
    async signUp() {
      console.warn("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) { // JSON.stringify converts Object data into String
         localStorage.setItem("user-info", JSON.stringify(result.data));
         this.$router.push({name:'HomeH'})
      } 
    },
  },
  mounted()
  {
    let user = localStorage.getItem('user-info')
    if(user)
    {
      this.$router.push({name:'HomeH'})
    }
  }
};
</script>

