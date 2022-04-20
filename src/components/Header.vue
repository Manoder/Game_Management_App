<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Game</router-link>
         <!-- <router-link to="/update">Update Game</router-link> -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods:{
        logout()
        {
            localStorage.clear()
            this.$router.push({name:'LoginP'})
        }
    }
}
</script>

<style>
.nav{
    display: flex;
    background-color: black; 
    overflow: hidden;  
    padding: 2px 2px;
    justify-content: space-between;
    align-items: center;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>