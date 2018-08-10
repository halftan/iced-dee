// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import AV from 'leancloud-storage/live-query';

AV.init('bpqDhb9KVE4Gh9f3VH9kJ4sp-gzGzoHsz', 'FW9EYybmuDV72RgzCzYqQnVh');

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    getAV: () => {
      return AV;
    }
  }
});

Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
