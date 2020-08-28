<!--
 * @Date: 2020-07-06 11:52:36
 * @information: 
--> 
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class Message extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

</style>
