import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    hasShadow: Boolean,
    hasFooter: Boolean,
    isRowCard: Boolean,
    image: String,
    title: String,
    description: String,
  },
})
export default class WishCard extends Vue {
  hasShadow = false;
  hasFooter = false;
  isRowCard = false;
  image?: string;
  title!: string;
  description!: string;
  wishDetailList: Array<{ type: string; value: string }> = [
    { type: 'Budget', value: '£100' },
    { type: 'Modified', value: '234 546 645' },
  ];
  get imageSrc(): string {
    return this.image ? require(`../../assets/${this.image}`) : undefined;
  }
}
