import Vue from 'vue'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

Vue.use(PrimeVue)
Vue.use(ToastService)

Vue.component('Button', Button)
Vue.component('InputText', InputText)
Vue.component('Password', Password)
Vue.component('Toast', Toast)
