import { Options, Vue } from 'vue-class-component';
import WishCard from '../wish-card/card-component.vue';
import AddWishCard from '../add-wish-card/add-card-component.vue';
@Options({
  components: {
    WishCard,
    AddWishCard,
  },
})
export default class WishListDemo extends Vue {}
