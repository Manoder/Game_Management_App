<template>
  <HeaderPage />
  <h1>Hello mofo {{ name }}, Welocme to Gamers Glory Esports</h1>
  <table class="center" border="1px">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Type</th>
      <th>Device</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in games" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.device }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleteGame(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "HomeH",
  data() {
    return {
      name: "",
      games: [],
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    async deleteGame(id) {
      let result = await axios.delete("http://localhost:3000/games/" + id);
      if ((result.status == 200)) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/games");
      this.games = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
.center {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
td {
  width: 160px;
  height: 40px;
}
</style>