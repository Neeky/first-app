
import VueRouter from "vue-router"

import Home from "../components/Home"
import About from "../components/About"

import News from '../components/News'
import Citys from '../components/Citys'

const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home,
            children:[
                {
                    path:"news",
                    component: News
                },
                {
                    path:"citys",
                    component:Citys
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
})

export default router