<template>
  <HeaderPage />
  <h1>Update</h1>
  <form class="update">
    <input
      type="text"
      name="name"
      v-model="game.name"
      placeholder="Enter name"
    />
    <input
      type="text"
      name="type"
      v-model="game.type"
      placeholder="Enter type"
    />
    <input
      type="text"
      name="device"
      v-model="game.device"
      placeholder="Enter device"
    />
    <button type="button" v-on:click="updateGame">Update Data</button>
  </form>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "UpdateGame",
  components: {
    HeaderPage,
  },
  data() {
    return {
      game: {
        name: "",
        type: "",
        device: "",
      },
    };
  },
  methods: {
    async updateGame() {
      const result = await axios.put(
        "http://localhost:3000/games/" + this.$route.params.id,
        {
          name: this.game.name,
          type: this.game.type,
          device: this.game.device,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomeH" });
      }
      console.log("result", result);
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/games/" + this.$route.params.id
    );
    this.game = result.data;
  },
};
</script>