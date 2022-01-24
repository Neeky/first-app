<template>
<div>
    <h1>this is home.</h1>

  <ul>
    <li><router-link to="/home/news">news</router-link></li>
    <li><router-link to="/home/citys">citys</router-link></li>
  </ul>

  <div class="plan">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
    name:"Home"

}
</script>

<style>
.plan {
  margin-top:100px;
}
</style>