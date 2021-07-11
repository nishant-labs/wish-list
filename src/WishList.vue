<template>
  <img src="~@/assets/wish-list.png" class="img-fluid" alt="..." />
  <SiteInfo />
  <WishListDemo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WishListDemo from './components/wish-card-demo/wish-card-component.vue';
import SiteInfo from './components/site-info/index.vue';

@Options({
  components: {
    WishListDemo,
    SiteInfo,
  },
})
export default class WishList extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
