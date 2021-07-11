import { createApp } from 'vue';
import WishList from './WishList.vue';
import './registerServiceWorker';
import store from './store';

// Import Bootstrap an Bootstrap Icon CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(WishList).use(store).mount('#app');
