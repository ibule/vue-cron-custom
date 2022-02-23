import vueCronCustom from './components/Crontab.vue'

vueCronCustom.install = Vue => Vue.component(vueCronCustom.name, vueCronCustom);

export default vueCronCustom