<template>
  <div id="app" class="warpper">
    <nav>
      <ul>
        <li>
          <router-link to="/home">home</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </nav>

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
 * {
   padding:0;
   margin:0;
   text-decoration: none;
   list-style: none;
 }

.warpper {
  margin: 0 auto;
  width: 1200px;

}

nav li{
  /* border: 1px solid blue; */
  display: inline-block;
}

nav li:nth-child(2) {
  margin-left:20px;
}

section {
  margin-top: 80px;
  background: rgba(155,38,182,0.3);
  /* border: 1px solid red; */
}

</style>
