import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'app',
            redirect: 'company',
            component: () => import('Layouts/base'),
            children: [
                {
                    path: '/company',
                    name: 'company',
                    component: () => import('Pages/company'),
                },
                {
                    path: '/company-data',
                    name: 'company-data',
                    component: () => import('Pages/company/data'),
                }
            ]
        }
    ]
})