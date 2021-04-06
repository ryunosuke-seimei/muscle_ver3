
require('./bootstrap');

window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import router from './router.js'


const app = new Vue({
    el: '#app',
    router
});
