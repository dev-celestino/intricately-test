import Vue from 'vue'
import Router from 'vue-router'
import baseLayout from 'Layouts/base'
import CompanyPage from 'Pages/company'
import CompanyDataPage from 'Pages/company/data'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'app',
            redirect: 'company',
            component: baseLayout,
            children: [
                {
                    path: '/company',
                    name: 'company',
                    component: CompanyPage,
                },
                {
                    path: '/company-data',
                    name: 'company-data',
                    component: CompanyDataPage,
                }
            ]
        }
    ]
})