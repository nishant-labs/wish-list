import { Options, Vue } from 'vue-class-component';
import WishCard from '../wish-card/card-component.vue';
@Options({
  components: {
    WishCard,
  },
})
export default class WishListDemo extends Vue {}
